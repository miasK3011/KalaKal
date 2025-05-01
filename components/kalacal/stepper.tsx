import React from "react";
import { Text, View } from "react-native";

type StepperItem = {
  title: string;
  isActive?: boolean;
  isCompleted?: boolean;
};

type StepperProps = {
  items: StepperItem[];
  currentStep: number;
};

export function Stepper({ items, currentStep = 0 }: StepperProps) {
  return (
    <View className="w-full">
      <View className="flex-row items-center">
        {items.map((item, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <View className="flex-row items-center z-10">
                <View
                  className={`h-7 w-7 items-center justify-center rounded-full ${
                    isActive
                      ? "bg-orange-100"
                      : isCompleted
                      ? "bg-orange-500"
                      : "bg-gray-200"
                  }`}
                >
                  <Text
                    className={`text-sm font-medium ${
                      isActive
                        ? "text-orange-500"
                        : isCompleted
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    {index + 1}
                  </Text>
                </View>

                <Text
                  className={`ml-2 text-sm ${
                    isActive
                      ? "text-gray-800 font-medium"
                      : isCompleted
                      ? "text-gray-800"
                      : "text-gray-500"
                  }`}
                >
                  {item.title}
                </Text>
              </View>

              {!isLast && <View className="flex-1 h-0.5 bg-gray-200 mx-2" />}
            </React.Fragment>
          );
        })}
      </View>
    </View>
  );
}
