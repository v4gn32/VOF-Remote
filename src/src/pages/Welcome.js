import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.containerLogo}>
        <Animatable.Image 
          animation="flipInY"
          source={require('../../assets/logo-pesoperfil.png')}
          style={{with: '100%'}}
          resizeMode="contain"
        />
      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Monitore seu IMC de qualquer lugar!</Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
          >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Welcome;

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#072b39",
  },
  containerLogo:{
    flex:2,
    backgroundColor:'#072b39',
    justifyContent:'center',
    alignItems:'center'
  },
  containerForm: {
    flex:1, 
    backgroundColor:'#bbc9c7',
    borderTopLeftRadius: 25, 
    borderTopRightRadius: 25, 
    paddingStart: '5%', 
    paddingEnd: '5%'
  },
  title:{
    fontSize: 24, 
    fontWeight: 'bold', 
    marginTop: 28, 
    marginBottom: 12,
  },
  text:{
    fontSize: 18,
    color:'#072b39'
  },
  button: {
    position: 'absolute',
    backgroundColor:'#072b39',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '25%',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  buttonText:{
    fontSize: 18,
    color: '#efefed',
    fontWeight: 'bold',
    padding: 8
  }


})
