import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculadora = ({ route }) => {
  const { altura, peso } = route.params;
  const [imc, setIMC] = useState(null);

  const calculoIMC = () => {
    if (!altura || !peso) {
      alert('Por favor, adicione sua altura e peso na página de perfil.');
      return;
    }

    const alturaMetros = parseFloat(altura) / 100;
    const calculatedIMC = parseFloat(peso) / (alturaMetros * alturaMetros);
    setIMC(calculatedIMC.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TouchableOpacity style={styles.button} onPress={calculoIMC}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
      {imc && (
        <Text style={styles.result}>Seu IMC é: {imc}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#eBecf4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E20B73',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Calculadora;
