import { FormValues } from "@/app/kalacal";
import React, { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "../ui/checkbox";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "../ui/form-control";
import { Icon } from "../ui/icon";
import { Input, InputField } from "../ui/input";
import { Pressable } from "../ui/pressable";
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from "../ui/radio";
import {
  Select,
  SelectContent,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "../ui/select";
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

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (field: keyof FormData, value: boolean) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const AgeRangeForm = useMemo(
    () => (
      <ScrollView className="w-full mt-6">
        <VStack space="md" className="w-full">
          <FormControl isRequired>
            <FormControlLabel>
              <FormControlLabelText className="font-medium text-gray-700">
                Age Range
              </FormControlLabelText>
            </FormControlLabel>
            <RadioGroup>
              {age_range_options.map((option, index) => (
                <Radio
                  key={index}
                  value={option.value}
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

          <FormControl isRequired>
            <FormControlLabel>
              <FormControlLabelText className="font-medium text-gray-700">
                Pick the model
              </FormControlLabelText>
            </FormControlLabel>
            <VStack space="sm">
              <Pressable
                onPress={() => setSelectedModel("clinical")}
                className={`
                  border rounded-lg items-center
                  ${
                    selectedModel === "clinical"
                      ? "border-orange-600"
                      : "border-gray-500"
                  }
                  ${
                    selectedModel === "clinical" ? "bg-orange-500" : "bg-white"
                  }`}
              >
                <VStack className="items-center" space="md">
                  <Icon
                    color={
                      selectedModel === "clinical" ? "$white" : "$orange500"
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
                      : "border-gray-500"
                  }
                  ${selectedModel === "lab" ? "bg-orange-500" : "bg-white"}`}
              >
                <VStack className="items-center" space="md">
                  <Icon
                    color={selectedModel === "lab" ? "$white" : "$orange500"}
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
        </VStack>
      </ScrollView>
    ),
    [formData]
  );

  // Step 2: Symptoms Form
  const SymptomsForm = useMemo(
    () => (
      <ScrollView className="w-full mt-6">
        <VStack space="md" className="w-full">
          <FormControl>
            <FormControlLabel>
              <FormControlLabelText className="font-medium text-gray-700">
                Sintomas Presentes
              </FormControlLabelText>
            </FormControlLabel>
            <CheckboxGroup value={[]}>
              <VStack space="sm">
                <Checkbox
                  value="fever"
                  isChecked={formData.fever}
                  onChange={(isSelected) =>
                    handleCheckboxChange("fever", isSelected)
                  }
                >
                  <CheckboxIndicator>
                    <CheckboxIcon />
                  </CheckboxIndicator>
                  <CheckboxLabel>Febre</CheckboxLabel>
                </Checkbox>

                <Checkbox
                  value="weakness"
                  isChecked={formData.weakness}
                  onChange={(isSelected) =>
                    handleCheckboxChange("weakness", isSelected)
                  }
                >
                  <CheckboxIndicator>
                    <CheckboxIcon />
                  </CheckboxIndicator>
                  <CheckboxLabel>Fraqueza</CheckboxLabel>
                </Checkbox>

                <Checkbox
                  value="bleeding"
                  isChecked={formData.bleeding}
                  onChange={(isSelected) =>
                    handleCheckboxChange("bleeding", isSelected)
                  }
                >
                  <CheckboxIndicator>
                    <CheckboxIcon />
                  </CheckboxIndicator>
                  <CheckboxLabel>Sangramento</CheckboxLabel>
                </Checkbox>

                <Checkbox
                  value="jaundice"
                  isChecked={formData.jaundice}
                  onChange={(isSelected) =>
                    handleCheckboxChange("jaundice", isSelected)
                  }
                >
                  <CheckboxIndicator>
                    <CheckboxIcon />
                  </CheckboxIndicator>
                  <CheckboxLabel>Icterícia</CheckboxLabel>
                </Checkbox>
              </VStack>
            </CheckboxGroup>
          </FormControl>

          <FormControl isRequired>
            <FormControlLabel>
              <FormControlLabelText className="font-medium text-gray-700">
                Nível de Severidade
              </FormControlLabelText>
            </FormControlLabel>
            <Select
              selectedValue={formData.severityLevel}
              onValueChange={(value) =>
                handleInputChange("severityLevel", value)
              }
            >
              <SelectTrigger>
                <SelectInput placeholder="Selecione o nível" />
              </SelectTrigger>
              <SelectPortal>
                <SelectContent>
                  <SelectItem label="Leve" value="mild" />
                  <SelectItem label="Moderado" value="moderate" />
                  <SelectItem label="Severo" value="severe" />
                  <SelectItem label="Crítico" value="critical" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormControlLabel>
              <FormControlLabelText className="font-medium text-gray-700">
                Duração dos Sintomas (dias)
              </FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                placeholder="Digite a duração em dias"
                keyboardType="numeric"
                value={formData.durationDays}
                onChangeText={(value) =>
                  handleInputChange("durationDays", value)
                }
              />
            </Input>
          </FormControl>
        </VStack>
      </ScrollView>
    ),
    [formData]
  );

  // Step 3: Results Form
  const ResultsForm = useMemo(
    () => (
      <ScrollView className="w-full mt-6">
        <VStack space="lg" className="w-full">
          <Text className="font-bold text-lg text-center">
            Resumo dos Dados
          </Text>

          <View className="bg-gray-100 p-4 rounded-lg">
            <Text className="font-medium">Dados Pessoais</Text>
            <View className="mt-2">
              <Text>Idade: {formData.age} anos</Text>
              <Text>
                Sexo: {formData.gender === "male" ? "Masculino" : "Feminino"}
              </Text>
              <Text>Peso: {formData.weight} kg</Text>
              <Text>Altura: {formData.height} cm</Text>
            </View>
          </View>

          <View className="bg-gray-100 p-4 rounded-lg">
            <Text className="font-medium">Sintomas</Text>
            <View className="mt-2">
              <Text>Febre: {formData.fever ? "Sim" : "Não"}</Text>
              <Text>Fraqueza: {formData.weakness ? "Sim" : "Não"}</Text>
              <Text>Sangramento: {formData.bleeding ? "Sim" : "Não"}</Text>
              <Text>Icterícia: {formData.jaundice ? "Sim" : "Não"}</Text>
              <Text>
                Nível de Severidade:{" "}
                {{
                  mild: "Leve",
                  moderate: "Moderado",
                  severe: "Severo",
                  critical: "Crítico",
                }[formData.severityLevel] || "Não informado"}
              </Text>
              <Text>Duração: {formData.durationDays} dias</Text>
            </View>
          </View>

          <View className="bg-gray-100 p-4 rounded-lg">
            <Text className="font-medium">Resultado do Cálculo</Text>
            <View className="mt-2">
              <Text className="text-lg font-bold text-center">
                Probabilidade de Risco: 73%
              </Text>
              <Text className="mt-4 text-sm text-gray-600">
                Nota: Esta é uma estimativa baseada nos dados fornecidos e não
                deve ser interpretada como a chance exata de morte de um
                paciente específico.
              </Text>
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
