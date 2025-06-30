import React from "react";
import { StatusBar, Text, View } from "react-native";

export default function LinhaPromocao() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View className="p-4 gap-8">
        <View className="mt-2 bg-white flex flex-row justify-center items-center border rounded-lg border-pink-400 p-5">
          <Text className="text-lg font-semibold">Promoção da Saúde</Text>
        </View>
        <View className="flex bg-white flex-row justify-center items-center border rounded-lg border-orange-400 p-5">
          <Text className="text-lg font-semibold">Vigilância</Text>
        </View>
        <View className="flex bg-white flex-row justify-center items-center border rounded-lg border-yellow-400 p-5">
          <Text className="text-lg font-semibold">Atenção Primária</Text>
        </View>
        <View className="flex bg-white flex-row justify-center items-center border rounded-lg border-green-400 p-5">
          <Text className="text-lg font-semibold">Atenção Secundária</Text>
        </View>
      </View>
    </>
  );
}
