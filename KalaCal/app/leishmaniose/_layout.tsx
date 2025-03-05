import "@/global.css";
import { Stack } from "expo-router";
import React from "react";

export default function LeishmanioseLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: true,
          title: "Calazar",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Calazar",
          }}
        />
        <Stack.Screen
          name="conteudo/index"
          options={({ route }: { route: { params?: { title?: string } } }) => ({
            title: route.params?.title || "Detalhes",
          })}
        />
      </Stack>
    </>
  );
}
