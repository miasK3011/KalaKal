import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";
import { AuthProvider } from "@/hooks/useAPI";
import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <>
      <AuthProvider>
        <GluestackUIProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="index" />
          </Stack>
        </GluestackUIProvider>
      </AuthProvider>
    </>
  );
}
