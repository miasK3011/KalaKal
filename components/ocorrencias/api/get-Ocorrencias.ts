import api from "@/services/api";
import { Ocorrencia } from "../types";

export default async function GetOcorrencias(
  ): Promise<Ocorrencia[]> {
    try {
      const response = await api.get("/casos/");
      return response.data as Ocorrencia[];
    } catch (error) {
      console.error("Erro ao buscar ocorrências:", error);
      return [];
    }
  }