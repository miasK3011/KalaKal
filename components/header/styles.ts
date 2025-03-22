import { StyleSheet } from 'react-native';

const HEADER_MAX_HEIGHT = 200;

export default StyleSheet.create({
  container: {
    zIndex: 5
  },
  headerBack: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_MAX_HEIGHT
  },
  image: {
    width: '100%',
    height: '100%'
  },
  headerFront: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    height: 190,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5
  },
  headerFrontImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    resizeMode:'contain'
  },
  logoContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    height: 190,
    paddingHorizontal: 20
  }
});