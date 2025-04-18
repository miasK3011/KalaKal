import estilo from "@/components/confrontation-plan/styles";
import React from "react";
import {
  Linking,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

export default function PlanoEnfrentamento() {
  const introducao = `\tEste plano encontra-se inserido no Projeto Piauí Pilares de Crescimento e Inclusão Social do Governo do Estado do Piauí, efetivado por convênio com o Banco Mundial, em conjunto com as secretarias Estaduais de Planejamento, Educação, Desenvolvimento Rural, Meio Ambiente e Instituto de Terras do Piauí.\n\n\tCom ele, esperamos melhorar a resposta às doenças negligenciadas no Piauí, enfrentando os fatores de risco de adoecimento da população, detectando oportunamente as doenças e apoiando intervenções adequadas de prevenção, diagnóstico, tratamento e controle da tuberculose, hanseníase, doença de chagas, leishmaniose e geohelmintíases.`;

  const handleAbrirArquivo = () => {
    Linking.openURL(
      "https://docs.bvsalud.org/biblioref/2020/09/1118911/plano_estadual_das_negligenciadas_piau__2015_2018_para_livreto.pdf"
    );
  };

  return (
    <View style={estilo.container}>
      <View style={estilo.content}>
        <ScrollView>
          <View>
            <Text style={estilo.descricao}>{introducao}</Text>
            <TouchableHighlight
              style={estilo.button}
              onPress={handleAbrirArquivo}
            >
              <Text style={estilo.text}>Abrir Arquivo</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
