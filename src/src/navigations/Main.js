import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from '../pages/Principal';
import Measurement from '../pages/Measurement';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Principal">
      <Stack.Screen
        name="Principal"
        component={Principal}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Measurement"
        component={Measurement}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Main;