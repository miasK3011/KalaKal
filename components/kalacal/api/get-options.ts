import api from "@/services/api";
import { KalacalOptions } from "../types";

export default async function getKalacalOptions(
): Promise<KalacalOptions | null> {
    try {
        const response = await api.get("/kalacal/opcoes/");
        return response.data as KalacalOptions;
    } catch (error) {
        console.error("Erro ao buscar ocorrências:", error);
        return null;
    }
}