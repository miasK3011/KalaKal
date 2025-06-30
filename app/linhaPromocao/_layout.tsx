import "@/global.css";
import { Stack } from "expo-router";
import React from "react";

export default function LinhaPromocaoLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: true,
          title: "Ocorrências",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Linha de Promoção",
          }}
        />
      </Stack>
    </>
  );
}
