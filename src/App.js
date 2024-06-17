import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import UserProvider from './src/contexts/UserContext';
import Route from './src/navigations/Route';


const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#38A69D" barStyle="light-content" />
        <Route /> 
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;