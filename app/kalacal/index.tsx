import PaginatedForm from "@/components/kalacal/paginated-form";
import { Stepper } from "@/components/kalacal/stepper";
import { Button, ButtonText } from "@/components/ui/button";
import React, { useState } from "react";
import { Image, StatusBar, View } from "react-native";

export default function KalaCal() {
  const [urlToOpen, setUrlToOpen] = useState("");

  const [currentStep, setCurrentStep] = useState(0);

  const stepperItems = [
    { title: "Age Range" },
    { title: "Symptoms" },
    { title: "Results" },
  ];

  const nextStep = () => {
    if (currentStep < stepperItems.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View className="items-center mt-9">
        <Image
          source={require("@/assets/images/kalacal-banner.png")}
          className="w-[100px] h-[43px]"
        />
      </View>
      <View className="items-center p-4 border rounded-xl border-gray-200 bg-white mt-5 mx-4 ">
        <Stepper items={stepperItems} currentStep={currentStep} />
        <PaginatedForm currentStep={currentStep} />

        <View className="flex-row justify-between mt-8 gap-3">
          <Button onPress={prevStep} disabled={currentStep === 0}>
            <ButtonText>Voltar</ButtonText>
          </Button>
          <Button
            onPress={nextStep}
            disabled={currentStep === stepperItems.length - 1}
          >
            <ButtonText>Próximo</ButtonText>
          </Button>
        </View>
      </View>
    </>
  );
}
