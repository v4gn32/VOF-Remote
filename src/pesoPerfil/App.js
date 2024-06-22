import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { iniciaTabelaBanco } from './src/database';

import Cadastro from './src/pages/Cadastro';
import Calculadora from './src/pages/Calculadora';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Perfil from './src/pages/Perfil';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    iniciaTabelaBanco();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="Calculadora" component={Calculadora} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
