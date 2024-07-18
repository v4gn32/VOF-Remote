
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Calculadora = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { altura, peso } = route.params;

  const calculateIMC = (peso, altura) => {
    const alturaEmMetros = altura / 100; // Convertendo altura para metro
    const imc = peso / (alturaEmMetros * alturaEmMetros);
    return imc.toFixed(2); 
  };

  const imc = calculateIMC(peso, altura);

  const getIMCClassification = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
    if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
    if (imc >= 30 && imc < 34.9) return 'Obesidade grau I';
    if (imc >= 35 && imc < 39.9) return 'Obesidade grau II';
    if (imc >= 40) return 'Obesidade grau III';
    return 'Classificação não disponível';
  };

  const imcClassification = getIMCClassification(imc);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu IMC</Text>
      <Text style={styles.result}>IMC: {imc}</Text>
      <Text style={styles.classification}>Classificação: {imcClassification}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
        accessibilityLabel="Voltar"
        accessibilityHint="Pressione para voltar à tela anterior"
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eBecf4',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#1E1E1E',
    textAlign: 'center',
  },
  result: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  classification: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E20B73',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Calculadora;
