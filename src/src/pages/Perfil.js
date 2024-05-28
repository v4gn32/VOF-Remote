import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Perfil = () => {
  const navigation = useNavigation();
  
  const altura = 170;
  const peso = 70;

  const goToIMCCalculator = () => {
    navigation.navigate('IMCCalculator', { altura, peso });
  };

  return (
    <View>
      <Text>Perfil do usuário</Text>
      <Button title="Calcular IMC" onPress={goToIMCCalculator} />
    </View>
  );
};

export default Perfil;
