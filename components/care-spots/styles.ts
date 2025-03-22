import { StyleSheet } from 'react-native';
import { colors } from '../../commons';


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ebebeb',
        padding: 10,
        paddingBottom: 0,
    },
    content: {
        justifyContent: 'center',
        flex: 1,
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 4,
    },
    info: {
        flex: 1,
    },
    tituloHospital: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    card: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    icone: {
        marginRight: 10,
    },
    cuidados: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
    },
    cuidado: {
        backgroundColor: 'mediumseagreen',
        padding: 5,
        borderRadius: 10,
        marginRight: 5,
    },
    textoCuiado: {
        fontWeight: 'bold',
        color: 'white',
    },
    flex: {
        flex: 1,
    },
    markerTitle: {
        marginBottom: 5,
        fontWeight: '500',
        color: '#0F2027',
        fontSize: 16,
        letterSpacing: 0.5,
    },
    markerPhone: {
        marginBottom: 5,
        color: '#6C6C80',
        fontSize: 14,
        letterSpacing: 0.5,
    },
    markerButtonContainer: {
        backgroundColor: colors.secondaryColor,
        borderRadius: 5,
        padding: 5,
    },
    markerButton: {
        color: '#FFF',
        fontWeight: '500',
        textAlign: 'center',
    },
    menu: {
        position: 'absolute',
        bottom: 65,
        right: 13,
    },
    centerButton: {
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 4,
        backgroundColor: '#FFF',
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
});
