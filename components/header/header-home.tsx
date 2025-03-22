import React, { Component } from "react";
import { Image, ImageBackground, StatusBar, View } from "react-native";
import estilo from "./styles";

export default class HeaderHome extends Component {
  render() {
    return (
      <View style={estilo.container}>
        <StatusBar barStyle="light-content" />
        <View style={estilo.headerBack}>
          <ImageBackground
            source={require("../../assets/images/header_back.png")}
            style={estilo.image}
          />
        </View>
        <View style={estilo.headerFront}>
          <Image
            source={require("../../assets/images/logo_back.png")}
            style={estilo.headerFrontImage}
          />
        </View>
        <View style={estilo.logoContainer}>
          <Image
            source={require("../../assets/images/logo_horizontal.png")}
            style={estilo.logoImage}
          />
        </View>
      </View>
    );
  }
}
