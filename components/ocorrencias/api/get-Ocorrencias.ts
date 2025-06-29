import api from "@/services/KalaCalAPI";
import { Ocorrencia } from "../types";

export default async function getOcorrencias(
): Promise<Ocorrencia[]> {
  try {
    const response = await api.get("/casos/");
    return response.data as Ocorrencia[];
  } catch (error) {
    console.error("Erro ao buscar ocorrências:", error);
    return [];
  }
}