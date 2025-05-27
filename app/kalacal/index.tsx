import PaginatedForm from "@/components/kalacal/paginated-form";
import { Stepper } from "@/components/kalacal/stepper";
import { Button, ButtonText } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import { z } from "zod";
import { Text } from "../../components/ui/text";

export interface FormValues {
  age_range: string;
  clinical_model: string;
  bleeding_sites: string;
  other_symptons: string[];
}

const symptonsSchema = z.object({
  bleeding_sites: z
    .string()
    .nonempty("Por favor, informe o número de locais de sangramento."),
  other_symptons: z
    .array(z.string())
    .min(1, "Por favor, selecione pelo menos um sintoma.")
    .optional(),
});

const ageRangeSchema = z.object({
  age_range: z.string().nonempty("Por favor, informe a idade do paciente."),
  clinical_model: z.string().nonempty("Por favor, informe o modelo clínico."),
});

export default function KalaCal() {
  const [currentStep, setCurrentStep] = useState(0);

  const initialFormData: FormValues = useRef({
    age_range: "",
    clinical_model: "",
    bleeding_sites: "",
    other_symptons: [],
  }).current;

  const [formData, setFormData] = useState<FormValues>(initialFormData);

  const stepperItems = [
    { title: "Age Range" },
    { title: "Symptons" },
    { title: "Results" },
  ];

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 0: {
        const result = ageRangeSchema.safeParse({
          age_range: formData.age_range,
          clinical_model: formData.clinical_model,
        });

        if (!result.success) {
          const error = result.error.errors[0];
          Alert.alert("Dados incompletos", error.message);
          return false;
        }
        return true;
      }

      case 1: {
        const result = symptonsSchema.safeParse({
          bleeding_sites: formData.bleeding_sites,
          other_symptons: formData.other_symptons,
        });

        if (!result.success) {
          const error = result.error.errors[0];
          Alert.alert("Dados incompletos", error.message);
          return false;
        }
        return true;
      }

      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      if (currentStep < stepperItems.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Formulário enviado:", formData);
    Alert.alert("Sucesso", "Dados processados com sucesso!", [{ text: "OK" }]);
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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <View className="items-center px-4 border rounded-xl border-gray-200 bg-white mt-5 mx-4 mb-5 overflow-hidden">
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            <Stepper items={stepperItems} currentStep={currentStep} />
            <View className="my-8">
              <Text
                className="text-2xl text-center"
                style={{
                  fontFamily: "Gidole",
                }}
              >
                PROGNOSTICATING KALA-AZAR
              </Text>
            </View>

            <PaginatedForm
              currentStep={currentStep}
              formData={formData}
              setFormData={setFormData}
            />

            <View className="flex-row justify-between mt-8 mb-4 gap-3 w-full">
              {currentStep > 0 && (
                <View className="w-1/2">
                  <Button
                    onPress={prevStep}
                    disabled={currentStep === 0}
                    className="flex-1"
                    action="secondary"
                    variant={currentStep === 0 ? "solid" : "solid"}
                  >
                    <ButtonText>Voltar</ButtonText>
                  </Button>
                </View>
              )}

              {currentStep === stepperItems.length - 1 ? (
                <Button
                  onPress={() => {
                    setFormData({
                      age_range: "",
                      clinical_model: "",
                      bleeding_sites: "",
                      other_symptons: [],
                    });
                    setCurrentStep(0);
                  }}
                  className="flex-1"
                >
                  <ButtonText className="text-white">New Estimate</ButtonText>
                </Button>
              ) : (
                <Button onPress={nextStep} className="flex-1">
                  <ButtonText>Próximo</ButtonText>
                </Button>
              )}
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
