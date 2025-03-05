import React from "react";
import { ActivityIndicator, Modal, View } from "react-native";
import { StyleSheet } from "react-native";


interface LoadingProps {
  loading: boolean;
}

export default function Loading({ loading }: LoadingProps) {
  return (
    <Modal transparent={true} animationType="none" visible={loading}>
      <View style={estilo.modalBackground}>
        <View style={estilo.activityIndicatorWrapper}>
          <ActivityIndicator animating={loading} size="large" />
        </View>
      </View>
    </Modal>
  );
}


const estilo = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040",
  },
  activityIndicatorWrapper: {
    backgroundColor: "#FFFFFF",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
