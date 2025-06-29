import KalaCalAPI from "@/services/KalaCalAPI";
import { KalacalOptions } from "../types";

export default async function getKalacalOptions(): Promise<KalacalOptions | null> {
    try {
        const response = await KalaCalAPI.getOpcoesFormulario();

        if (response.success && response.data) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error("Erro ao buscar opções do Kalacal:", error);
        return null;
    }
}