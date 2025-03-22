import "@/global.css";
import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

export default function LeishmanioseLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack
        screenOptions={{
          headerShown: true,
          title: "Pontos de Cuidado",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Pontos de Cuidado",
          }}
        />
      </Stack>
    </>
  );
}
