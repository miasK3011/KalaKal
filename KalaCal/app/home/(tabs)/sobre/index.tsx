import { colors } from "@/commons";
import estilo from "@/components/about/styles";
import React, { Component } from "react";
import { Linking, ScrollView, StatusBar, Text, View } from "react-native";

export default class SobreScreen extends Component {
  static navigationOptions = {
    title: "Sobre o Redekal",
    headerStyle: {
      backgroundColor: colors.mainColor,
    },
    headerTintColor: "#fff",
  };
  // (link do currículo lattes: http://lattes.cnpq.br/2072547853578344)

  // (link do currículo lattes:  http://lattes.cnpq.br/5795414161401952)
  // Apoio na Elaboração
  openMiriane = () => {
    Linking.openURL("http://lattes.cnpq.br/2072547853578344");
  };

  openCarlos = () => {
    Linking.openURL("http://lattes.cnpq.br/5795414161401952");
  };

  //   Prof. Dr. Carlos Henrique Nery Costa
  // Professor Orientador/ UFPI/ RENORBIO e Coordenador do Centro de Inteligência em Agravos Tropicais, Emergentes e Negligenciados – CIATEN

  render() {
    return (
      <>
        <StatusBar
          barStyle={"dark-content"}
        />
        <View style={estilo.container}>
          <View style={estilo.content}>
            <ScrollView>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.defaultTextColor,
                    textAlign: "justify",
                  }}
                >{`\tO Redekal é uma ferramenta com o itinerário da promoção e do cuidado do paciente com Calazar com o objetivo de facilitar medidas preventivas e agilizar o diagnostico oportuno e tratamento adequado, reduzindo assim a letalidade pelo agravo.\n\n\tDestina-se a profissionais da área da saúde dos três níveis de atenção, gestores municipais e gestores hospitalares.`}</Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.defaultTextColor,
                    textAlign: "justify",
                  }}
                >
                  {`\n\tDesenvolvido`} por{" "}
                  <Text onPress={this.openMiriane} style={estilo.destaque}>
                    Francisca Miriane de Araújo Batista
                  </Text>
                  , orientada por{" "}
                  <Text onPress={this.openCarlos} style={estilo.destaque}>
                    Carlos Henrique Nery Costa
                  </Text>
                  .
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </>
    );
  }
}
