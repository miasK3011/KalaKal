import { FormValues } from "@/app/kalacal";
import { faMicroscope } from "@fortawesome/free-solid-svg-icons/faMicroscope";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons/faNotesMedical";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons/faTriangleExclamation";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "../ui/checkbox";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "../ui/form-control";
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
  const [selectedModel, setSelectedModel] = useState<String>(
    formData.clinical_model || "clinical"
  );

  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(
    formData.other_symptons || []
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
      <>
        <View>
          <View className="mb-8 w-full">
            <Text className="text-justify text-sm text-gray-500">
              Estimation of death probability for kala-azar patients accordingly
              to data collected from patients treated in Teresina-PI, Brazil,
              from 2005 to 2013
            </Text>
          </View>
        </View>
        <View className="w-full h-[1px] bg-gray-200 my-4" />
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
            <View className="w-full h-[1px] bg-gray-200 my-4" />
            <FormControl isRequired>
              <FormControlLabel className="mb-2">
                <FormControlLabelText className="font-medium text-gray-700">
                  Pick the model
                </FormControlLabelText>
              </FormControlLabel>
              <VStack space="sm">
                <Pressable
                  onPress={() => {
                    setSelectedModel("clinical");
                    setFormData({ ...formData, clinical_model: "clinical" });
                  }}
                  className={`border rounded-lg p-5 flex-row items-center ${
                    selectedModel === "clinical"
                      ? "border-orange-600 bg-orange-500"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <View className="mr-3">
                    <FontAwesomeIcon
                      icon={faNotesMedical}
                      color={selectedModel === "clinical" ? "white" : "#f97316"}
                      size={20}
                    />
                  </View>
                  <Text
                    className={`font-semibold ${
                      selectedModel === "clinical"
                        ? "text-white"
                        : "text-gray-700"
                    }`}
                  >
                    Use clinical model
                  </Text>
                </Pressable>

                <Pressable
                  onPress={() => {
                    setSelectedModel("lab");
                    setFormData({ ...formData, clinical_model: "lab" });
                  }}
                  className={`border rounded-lg p-5 flex-row items-center ${
                    selectedModel === "lab"
                      ? "border-orange-600 bg-orange-500"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <View className="mr-3">
                    <FontAwesomeIcon
                      icon={faMicroscope}
                      color={selectedModel === "lab" ? "white" : "#f97316"}
                      size={20}
                    />
                  </View>
                  <Text
                    className={`font-semibold ${
                      selectedModel === "lab" ? "text-white" : "text-gray-700"
                    }`}
                  >
                    Use clinical and laboratorial model
                  </Text>
                </Pressable>
              </VStack>
            </FormControl>
            <View className="bg-[#FBF5DA] text-[#824417] px-3 py-2 rounded-md flex flex-row gap-4 mt-3">
              <View className="">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  color="#824417"
                  size={18}
                />
              </View>
              <Text className="text-[#824417] text-sm flex-1 leading-4">
                Warning: These estimations of death probability should NOT be
                taken as the chance of death of any specific patient, but as an
                indicator of the disease severity in other similar patient
                populations at a different place or time.
              </Text>
            </View>
          </VStack>
        </ScrollView>
      </>
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
          <View className="w-full h-[1px] bg-gray-200 my-4" />
          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>
                Other signs and symptoms
              </FormControlLabelText>
            </FormControlLabel>
            <VStack space="sm">
              {other_symptons_options.map((option, index) => (
                <Checkbox
                  key={index}
                  value={option.value}
                  isChecked={selectedSymptoms.includes(option.value)}
                  onChange={(isChecked) => {
                    let newSymptoms: string[];
                    if (isChecked) {
                      newSymptoms = [...selectedSymptoms, option.value];
                    } else {
                      newSymptoms = selectedSymptoms.filter(
                        (symptom) => symptom !== option.value
                      );
                    }
                    setSelectedSymptoms(newSymptoms);
                    setFormData({ ...formData, other_symptons: newSymptoms });
                  }}
                  size="md"
                  isInvalid={false}
                  isDisabled={false}
                >
                  <CheckboxIndicator>
                    <CheckboxIcon />
                  </CheckboxIndicator>
                  <CheckboxLabel>{option.label}</CheckboxLabel>
                </Checkbox>
              ))}
            </VStack>
          </FormControl>
        </VStack>
      </ScrollView>
    ),
    [formData]
  );

  const ResultsForm = useMemo(
    () => (
      <ScrollView className="w-full mt-6" showsVerticalScrollIndicator={false}>
        <VStack space="lg" className="w-full pb-8">
          <View className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <Text className="text-lg font-semibold text-gray-800 mb-4">
              Animal Report
            </Text>

            <View className="flex-row justify-between items-center py-2">
              <Text className="text-gray-600 font-medium">Age Range</Text>
              <Text className="text-gray-800 font-medium">
                {formData.age_range === "0-1"
                  ? "< 12 months old"
                  : formData.age_range === "2-4"
                  ? "12 - 23 months"
                  : formData.age_range === "2-15"
                  ? "2 - 15 years"
                  : formData.age_range === "19-39"
                  ? "16-39 years"
                  : formData.age_range === "40"
                  ? "> 40 years"
                  : "Not specified"}
              </Text>
            </View>
            <View className="w-full h-[1px] bg-gray-200 my-4" />

            <View className="flex-row justify-between items-center py-2">
              <Text className="text-gray-600 font-medium">Model</Text>
              <Text className="text-gray-800 font-medium">
                {formData.clinical_model === "clinical"
                  ? "Clinical"
                  : "Clinical and Laboratorial"}
              </Text>
            </View>

            <Text className="text-lg font-semibold text-gray-800 mt-4 mb-2">
              Results
            </Text>

            <View className="flex-row justify-between items-center py-2">
              <Text className="text-gray-600 font-medium ">Score</Text>
              <Text className="text-orange-500 font-bold text-lg">6/13</Text>
            </View>

            <View className="w-full h-[1px] bg-gray-200 my-4" />

            <View className="flex-row justify-between items-center py-2">
              <Text className="text-gray-600 font-medium">
                Probability of death
              </Text>
              <Text className="text-orange-500 font-bold text-xl">28.8%</Text>
            </View>
          </View>
        </VStack>
      </ScrollView>
    ),
    [formData]
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
