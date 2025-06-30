import { useAuth } from "@/hooks/useAPI";
import { User } from "@/services/types";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as z from "zod";

// Schema de validação para os dados do perfil
const profileSchema = z.object({
  username: z
    .string()
    .min(3, "Nome de usuário deve ter pelo menos 3 caracteres"),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.string().email("Email inválido"),
});

type ProfileData = z.infer<typeof profileSchema>;

export default function ProfileScreen() {
  const { user, loading, updateProfile, refreshUserData, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ProfileData>({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    refreshUserData();
    if (user) {
      setFormData({
        username: user.username || "",
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
      });
    }
  }, [user]);

  useEffect(() => {
    if (!isEditing) {
      if (user) {
        setFormData({
          username: user.username || "",
          first_name: user.first_name || "",
          last_name: user.last_name || "",
          email: user.email || "",
        });
      }
      setErrors({});
    }
  }, [isEditing, user]);

  const handleChange = (field: keyof ProfileData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSave = async () => {
    try {
      const validData = profileSchema.parse(formData);
      setErrors({});
      setIsSubmitting(true);

      const { email, ...updateData } = validData;

      const result = await updateProfile(updateData as Partial<User>);

      if (result.success) {
        Alert.alert("Sucesso", "Perfil atualizado com sucesso");
        setIsEditing(false);
      } else {
        Alert.alert(
          "Erro",
          result.error || "Não foi possível atualizar o perfil"
        );
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRefresh = async () => {
    const result = await refreshUserData();
    if (!result.success) {
      Alert.alert("Erro", "Não foi possível atualizar os dados");
    }
  };

  const handleLogout = async () => {
    Alert.alert("Sair da conta", "Tem certeza que deseja sair?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sair",
        style: "destructive",
        onPress: async () => {
          await logout();
          router.replace("/auth/login");
        },
      },
    ]);
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#144696" />
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <StatusBar style="dark" />

      <View className="bg-white px-4 pt-12 pb-4 shadow-sm">
        {/* <View className="flex-row justify-between items-center">
          <Text className="text-2xl font-bold text-gray-800">Meu Perfil</Text>
          <TouchableOpacity
            className="py-2 px-4 rounded-full bg-gray-100"
            onPress={() => setIsEditing(!isEditing)}
          >
            <Text className="text-orange-600 font-semibold">
              {isEditing ? "Cancelar" : "Editar"}
            </Text>
          </TouchableOpacity>
        </View> */}

        <View className="items-center mt-4">
          <View className="w-24 h-24 rounded-full bg-orange-500 items-center justify-center">
            <Text className="text-3xl font-bold text-white">
              {user?.first_name
                ? user.first_name[0].toUpperCase()
                : user?.username[0].toUpperCase()}
            </Text>
          </View>
          <Text className="mt-2 text-lg font-semibold text-gray-800">
            {user?.first_name && user?.last_name
              ? `${user.first_name} ${user.last_name}`
              : user?.username}
          </Text>
        </View>
      </View>

      <View className="px-4 py-6">
        <View className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          {/* Username */}
          <View className="p-4 border-b border-gray-100">
            <Text className="text-sm text-gray-500 mb-1">Nome de usuário</Text>
            {isEditing ? (
              <View>
                <TextInput
                  className={`py-2 px-3 rounded-lg bg-gray-50 border ${
                    errors.username ? "border-red-500" : "border-gray-200"
                  }`}
                  value={formData.username}
                  onChangeText={(value) => handleChange("username", value)}
                />
                {errors.username && (
                  <Text className="text-xs text-red-500 mt-1">
                    {errors.username}
                  </Text>
                )}
              </View>
            ) : (
              <Text className="text-gray-800 font-medium">
                {user?.username}
              </Text>
            )}
          </View>

          {/* Email */}
          <View className="p-4 border-b border-gray-100">
            <Text className="text-sm text-gray-500 mb-1">E-mail</Text>
            <Text className="text-gray-800 font-medium">{user?.email}</Text>
          </View>

          {/* First Name */}
          <View className="p-4 border-b border-gray-100">
            <Text className="text-sm text-gray-500 mb-1">Nome</Text>
            {isEditing ? (
              <View>
                <TextInput
                  className={`py-2 px-3 rounded-lg bg-gray-50 border ${
                    errors.first_name ? "border-red-500" : "border-gray-200"
                  }`}
                  value={formData.first_name}
                  onChangeText={(value) => handleChange("first_name", value)}
                  placeholder="Seu nome"
                />
                {errors.first_name && (
                  <Text className="text-xs text-red-500 mt-1">
                    {errors.first_name}
                  </Text>
                )}
              </View>
            ) : (
              <Text className="text-gray-800 font-medium">
                {user?.first_name || "(Não informado)"}
              </Text>
            )}
          </View>

          {/* Last Name */}
          <View className="p-4 border-b border-gray-100">
            <Text className="text-sm text-gray-500 mb-1">Sobrenome</Text>
            {isEditing ? (
              <View>
                <TextInput
                  className={`py-2 px-3 rounded-lg bg-gray-50 border ${
                    errors.last_name ? "border-red-500" : "border-gray-200"
                  }`}
                  value={formData.last_name}
                  onChangeText={(value) => handleChange("last_name", value)}
                  placeholder="Seu sobrenome"
                />
                {errors.last_name && (
                  <Text className="text-xs text-red-500 mt-1">
                    {errors.last_name}
                  </Text>
                )}
              </View>
            ) : (
              <Text className="text-gray-800 font-medium">
                {user?.last_name || "(Não informado)"}
              </Text>
            )}
          </View>

          {/* Registration Date */}
          <View className="p-4">
            <Text className="text-sm text-gray-500 mb-1">Data de registro</Text>
            <Text className="text-gray-800 font-medium">
              {user?.date_joined
                ? new Date(user.date_joined).toLocaleDateString("pt-BR")
                : ""}
            </Text>
          </View>
        </View>

        {isEditing && (
          <TouchableOpacity
            className={`bg-orange-600 py-3 px-6 rounded-xl mb-4 items-center ${
              isSubmitting ? "opacity-70" : ""
            }`}
            onPress={handleSave}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator color="#fff" size="small" />
            ) : (
              <Text className="text-white font-bold text-base">
                Salvar Alterações
              </Text>
            )}
          </TouchableOpacity>
        )}

        {/*  <TouchableOpacity
          className="bg-gray-100 py-3 px-6 rounded-xl mb-4 flex-row justify-center items-center"
          onPress={handleRefresh}
        >
          <Ionicons name="refresh" size={18} color="orange" />
          <Text className="text-orange-400 font-semibold ml-2">
            Atualizar Dados
          </Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          className="border border-red-500 bg-white py-3 px-6 rounded-xl mb-4 flex-row justify-center items-center"
          onPress={handleLogout}
        >
          <Ionicons name="log-out-outline" size={18} color="#FF3B30" />
          <Text className="text-red-500 font-semibold ml-2">Sair da Conta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
