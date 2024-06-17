import React, { useState }  from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, TextInput, Alert } from 'react-native';

import * as Animatable from 'react-native-animatable';
import {register} from '../services/auth.services';


const SignUp = ({ navigation }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [sexoBiologico, setSexoBiologico] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleRegister = () => {
    register({
      name: name,
      email: email,
      password: password
    }).then( res => {
      console.log(res);

      if(res){
        Alert.alert('Atenção', 'Usuário Cadastrado com sucesso!',[
          { text: "OK", onPress: () => navigation.goBack() }
        ]);
      }else{
         Alert.alert('Atenção', 'Usuário não cadastrado! Tente novamente mais tarde =D');
      }
    });
    
  }

  return (
    <View style={styles.container}>
      <Animatable.View delay={500} animation="fadeInLeft" style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)!</Text>
      </Animatable.View>


      <View style={styles.containerForm}>
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

        <Text style={styles.title}>Confirma Senha</Text>
        <TextInput
          style={styles.input}
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          placeholder="Repita a senha"
          secureTextEntry
          autoCapitalize="none"
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleRegister}
          >
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>

      </View>
          
    </View>
  );
};

export default SignUp;

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
    borderRadius: 50,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    color: '#f0f0ee',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 8
  },
  
})

