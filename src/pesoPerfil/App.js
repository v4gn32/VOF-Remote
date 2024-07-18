import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< HEAD:src/App.js
import UserProvider from './src/contexts/UserContext';
import Route from './src/navigations/Route';
=======
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { iniciaTabelaBanco } from './src/database';

import Cadastro from './src/pages/Cadastro';
import Calculadora from './src/pages/Calculadora';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Perfil from './src/pages/Perfil';
>>>>>>> c08e46a0483800e049e9c22631a6f2531c9e8dfb:src/pesoPerfil/App.js


<<<<<<< HEAD:src/App.js
const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#38A69D" barStyle="light-content" />
        <Route /> 
      </NavigationContainer>
    </UserProvider>
=======
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
>>>>>>> c08e46a0483800e049e9c22631a6f2531c9e8dfb:src/pesoPerfil/App.js
  );
}
