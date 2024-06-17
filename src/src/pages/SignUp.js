import React, { useState }  from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, Alert } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import * as Animatable from 'react-native-animatable';
import {register} from '../services/auth.services';
import Input from '../components/Input';


const SignUp = ({ navigation }) => {
  
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sexoBiologico, setSexoBiologico] = useState('M');
  const [dataNascimento, setDataNascimento] = useState('');
  const [altura, setAltura] = useState(0);

  const handleRegister = () => {
    register({
      name: name,
      email: email,
      password: password,
      dataNascimento: dataNascimento,
      altura: altura,
      sexoBiologico: sexoBiologico
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
        <Text style={styles.title}>Nome</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Digite seu nome"
          autoCapitalize="none"
        />

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

        {/** field sexoBiologico */}
        <View style={styles.containerRadio}>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={sexoBiologico === 'M' ? 'checked' : 'unchecked'}
              onPress={() => setSexoBiologico('M')}
            />
            <Text>Masculino</Text>
          </View>

          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={sexoBiologico === 'F' ? 'checked' : 'unchecked'}
              onPress={() => setSexoBiologico('F')}
            />
            <Text>Feminino</Text>
          </View>
        </View> 

        {/*  field dataNascimento */}
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24Hour={true}
            display="default"
            onTouchCancel={() => setShow(false)}
            onChange={(event, date) => {
              setShow(false);
              setDataNascimento(moment(date).format('DD/MM/YYYY'));
            }}
          />
        )}

        <TouchableOpacity onPress={() => setShow(true)}>
          <TextInput
            label="Data Nascimento"
            value={dataNascimento}
            left={<TextInput.Icon name="calendar" />}
            editable={false}
            style={styles.input}
          />
        </TouchableOpacity>
        
        {/** field pesoMeta */}
        <Input
          label="Altura (Cm)"
          value={altura}
          onChangeText={setAltura}
          left={<TextInput.Icon name="ruler"/>}
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
  containerRadio: {
    flexDirection: 'row',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerRadioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
  
})

