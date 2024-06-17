import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Dimensions, ScrollView } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import MyCard from '../components/MyCard';

import {useUser} from '../contexts/UserContext';

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#0a5058",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#5cddac",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(5, 39, 53, ${opacity})`,
  strokeWidth: 8,
  barPercentage: 0.5,
  useShadowColorFromDataset: false
};

const data = {
  labels: ["", "", "", "", "", ""],
  datasets: [
    {
      data: [101, 96, 100, 79, 75, 71, 79, 75, 71],
      color: (opacity = 1) => `rgba(249, 105, 0, ${opacity})`,
      strokeWidth: 2
    }
  ],
  legend: ["Peso (kg)"]
};

const Home = ({ navigation }) => {

  const {name, altura, sexoBiologico} = useUser();

  return (
    <Container>
      <Header title={'Olá ' + name}></Header>
      <Body>
        <MyCard
          title="Seu IMC mais recente é 32,5 "
          subtitle="Índice de Massa Corporal" 
          leftContent={props => <Avatar.Icon {...props} icon="heart" />}
          actions={<Text variant="bodyMedium">Obesidade</Text>}
        >
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        </MyCard>
        <MyCard
          title="Seu Peso mais recente é 77,6 kg"
          subtitle="Histórico de Peso - 27/05/2024"
          actions={<Text variant="bodyMedium">Monitoramento do peso corporal ao longo do tempo</Text>}
        >
          <LineChart
            data={data}
            width={screenWidth - 40}
            height={150}
            chartConfig={chartConfig}
            bezier
            yAxisLabel=""
            yAxisSuffix=" kg"
            withInnerLines={false}
            style={{
              marginVertical: 8,
              borderRadius: 12
            }}
          />
        </MyCard>    
      </Body>
      {/*
      <Button title="View Measurements" onPress={() => navigation.navigate('Measurements')} />
      */}
    </Container>
  );
};

const styles = StyleSheet.create({

});

export default Home;