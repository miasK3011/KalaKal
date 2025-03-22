import { StyleSheet } from 'react-native';
import { colors } from '../../commons';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.defaultBackgroundColor,
  },
  content: {
    padding: 20,
    margin: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 5,
  },
  secao: {
    marginTop: 20,
  },
  secaoTitle: {
    marginBottom: 15,
    marginLeft: 20,
  },
  searchBar: {
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: colors.defaultTextColor,
    textAlign: 'justify'
  },
  extraInfo: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  extraTitle: {
    color: colors.defaultTextColor,
    flex: 1
  },
  extraDescription: {
    backgroundColor: colors.secondaryColor,
    borderRadius: 5,
    padding: 16,
    maxWidth: 140,
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  extraDescriptionText: {
    color: '#fff',
  },
});
