import React, { useState }  from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, TextInput } from 'react-native';

import * as Animatable from 'react-native-animatable';
import {useUser} from '../contexts/UserContext';


const SignIn = ({ navigation }) => {

  const {setSigned} = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Animatable.View delay={500} animation="fadeInLeft" style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)!</Text>
      </Animatable.View>


      <Animatable.View delay={0} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite um email..."
          keyboardType='email-address'
          autoCapitalize="none"
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Sua senha"
          secureTextEntry
          autoCapitalize="none"
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={() => setSigned(true)}
          >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('SignUp')}
          >
          <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>

      </Animatable.View>
          
    </View>
  );
};

export default SignIn;

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#072b39",
  },
  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f0f0ee',
  },
  containerForm:{
    backgroundColor: '#f0f0ee',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize: 20,
    marginTop: 28,
  },
  input:{
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button:{
    backgroundColor: '#072b39',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    color: '#f0f0ee',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonRegister:{
    marginTop: 14,
    alignSelf: 'center',
    color: '#f0f0ee',
    fontSize: 18,
    fontWeight: 'bold'
  },
  registerText:{
    color: '#747c81',
    fontSize: 18,
    fontWeight: 'bold'
  },

})

