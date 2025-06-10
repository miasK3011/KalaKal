import api from "@/services/api";
import { KalacalOptions } from "../types";

export default async function getKalacalOptions(
): Promise<KalacalOptions> {
    try {
        const response = await api.get("/kalacal/opcoes/");
        return response.data as KalacalOptions;
    } catch (error) {
        console.error("Erro ao buscar ocorrências:", error);
        return {
            dados_laboratoriais: [],
            faixas_etarias: [],
            modelos: [],
            sinais_clinicos: [],
            sitios_sangramento: [],
        };
    }
}