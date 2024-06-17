import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { ProgressChart } from 'react-native-chart-kit';
import { calcularIMC, calcularPesoIdeal, getIMCCategoria } from '../imcUtils';

import Input from '../components/Input';

const ImcCalculator = ({ navigation }) => {
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [pesoIdeal, setPesoIdeal] = useState(null);

  const handleCalcularIMC = () => {
    const valorImc = calcularIMC(peso, altura);
    setImc(valorImc);
    setPesoIdeal(calcularPesoIdeal(altura, sexo));
    setMensagem(getIMCCategoria(valorImc));
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const data = {
    labels: ["IMC"],
    data: imc ? [parseFloat(imc) / 40] : [0], // Normalizando o IMC para o ProgressChart
  };

  return (
    <View style={styles.container}>
      <Input
        label="Idade"
        value={idade}
        onChangeText={(text) => setIdade(text)}
        left={<TextInput.Icon name="timer-sand"/>}
        keyboardType="numeric"
      />
      <View style={styles.containerRadio}>
        <View style={styles.containerRadioItem}>
          <RadioButton
            value="masculino"
            status={sexo === 'masculino' ? 'checked' : 'unchecked'}
            onPress={() => setSexo('masculino')}
          />
          <Text>Masculino</Text>
        </View>
        <View style={styles.containerRadioItem}>
          <RadioButton
            value="feminino"
            status={sexo === 'feminino' ? 'checked' : 'unchecked'}
            onPress={() => setSexo('feminino')}
          />
          <Text>Feminino</Text>
        </View>
      </View>
      <Input
        label="Peso (kg)"
        value={peso}
        onChangeText={(text) => setPeso(text)}
        left={<TextInput.Icon name="weight-kilogram"/>}
        keyboardType="numeric"
      />
      <Input
        label="Altura (Cm)"
        value={altura}
        onChangeText={(text) => setAltura(text)}
        left={<TextInput.Icon name="ruler"/>}
        keyboardType="numeric"
      />
      <Button title="Calcular IMC" onPress={handleCalcularIMC} />
      {imc && (
        <View style={styles.resultado}>
          <Text>Seu IMC é: {imc}</Text>
          <ProgressChart
            data={data}
            width={Dimensions.get('window').width - 16}
            height={220}
            chartConfig={chartConfig}
            hideLegend={false}
          />
          <Text>{mensagem}</Text>
          <Text>Seu peso ideal é: {pesoIdeal} kg</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  /*
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },*/
  containerRadio: {
    flexDirection: 'row',
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerRadioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  resultado: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default ImcCalculator;