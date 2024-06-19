import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton, Text, TextInput, Button, Appbar } from 'react-native-paper';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';

import {useUser} from '../contexts/UserContext';
import { useNavigation } from '@react-navigation/native';

const Profile = ({ route }) => {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date()); 
  const [show, setShow] = useState(false);

  const {name, setName, altura, setAltura, dataNascimento, setDataNascimento, sexoBiologico, setSexoBiologico} = useUser();

  // const [dataNascimento, setDataNascimento] = useState(moment(new Date()).format('DD/MM/YYYY'));
  
  const [pesoMeta, setPesoMeta] = useState(null);
  
  const handleSalvar = () => {
    console.log("Salvar");
  }

  return (
    <Container>
      <Header title={'Perfil: ' + name}>
        <Appbar.Action icon="check" onPress={handleSalvar} />
      </Header>
      <Body>

        {/** field sexoBiologico */}
        <View style={styles.containerRadio}>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={sexoBiologico === 'M' ? 'checked' : 'unchecked'}
              color={'blue'}
              onPress={() => setSexoBiologico('M')}
            />
            <Text>Masculino</Text>
          </View>

          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={sexoBiologico === 'F' ? 'checked' : 'unchecked'}
              color={'blue'}
              onPress={() => setSexoBiologico('F')}
            />
            <Text>Feminino</Text>
          </View>
        </View>

        {/** field dataNascimento */}
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
            label="Data de Nascimento"
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
          onChangeText={(text) => setAltura(text)}
          left={<TextInput.Icon name="ruler"/>}
        />

        {/** field pesoMeta */}
        <Input
          label="Peso meta a se chegar (Kg)"
          value={pesoMeta}
          onChangeText={(text) => setPesoMeta(text)}
          left={<TextInput.Icon name="weight-kilogram"/>}
        />
        
        <Button mode="contained" style={styles.button} onPress={handleSalvar}>
          Salvar
        </Button>

      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
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
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginBottom: 8,
  },
});

export default Profile;