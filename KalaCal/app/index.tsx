import { Button, ButtonText } from "@/components/ui/button";
import { Link, router } from "expo-router";
import React from "react";
import { Image, ImageBackground, StatusBar, Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={"transparent"}
        barStyle="light-content"
        animated={true}
      />
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 0,
          paddingHorizontal: 16,
        }}
      >
        <Image
          source={require("../assets/images/logo_vertical.png")}
          style={{
            width: 300,
            height: 300,
            resizeMode: "contain",
            marginBottom: 10,
          }}
        />
        <View
          style={{
            marginTop: 60,
            gap: 10,
            padding: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
            Bem Vindo!
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              textAlign: "center",
              lineHeight: 20,
            }}
          >
            Com o aplicativo Redekal você profissional de saúde ou gestor tem
            acesso a todo itinerário da promoção e do cuidado ao calazar.
          </Text>
        </View>
        <Button
          action="secondary"
          className="w-full absolute bottom-5"
          size="lg"
          onPress={() => {
            router.push("/home/(tabs)/home");
          }}
        >
          <ButtonText className="text-orange-500">Continuar</ButtonText>
        </Button>
      </ImageBackground>
    </>
  );
}
