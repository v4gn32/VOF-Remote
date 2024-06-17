import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton, Text, TextInput, Button, Appbar, Card } from 'react-native-paper';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Animatable from 'react-native-animatable';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';

import { getMeasurements, insertMeasurement, updateMeasurement, deleteMeasurement } from '../services/measurementsDbServices';
import { useNavigation } from '@react-navigation/native';

const Measurement = ({ route  }) => {
  const navigation = useNavigation();
  const {item} = route.params? route.params : {};

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [id, setId] = useState(null);
  const [data, setData] = useState(moment(new Date()).format('DD/MM/YYYY'));
  const [peso, setPeso] = useState(0);

  useEffect(() => {
    if (item) {
      setId(item.id);
      setData(item.data);
      setPeso(item.peso.toFixed(1));
    }
  }, [item]);

  const handleSalvar = () => {
    console.log("salvar!");
    if (item) {
      updateMeasurement({
        data: data,
        peso: peso,
        id: item.id,
      }).then();
    } else {
      insertMeasurement({
        data: data,
        peso: peso,
      }).then();
    }

    navigation.goBack();
  }
  const handleExcluir = () => {
    console.log("Excluir!");
    deleteMeasurement(item.id).then();
    navigation.goBack();
  } 

  return (
    <Container>
      <Header title={'Pesagem'} goBack={() => navigation.goBack()}>
        <Appbar.Action icon="check" onPress={handleSalvar} />
        {item && <Appbar.Action icon="trash-can" onPress={handleExcluir} />}
      </Header>
      <Body>
      {/**  
      <View style={styles.containerLogo}>
        <Animatable.Image 
          animation="flipInY"
          source={require('../../assets/balanca.jpg')}
          height='100%'
        />
      </View>*/}

  <Card>
    <Card.Cover source={require('../../assets/balanca.jpg')} />
  </Card>

      <View style={styles.containerForm}>

        {/*  field data */}
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
              setData(moment(date).format('DD/MM/YYYY'));
            }}
          />
        )}

        <TouchableOpacity onPress={() => setShow(true)}>
          <TextInput
            label="Data"
            value={data}
            left={<TextInput.Icon name="calendar" />}
            editable={false}
            style={styles.input}
          />
        </TouchableOpacity>
        
        {/*  field peso */}
        <Input
          label="Peso"
          value={peso}
          onChangeText={setPeso}
          left={<TextInput.Icon name="weight-kilogram"/>}
        />

        {/**  Testando com  TouchableOpacity
        <TouchableOpacity 
          style={styles.buttonTouchable}
          onPress={() => handleSalvar}
          >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        */}

        {/** não esta funcionando, mostra um erro:
         Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`. Make sure to run `bundle exec pod install` first. Read more about autolinking: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md
         
        <Button mode="contained" style={styles.button} onPress={handleSalvar}>
          Salvar
        </Button>
        {item && (
        <Button
          mode="contained"
          color={'red'}
          style={styles.button}
          onPress={handleExcluir}>
          Excluir
        </Button>
        )}
        */}
        </View>
        
      </Body>
    </Container>    
  );
};

const styles = StyleSheet.create({
  /*
  button: {
    marginBottom: 8,
  },
  buttonTouchable:{
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
  containerLogo:{
    flex:1,
    backgroundColor:'#072b39',
    justifyContent:'center',
    alignItems:'center'
  },
  containerForm:{
    flex:1,
  },
  */
});

export default Measurement;
