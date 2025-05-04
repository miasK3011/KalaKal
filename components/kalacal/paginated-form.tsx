import { FormValues } from "@/app/kalacal";
import React, { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "../ui/form-control";
import { Icon } from "../ui/icon";
import { Pressable } from "../ui/pressable";
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from "../ui/radio";
import { Text } from "../ui/text";
import { VStack } from "../ui/vstack";

export default function PaginatedForm({
  currentStep,
  formData,
  setFormData,
}: {
  currentStep: number;
  formData: FormValues;
  setFormData: React.Dispatch<React.SetStateAction<FormValues>>;
}) {
  const [selectedModel, setSelectedModel] = useState<"clinical" | "lab">(
    "clinical"
  );
  const age_range_options = [
    { label: "< 12 months old", value: "0-1" },
    { label: "12 - 23 months", value: "2-4" },
    { label: "2 - 15 years", value: "2-15" },
    { label: "16-39 years", value: "19-39" },
    { label: "> 40 years", value: "40" },
  ];

  const bleeding_sites_options = [
    { label: "None", value: "0" },
    { label: "1 to 2 sites", value: "1-2" },
    { label: "3 to 4 sites", value: "3-4" },
    { label: "5 to 6 sites", value: "5-6" },
  ];

  const other_symptons_options = [
    { label: "Edema", value: "edema" },
    { label: "HIV/AIDS", value: "HIV-AIDS" },
    { label: "Jaundice", value: "jaundice" },
    { label: "Vomiting", value: "Dyspnoea" },
    { label: "Bacterial Infection", value: "bacterial-infection" },
  ];

  const AgeRangeForm = useMemo(
    () => (
      <ScrollView className="w-full mt-6">
        <VStack space="md" className="w-full">
          <FormControl isRequired>
            <FormControlLabel className="mb-2">
              <FormControlLabelText className="font-medium text-gray-700">
                Age Range
              </FormControlLabelText>
            </FormControlLabel>
            <RadioGroup>
              {age_range_options.map((option, index) => (
                <Radio
                  key={index}
                  value={option.value}
                  onPress={() => {
                    setFormData({ ...formData, age_range: option.value });
                  }}
                  size="md"
                  isInvalid={false}
                  isDisabled={false}
                >
                  <RadioIndicator>
                    <RadioIcon />
                  </RadioIndicator>
                  <RadioLabel>{option.label}</RadioLabel>
                </Radio>
              ))}
            </RadioGroup>
          </FormControl>
          <View className="flex-1 w-full h-[1px] bg-gray-200 my-4" />

          <FormControl isRequired>
            <FormControlLabel className="mb-2">
              <FormControlLabelText className="font-medium text-gray-700">
                Pick the model
              </FormControlLabelText>
            </FormControlLabel>
            <VStack space="sm">
              <Pressable
                onPress={() => {
                  setFormData({ ...formData, clincal_model: selectedModel });
                  setSelectedModel("clinical");
                }}
                className={`
                  border rounded-lg items-center
                  ${
                    selectedModel === "clinical"
                      ? "border-orange-600"
                      : "border-gray-200"
                  }
                  ${
                    selectedModel === "clinical" ? "bg-orange-500" : "bg-white"
                  }`}
              >
                <VStack className="items-center" space="md">
                  <Icon
                    className={
                      selectedModel === "lab"
                        ? "stroke-white"
                        : "stroke-orange-500"
                    }
                    size="md"
                  />
                  <Text
                    className={`font-semibold ${
                      selectedModel === "clinical"
                        ? "text-white"
                        : "text-gray-700"
                    }`}
                  >
                    Use clinical model
                  </Text>
                </VStack>
              </Pressable>

              <Pressable
                onPress={() => setSelectedModel("lab")}
                className={`
                  rounded-lg items-center
                  border
                  ${
                    selectedModel === "lab"
                      ? "border-orange-600"
                      : "border-gray-200"
                  }
                  ${selectedModel === "lab" ? "bg-orange-500" : "bg-white"}`}
              >
                <VStack className="items-center" space="md">
                  <Icon
                    className={
                      selectedModel === "lab"
                        ? "stroke-white"
                        : "stroke-orange-500"
                    }
                    size="md"
                  />
                  <Text
                    className={`font-medium ${
                      selectedModel === "lab" ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Use clinical and laboratorial model
                  </Text>
                </VStack>
              </Pressable>
            </VStack>
          </FormControl>
          <View className="bg-[#FBF5DA] text-[#824417] px-3 py-2 rounded-md flex flex-row mt-3">
            <Text>
              Warning: These estimations of death probability should NOT be
              taken as the chance of death of any specific patient, but as an
              indicator of the disease severity in other similar patient
              populations at a different place or time.
            </Text>
          </View>
        </VStack>
      </ScrollView>
    ),
    [formData]
  );

  const SymptomsForm = useMemo(
    () => (
      <ScrollView className="w-full mt-6">
        <VStack space="md" className="w-full">
          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>
                Number of bleeding sites
              </FormControlLabelText>
            </FormControlLabel>
            <RadioGroup>
              {bleeding_sites_options.map((option, index) => (
                <Radio
                  key={index}
                  value={option.value}
                  onPress={() => {
                    setFormData({ ...formData, bleeding_sites: option.value });
                  }}
                  size="md"
                  isInvalid={false}
                  isDisabled={false}
                >
                  <RadioIndicator>
                    <RadioIcon />
                  </RadioIndicator>
                  <RadioLabel>{option.label}</RadioLabel>
                </Radio>
              ))}
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>
                Other signs and symptoms
              </FormControlLabelText>
            </FormControlLabel>
            <RadioGroup>
              {other_symptons_options.map((option, index) => (
                <Radio
                  key={index}
                  value={option.value}
                  onPress={() => {
                    setFormData({ ...formData, other_symptons: option.value });
                  }}
                  size="md"
                  isInvalid={false}
                  isDisabled={false}
                >
                  <RadioIndicator>
                    <RadioIcon />
                  </RadioIndicator>
                  <RadioLabel>{option.label}</RadioLabel>
                </Radio>
              ))}
            </RadioGroup>
          </FormControl>
        </VStack>
      </ScrollView>
    ),
    [formData]
  );

  const ResultsForm = useMemo(
    () => (
      <ScrollView className="w-full mt-6">
        <VStack space="md" className="w-full">
          <Text>Results</Text>
        </VStack>
      </ScrollView>
    ),
    []
  );

  switch (currentStep) {
    case 0:
      return AgeRangeForm;
    case 1:
      return SymptomsForm;
    case 2:
      return ResultsForm;
    default:
      return <Text>Formulário não encontrado</Text>;
  }
}
