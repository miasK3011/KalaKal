import React from "react";
import { ScrollView, View } from "react-native";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "../ui/checkbox";
import { FormControl, FormControlLabel } from "../ui/form-control";
import { Input, InputField } from "../ui/input";
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

interface FormData {
  // Step 1: Age Range
  age: string;
  gender: string;
  weight: string;
  height: string;

  // Step 2: Symptoms
  fever: boolean;
  weakness: boolean;
  bleeding: boolean;
  jaundice: boolean;
  severityLevel: string;
  durationDays: string;

  // Step 3: Results
  reviewData: boolean;
}

export default function PaginatedForm({
  currentStep,
  formData,
  setFormData,
}: {
  currentStep: number;
  formData: FormData;
  setFormData: (data: FormData) => void;
}) {
  // Handler for input changes
  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleCheckboxChange = (field: keyof FormData, value: boolean) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  // Step 1: Age Range Form
  const AgeRangeForm = () => (
    <ScrollView className="w-full mt-6">
      <VStack space="md" className="w-full">
        <FormControl isRequired>
          <FormControlLabel>
            <Text className="font-medium text-gray-700">Idade</Text>
          </FormControlLabel>
          <Input>
            <InputField
              placeholder="Digite a idade do paciente"
              keyboardType="numeric"
              value={formData.age}
              onChangeText={(value) => handleInputChange("age", value)}
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <Text className="font-medium text-gray-700">Sexo</Text>
          </FormControlLabel>
          <RadioGroup
            value={formData.gender}
            onChange={(value) => handleInputChange("gender", value)}
          >
            <Radio value="male">
              <RadioIndicator>
                <RadioIcon />
              </RadioIndicator>
              <RadioLabel>Masculino</RadioLabel>
            </Radio>
            <Radio value="female">
              <RadioIndicator>
                <RadioIcon />
              </RadioIndicator>
              <RadioLabel>Feminino</RadioLabel>
            </Radio>
          </RadioGroup>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <Text className="font-medium text-gray-700">Peso (kg)</Text>
          </FormControlLabel>
          <Input>
            <InputField
              placeholder="Digite o peso em kg"
              keyboardType="numeric"
              value={formData.weight}
              onChangeText={(value) => handleInputChange("weight", value)}
            />
          </Input>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <Text className="font-medium text-gray-700">Altura (cm)</Text>
          </FormControlLabel>
          <Input>
            <InputField
              placeholder="Digite a altura em cm"
              keyboardType="numeric"
              value={formData.height}
              onChangeText={(value) => handleInputChange("height", value)}
            />
          </Input>
        </FormControl>
      </VStack>
    </ScrollView>
  );

  // Step 2: Symptoms Form
  const SymptomsForm = () => (
    <ScrollView className="w-full mt-6">
      <VStack space="md" className="w-full">
        <FormControl>
          <FormControlLabel>
            <Text className="font-medium text-gray-700">
              Sintomas Presentes
            </Text>
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
            <Text className="font-medium text-gray-700">
              Nível de Severidade
            </Text>
          </FormControlLabel>
          <Select
            selectedValue={formData.severityLevel}
            onValueChange={(value) => handleInputChange("severityLevel", value)}
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
            <Text className="font-medium text-gray-700">
              Duração dos Sintomas (dias)
            </Text>
          </FormControlLabel>
          <Input>
            <InputField
              placeholder="Digite a duração em dias"
              keyboardType="numeric"
              value={formData.durationDays}
              onChangeText={(value) => handleInputChange("durationDays", value)}
            />
          </Input>
        </FormControl>
      </VStack>
    </ScrollView>
  );

  // Step 3: Results Form
  const ResultsForm = () => (
    <ScrollView className="w-full mt-6">
      <VStack space="lg" className="w-full">
        <Text className="font-bold text-lg text-center">Resumo dos Dados</Text>

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
              deve ser interpretada como a chance exata de morte de um paciente
              específico.
            </Text>
          </View>
        </View>
      </VStack>
    </ScrollView>
  );

  // Mostrar o formulário correspondente ao passo atual
  switch (currentStep) {
    case 0:
      return <AgeRangeForm />;
    case 1:
      return <SymptomsForm />;
    case 2:
      return <ResultsForm />;
    default:
      return <Text>Formulário não encontrado</Text>;
  }
}
