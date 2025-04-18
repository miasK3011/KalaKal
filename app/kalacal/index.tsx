import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import React, { useState } from "react";
import {
  Image,
  Linking,
  Modal,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

export default function KalaCal() {
  const [isPressed, setIsPressed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [urlToOpen, setUrlToOpen] = useState("");

  const handleOpenUrl = (url: string) => {
    setUrlToOpen(url);
    setDrawerVisible(true);
  };

  const confirmOpenUrl = () => {
    if (urlToOpen) {
      Linking.openURL(urlToOpen);
    }
    setDrawerVisible(false);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          width: "100%",
          top: 50,
          height: 200,
          alignItems: "center",
          padding: 20,
        }}
      >
        <Image
          source={require("@/assets/images/kalacal-banner.png")}
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
        />
        <View style={{ display: "flex", gap: 20, marginTop: 20 }}>
          <Text style={{ marginTop: 10, textAlign: "justify" }}>
            O website calcula a estimativa da probabilidade de morte para
            pacientes com calazar de acordo com os dados coletados de pacientes
            tratados em Teresina-PI, Brasil, de 2005 a 2013.
          </Text>
          <Text style={{ textAlign: "justify" }}>
            Essas estimativas de probabilidade de morte NÃO devem ser
            interpretadas como a chance de morte de um paciente específico, mas
            como um indicador da gravidade da doença em outras populações de
            pacientes semelhantes em diferentes locais ou períodos de tempo.
          </Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <Button
            size="lg"
            action="secondary"
            onPress={() => handleOpenUrl("https://www.sbmt.org.br/kalacal/")}
          >
            <ButtonText className="text-orange-500">Acessar Website</ButtonText>
          </Button>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={drawerVisible}
        onRequestClose={() => setDrawerVisible(false)}
      >
        <View style={styles.drawerOverlay}>
          <View style={styles.drawerContent}>
            <Text style={styles.drawerTitle}>Confirmação</Text>
            <Text style={styles.drawerText}>
              Você será redirecionado para fora do aplicativo. Deseja continuar?
            </Text>

            <View style={styles.buttonContainer}>
              <Button
                onPress={() => setDrawerVisible(false)}
                action="secondary"
                className="flex-1 mx-2"
              >
                <ButtonText>Cancelar</ButtonText>
              </Button>

              <Button
                onPress={confirmOpenUrl}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                style={{
                  flex: 1,
                  marginHorizontal: 8,
                  backgroundColor: isPressed ? "#c2410c" : "#f97316",
                }}
                action="default"
              >
                <ButtonText style={{ color: "white" }}>Continuar</ButtonText>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  drawerOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  drawerContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: 200,
  },
  drawerTitle: {
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  drawerText: {
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
