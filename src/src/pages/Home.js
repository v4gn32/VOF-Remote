
import React, { useEffect } from 'react';
import {View, Image, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 5000); 

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/logo.png")}
        style={styles.logo}
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F3F3FF",
      justifyContent: 'center',
      alignItems: 'center'
    },

    logo: {
      marginBottom: 10,
      marginTop: 30,
      marginRight: 35,
      width: 290,
      height: 500
    }

  })