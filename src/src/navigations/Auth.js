import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './../pages/Welcome';
import SignIn from './../pages/SignIn';
import SignUp from './../pages/SignUp';
import Principal from './../pages/Principal';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ title: 'Welcome', headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: 'Sign In', headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: 'Sign Up', headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Main;