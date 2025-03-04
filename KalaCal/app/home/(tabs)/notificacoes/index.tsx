import HeaderHome from "@/components/header/header-home";
import { Text, View } from "react-native";

export default function Notificacoes() {
  return (
    <View style={{ backgroundColor: "#fafafa", flex: 1 }}>
      <HeaderHome />
      <Text>Notificações</Text>
    </View>
  );
}
