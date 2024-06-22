import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
    navigation.navigate('Login');
    }, 5000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 290,
    height: 500,
    marginBottom: 10,
    marginTop: 30,
    marginRight: 35,
  },
});
