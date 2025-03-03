import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, View } from "react-native";

export default function LoginPage() {
  return (
    <LinearGradient colors={["#FFA500", "#FF4500"]} style={{ flex: 1 }}>
      <View className="flex items-center  h-full p-4">
        <View className="w-full flex items-center justify-center mt-11">
          <Image
            source={require("../../assets/images/logo_vertical.png")}
            style={{
              width: 300,
              height: 300,
              resizeMode: "contain",
              marginBottom: 10,
            }}
          />
        </View>
        <View className="w-full flex items-center justify-center mt-11 gap-3">
          <Input
            variant="underlined"
            size="xl"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField placeholderTextColor={"white"} placeholder="Email" />
          </Input>
          <Input
            variant="underlined"
            size="xl"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField type="password" placeholder="Senha" />
          </Input>
        </View>
        <Button
          action="secondary"
          className="w-full absolute bottom-5"
          size="lg"
          onPress={() => {
            router.push("/auth/login");
          }}
        >
          <ButtonText className="text-orange-500">Entrar</ButtonText>
        </Button>
      </View>
    </LinearGradient>
  );
}
