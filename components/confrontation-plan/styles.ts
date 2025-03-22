import { colors } from "@/commons";
import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    content: {
        justifyContent: 'center',
        flex: 1,
        margin: 20,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    descricao: {
        fontSize: 16,
        color: colors.defaultTextColor,
        textAlign: 'justify'
    },
    button: {
        alignItems: 'center',
        backgroundColor: colors.secondaryColor,
        padding: 10,
        marginTop: 20
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default estilo;