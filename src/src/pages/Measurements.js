import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { List, Text, FAB } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';

import { getMeasurements, insertMeasurement, updateMeasurement, deleteMeasurement } from '../services/measurementsDbServices';

import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

import Measurement from '../pages/Measurement';


const Measurements = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    // async function fetchData() {
    //   await insertMeasurement({id:1, data: '2024-03-22', peso: 80 });
    //   await insertMeasurement({id:2, data: '2024-04-23', peso: 75 });
    //   await insertMeasurement({id:3, data: '2024-05-01', peso: 72 });
    //   await insertMeasurement({id:4, data: '2024-06-01', peso: 69 });
    //   await insertMeasurement({id:5, data: '2024-06-06', peso: 68 });
    //   const dados = await getMeasurements();
    //   setMeasurements(dados);
    // }
    // fetchData();

    getMeasurements().then((dados)=>{
      setMeasurements(dados);
      // console.log(dados);
    });
  },[isFocused]);


  const [visible, setVisible] = useState(false);
  const [selectedMeasurement, setSelectedMeasurement] = useState(null);

  const showDialog = (item) => {
    setSelectedMeasurement(item);
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
    setSelectedMeasurement(null);
  };

  const handleEdit = () => {
    // Logic to handle edit
    hideDialog();
  };

  const handleDelete = (id) => {
    // Logic to handle delete
    // setData(data.filter(item => item.id !== id));
  };

  const Item = ({ item }) => (
    <List.Item
      title={
        'Peso aferido: ' + item.peso.toFixed(1) + ' Kg'
        }
      description={item.data}
      left={props => <List.Icon {...props} icon="scale" />}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
          {' IMC: '}
          {item.imc}{' '}
        </Text>
      )}
      onPress={() => navigation.navigate('Measurement', {item})}
    />
  );

  return (
    <Container>
      <Header title={'Medições'}></Header>
      <Body>
        <FlatList
          data={measurements}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => navigation.navigate('Measurement')}
        />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Measurements;