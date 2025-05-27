import React, { ReactNode } from "react";
import { Modal, Text, View } from "react-native";

type BaseModalProps = {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  animationType?: "none" | "slide" | "fade";
  className?: string;
};

export function BaseModal({
  visible,
  onClose,
  title,
  children,
  animationType = "fade",
  className = "",
}: BaseModalProps) {
  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50 justify-end">
        <View
          className={`bg-white rounded-t-3xl p-6 min-h-[200px] ${className}`}
        >
          <Text className="text-lg font-bold mb-4">{title}</Text>
          <View className="mb-5">{children}</View>
        </View>
      </View>
    </Modal>
  );
}
