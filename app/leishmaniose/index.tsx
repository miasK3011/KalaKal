import { colors } from "@/commons";
import Item from "@/components/Item";
import itens from "@/components/leishmaniose/object";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";

export default function LeishmanioseScreen() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={estilo.container}>
        <View style={estilo.container}>
          <View style={estilo.content}>
            {itens.map((s) => (
              <Item
                key={s.titulo}
                showIcon={true}
                icon="help-outline"
                iconColor={colors.secondaryColor}
                style={{ margin: 0 }}
                item={{ title: s.titulo, content: s.descricao }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  content: {
    justifyContent: "center",
    flex: 1,
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  info: {
    flex: 1,
  },
  descricao: {
    fontSize: 14,
    color: "#6C6C80",
    letterSpacing: 0.5,
  },
  card: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
