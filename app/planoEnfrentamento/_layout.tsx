import "@/global.css";
import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

export default function PlanoEnfrentamentoLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack
        screenOptions={{
          headerShown: true,
          title: "Plano de Enfrentamento",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Plano de Enfrentamento",
          }}
        />
      </Stack>
    </>
  );
}
