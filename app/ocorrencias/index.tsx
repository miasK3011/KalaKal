import getOcorrencias from "@/components/ocorrencias/api/get-Ocorrencias";
import { Ocorrencia } from "@/components/ocorrencias/types";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import dayjs from "@/lib/dayjs";
import KalaCalAPI from "@/services/KalaCalAPI";
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons/faUserPlus";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { router, useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StatusBar,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";

const tipoIcones: { [key: string]: string } = {
  humano: "🧑",
  animal: "🐾",
};

export default function OcorrenciasScreen() {
  const [casos, setCasos] = useState<Ocorrencia[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      async function carregarOcorrencias() {
        const dados = await getOcorrencias();
        setCasos(dados);
        setIsLoading(false);
      }

      carregarOcorrencias();

      return () => {};
    }, [])
  );

  const handleEdit = (id: string | number) => {
    router.push(`/ocorrencias/editar/${id}`);
  };

  const handleDelete = async (id: string | number) => {
    try {
      const response = await KalaCalAPI.deleteCaso(Number(id));
      if (response.status === 204) {
        ToastAndroid.show(
          `Caso ${id} deletado com sucesso!`,
          ToastAndroid.SHORT
        );
        setCasos((prevCasos) => prevCasos.filter((caso) => caso.id !== id));
      }
    } catch (error) {
      console.error("Erro ao deletar caso:", error);
      Alert.alert("Erro", "Erro ao deletar caso. Tente novamente mais tarde.");
    }
  };

  const handleCreate = () => {
    router.push("/ocorrencias/criar");
  };

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-100">
        <ActivityIndicator size="large" color="orange" />
        <Text className="mt-2 text-gray-600">Carregando ocorrências...</Text>
      </View>
    );
  }

  const confirmDelete = (id: string | number, identificador: string) => {
    Alert.alert(
      "Confirmar Exclusão",
      `Tem certeza que deseja excluir o caso "${identificador}"?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          onPress: () => handleDelete(id),
          style: "destructive",
        },
      ]
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 bg-gray-100 px-4 pt-5 pb-5">
        <Button action="secondary" className="mb-4" onPress={handleCreate}>
          <FontAwesomeIcon icon={faUserPlus} color="orange" size={16} />
          <Text className="text-gray-800 mr-2">Adicionar Ocorrência</Text>
        </Button>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {casos.map((caso) => (
            <View
              key={caso.id}
              className="bg-white rounded-xl p-4 mb-3 flex-row justify-between items-center shadow-sm"
            >
              <View className="flex-row items-center flex-1">
                <View className="w-10 h-10 rounded-full bg-orange-100 justify-center items-center mr-3">
                  <Text className="text-xl">
                    {tipoIcones[caso.tipo_caso.toLowerCase()] || "❓"}
                  </Text>
                </View>
                <View className="flex-1">
                  <Text className="text-base font-semibold text-gray-800 mb-1">
                    {caso.identificador}
                  </Text>
                  <Text className="text-sm text-gray-600">
                    {caso.tipo_display} -{" "}
                    {dayjs(caso.created_at).format("DD/MM/YYYY")}
                  </Text>
                </View>
              </View>

              <View className="flex-row items-center gap-5">
                <TouchableOpacity onPress={() => handleEdit(caso.id)}>
                  <FontAwesomeIcon icon={faPen} size={18} color="gray" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => confirmDelete(caso.id, caso.identificador)}
                >
                  <FontAwesomeIcon icon={faTrash} color="orange" size={18} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
