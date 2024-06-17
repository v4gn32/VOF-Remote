import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Home from './Home';
import Measurements from './Measurements';
import Profile from './Profile';
import ImcCalculator from './ImcCalculator';

const Principal = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'measurements', title: 'Medições', icon: 'scale' },
    { key: 'imcCalculator', title: 'Calculadora de IMC', icon: 'calculator' },
    { key: 'profile', title: 'Perfil', icon: 'account' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    measurements: Measurements,
    imcCalculator: ImcCalculator,
    profile: Profile,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Principal;