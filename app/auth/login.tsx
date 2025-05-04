import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useRouter, Link } from "expo-router";
import Loading from "@/components/ui/loading/loader";
import estilo from "@/components/login/styles";

export default function EntrarScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const SignIn = (email: string, password: string) => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      router.replace("/home/(tabs)/menu");
    }, 200);
  };

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      accessible={false}
    >
      <View style={{ flex: 1 }}>
        <Loading loading={loading} />
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require("@/assets/images/background.png")}
          style={estilo.image}
        >
          <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Image
                source={require("@/assets/images/logo_vertical.png")}
                style={estilo.logo}
              />
              <View style={estilo.inputContainer}>
                <TextInput
                  style={estilo.textInput}
                  placeholder={"E-mail"}
                  onChangeText={setEmail}
                  placeholderTextColor="rgba(255,255,255,0.5)"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                  keyboardType="email-address"
                  value={email}
                />
                <TextInput
                  style={estilo.textInput}
                  placeholder={"Senha"}
                  placeholderTextColor="rgba(255,255,255,0.5)"
                  secureTextEntry={true}
                  onChangeText={setSenha}
                  returnKeyType="done"
                  onSubmitEditing={() => SignIn(email, senha)}
                  value={senha}
                />
              </View>
              <View style={estilo.buttonsContainer}>
                <TouchableOpacity 
                  onPress={() => SignIn(email, senha)}
                >
                  <Image
                    source={require("@/assets/images/login.png")}
                    style={estilo.buttons}
                  />
                </TouchableOpacity>
                <Link href="/" asChild>
                  <TouchableOpacity>
                    <Image
                      source={require("@/assets/images/cadastro.png")}
                      style={estilo.buttons}
                    />
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}