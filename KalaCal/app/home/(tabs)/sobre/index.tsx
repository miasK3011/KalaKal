import { Button, Linking, Pressable, StyleSheet, Text, View } from "react-native";

export default function Sobre() {
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 30, fontWeight: "bold"}}>Desenvolvido por Mias</Text>
        <Pressable
          onPress={() => {
            Linking.openURL("https://github.com/miasK3011");
          }}
          style={{borderBlockColor: 'black' ,padding: 10}}
        >
          <Text>GitHub</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
