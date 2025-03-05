import Text from "@/components/Text";
import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import React from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import { colors } from "../../commons";
import defaultStyle from "./style";

interface ItemProps {
  item: {
    title: string;
    content: string;
  };
  icon?: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  nextScreen?: Href;
  onNavigate?: (params: {
    nextScreen: Href;
    dados: any;
    title: string;
  }) => void;
  showIcon?: boolean;
  style?: StyleProp<ViewStyle>;
}

function Item({
  item,
  icon = "help-outline",
  iconColor = colors.mainColor,
  nextScreen = "/leishmaniose/conteudo",
  showIcon = true,
  style,
}: ItemProps) {
  const router = useRouter();

  function onPress() {
    router.push({
      pathname: nextScreen,
      params: {
        content: item.content,
        title: item.title,
      },
    });
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[defaultStyle.container, style]}
    >
      <View style={defaultStyle.info}>
        {showIcon && <Ionicons name={icon} color={iconColor} size={25} />}
        <Text numberOfLines={2} ellipsizeMode="tail" style={defaultStyle.title}>
          {item.title}
        </Text>
      </View>
      <Ionicons name="arrow-forward" color="lightgray" size={25} />
    </TouchableOpacity>
  );
}

export default Item;
