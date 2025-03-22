import style from "@/components/conteudo/style";
import Text from "@/components/Text";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";

export default function ConteudoScreen() {
  const { content, title } = useLocalSearchParams<{
    content: string;
    title: string;
  }>();

  return (
    <ScrollView style={style.container}>
      <View style={style.content}>
        <Text style={style.text}>{content}</Text>

        {title === "Agente Etiológico" && (
          <View>
            <View style={style.extraInfo}>
              <Text style={[style.extraTitle, { flex: 1 }]}>Família</Text>
              <View style={[style.extraDescription, { marginLeft: 10 }]}>
                <Text style={style.extraDescriptionText}>trypanosomatidae</Text>
              </View>
            </View>
            <View style={style.extraInfo}>
              <Text style={[style.extraTitle, { flex: 1 }]}>Gênero</Text>
              <View style={[style.extraDescription, { marginLeft: 10 }]}>
                <Text style={style.extraDescriptionText}>Leishmania</Text>
              </View>
            </View>
            <View style={style.extraInfo}>
              <Text style={style.extraTitle}>Complexo de espécies</Text>
              <View style={[style.extraDescription, { marginLeft: 10 }]}>
                <Text style={style.extraDescriptionText}>L. donovani</Text>
              </View>
            </View>
            <View style={style.extraInfo}>
              <Text style={style.extraTitle}>Espécies</Text>
              <View style={[style.extraDescription, { marginLeft: 10 }]}>
                <Text style={style.extraDescriptionText}>L. chagasi</Text>
                <Text style={style.extraDescriptionText}>L. donovani</Text>
                <Text style={style.extraDescriptionText}>L. infantum</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
