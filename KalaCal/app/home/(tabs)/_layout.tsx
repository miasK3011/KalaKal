import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";

export default function TabLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content"  />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "tomato",
          headerShown: false,
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="details"
          options={{
            title: "Sobre",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="address-card" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
