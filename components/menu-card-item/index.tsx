import React, { Component } from "react";
import { View, Image, ImageSourcePropType } from "react-native";
import estilo from "./styles";

interface MenuCardItemProps {
  image: ImageSourcePropType;
}

export default class MenuCardItem extends Component<MenuCardItemProps> {
  render() {
    const { image } = this.props;
    return (
      <View style={estilo.container}>
        <Image source={image} style={estilo.image} />
      </View>
    );
  }
}
