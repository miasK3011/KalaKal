import { StyleSheet } from "react-native";
import { colors } from "@/commons";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.defaultBackgroundColor,
  },
  content: {
    flex: 1,
    backgroundColor: "#FFF",
    margin: 20,
    marginTop: 25,
    padding: 10,
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
  destaque: {
    color: colors.secondaryColor,
  },
});
