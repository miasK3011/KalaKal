import { KalacalFormData, KalacalOptions, KalacalResponse } from '@/components/kalacal/types';
import { Ocorrencia, OcorrenciaForm } from '@/components/ocorrencias/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { ApiInfo, ApiResponse, AuthResponse, LoginCredentials, MetricasSistema, RefreshTokenResponse, RegisterData, User } from './types';

interface ApiConfig {
    baseURL: string;
    apiKey: string;
    timeout: number;
}

const API_CONFIG: ApiConfig = {
    baseURL: process.env.EXPO_PUBLIC_API_BASE_URL,
    apiKey: process.env.EXPO_PUBLIC_API_KEY,
    timeout: 10000
};

const apiClient = axios.create({
    baseURL: API_CONFIG.baseURL,
    timeout: API_CONFIG.timeout,
    headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_CONFIG.apiKey
    }
});

// Interceptador para adicionar token JWT automaticamente
apiClient.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Interceptador para lidar com refresh token
apiClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as any;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = await AsyncStorage.getItem('refreshToken');
                if (refreshToken) {
                    const response = await KalaCalAPI.refreshToken(refreshToken);
                    await AsyncStorage.setItem('accessToken', response.data.access);

                    // Repetir requisição original com novo token
                    originalRequest.headers.Authorization = `Bearer ${response.data.access}`;
                    return apiClient(originalRequest);
                }
            } catch (refreshError) {
                // Token refresh falhou, fazer logout
                await AsyncStorage.multiRemove(['accessToken', 'refreshToken', 'user']);
                // Aqui você pode disparar uma ação para redirecionar para login
            }
        }

        return Promise.reject(error);
    }
);

class KalaCalAPI {
    static handleError(error: AxiosError): ApiResponse {
        console.error('API Error:', error);

        if (error.response) {
            // Erro da API (4xx, 5xx)
            const responseData = error.response.data as any;
            return {
                success: false,
                error: responseData?.message || responseData?.detail || 'Erro na requisição',
                status: error.response.status,
                data: responseData
            };
        } else if (error.request) {
            // Erro de rede
            return {
                success: false,
                error: 'Erro de conexão. Verifique sua internet.',
                status: null
            };
        } else {
            // Outro erro
            return {
                success: false,
                error: error.message || 'Erro desconhecido',
                status: null
            };
        }
    }

    static async makeRequest<T>(requestFn: () => Promise<AxiosResponse<T>>): Promise<ApiResponse<T>> {
        try {
            const response = await requestFn();
            return {
                success: true,
                data: response.data,
                status: response.status
            };
        } catch (error) {
            return this.handleError(error as AxiosError);
        }
    }

    // ===== ENDPOINTS PÚBLICOS (apenas API Key) =====

    static async getAPIInfo(): Promise<ApiResponse<ApiInfo>> {
        return this.makeRequest(() => apiClient.get<ApiInfo>('/api/auth/info/'));
    }

    static async getAuthStatus(): Promise<ApiResponse<any>> {
        return this.makeRequest(() => apiClient.get('/api/auth/status/'));
    }

    // ===== AUTENTICAÇÃO =====

    static async register(userData: RegisterData): Promise<ApiResponse<AuthResponse>> {
        const result = await this.makeRequest(() =>
            apiClient.post<AuthResponse>('/api/auth/register/', userData)
        );

        if (result.success && result.data?.access) {
            // Salvar tokens e dados do usuário
            await AsyncStorage.multiSet([
                ['accessToken', result.data.access],
                ['refreshToken', result.data.refresh],
                ['user', JSON.stringify(result.data.user)]
            ]);
        }

        return result;
    }

    static async login(credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> {
        const result = await this.makeRequest(() =>
            apiClient.post<AuthResponse>('/api/auth/login/', credentials, {
                headers: { "Content-Type": "application/json" }
            })
        );

        if (result.success && result.data?.access) {
            await AsyncStorage.multiSet([
                ['accessToken', result.data.access],
                ['refreshToken', result.data.refresh],
                ['user', JSON.stringify(result.data.user)]
            ]);
        }

        return result;
    }

    static async logout(): Promise<ApiResponse<void>> {
        try {
            const refreshToken = await AsyncStorage.getItem('refreshToken');

            if (refreshToken) {
                // Tentar fazer logout no servidor
                await this.makeRequest(() =>
                    apiClient.post('/api/auth/logout/', { refresh: refreshToken })
                );
            }
        } catch (error) {
            console.error('Erro no logout do servidor:', error);
        } finally {
            // Sempre limpar dados locais
            await AsyncStorage.multiRemove(['accessToken', 'refreshToken', 'user']);
        }

        return { success: true };
    }

    static async refreshToken(refreshToken: string): Promise<AxiosResponse<RefreshTokenResponse>> {
        // Não usar interceptador aqui para evitar loop infinito
        return axios.post<RefreshTokenResponse>(
            `${API_CONFIG.baseURL}/api/auth/refresh/`,
            { refresh: refreshToken },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': API_CONFIG.apiKey
                }
            }
        );
    }

    // ===== PERFIL DO USUÁRIO (Requer JWT) =====

    static async getProfile(): Promise<ApiResponse<User>> {
        return this.makeRequest(() => apiClient.get<User>('/api/auth/profile/'));
    }

    static async updateProfile(userData: Partial<User>): Promise<ApiResponse<User>> {
        const result = await this.makeRequest(() =>
            apiClient.put<User>('/api/auth/profile/update/', userData)
        );

        if (result.success && result.data) {
            // Atualizar dados do usuário no AsyncStorage
            await AsyncStorage.setItem('user', JSON.stringify(result.data));
        }

        return result;
    }

    // ===== CASOS (Requer JWT) =====

    static async getCasos(): Promise<ApiResponse<Ocorrencia[]>> {
        return this.makeRequest(() => apiClient.get<Ocorrencia[]>('/api/casos/'));
    }

    static async createCaso(casoData: FormData): Promise<ApiResponse<OcorrenciaForm>> {
        return this.makeRequest(() => apiClient.post<OcorrenciaForm>('/api/casos/', casoData, {
            headers: { "Content-Type": "multipart/form-data" },
        }));
    }

    static async getCaso(id: number): Promise<ApiResponse<OcorrenciaForm>> {
        return this.makeRequest(() => apiClient.get<OcorrenciaForm>(`/api/casos/${id}/`));
    }

    static async updateCaso(id: number, casoData: FormData): Promise<ApiResponse<OcorrenciaForm>> {
        return this.makeRequest(() => apiClient.put<Ocorrencia>(`/api/casos/${id}/`, casoData, {
            headers: { "Content-Type": "multipart/form-data" }
        }));
    }

    static async deleteCaso(id: number): Promise<ApiResponse<void>> {
        return this.makeRequest(() => apiClient.delete(`/api/casos/${id}/`));
    }

    // ===== KALACAL CALCULATOR (Requer JWT) =====

    static async calcularProbabilidade(dadosCalculo: KalacalFormData): Promise<ApiResponse<KalacalResponse>> {
        return this.makeRequest(() =>
            apiClient.post('/api/kalacal/calcular/', dadosCalculo)
        );
    }

    static async getOpcoesFormulario(): Promise<ApiResponse<KalacalOptions>> {
        return this.makeRequest(() => apiClient.get<KalacalOptions>('/api/kalacal/opcoes/'));
    }

    static async getMetricasSistema(): Promise<ApiResponse<MetricasSistema>> {
        return this.makeRequest(() => apiClient.get<MetricasSistema>('/api/kalacal/metricas/'));
    }

    // ===== MÉTODOS DE CONVENIÊNCIA =====

    static async isAuthenticated(): Promise<boolean> {
        try {
            const token = await AsyncStorage.getItem('accessToken');
            return !!token;
        } catch (error) {
            return false;
        }
    }

    static async getCurrentUser(): Promise<User | null> {
        try {
            const userString = await AsyncStorage.getItem('user');
            return userString ? JSON.parse(userString) : null;
        } catch (error) {
            return null;
        }
    }

    static async clearAuthData(): Promise<void> {
        await AsyncStorage.multiRemove(['accessToken', 'refreshToken', 'user']);
    }
}

export default KalaCalAPI;