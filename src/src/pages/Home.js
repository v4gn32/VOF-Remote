import React from 'react';
import { SafeAreaView, Text, Card, Button, StyleSheet, StatusBar, Dimensions } from 'react-native';

import { LineChart } from 'react-native-chart-kit';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#0a5058",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#5cddac",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(5, 39, 53, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false
};

const data = {
  labels: ["", "", "", "", "", ""],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(249, 105, 0, ${opacity})`,
      strokeWidth: 2
    }
  ],
  legend: ["Peso (kg)"]
};

const Home = ({ navigation }) => {
  return (
    <Container>
      <Header title={'Home'}></Header>
      <Body>
        <Text>Seu IMC mais recente é 35.86 --> 27/05/2024</Text>
        <Text>Obesidade</Text>
        <Text>Seu peso ideal é 63.29 kg</Text>
        <LineChart
          data={data}
          width={screenWidth}
          height={256}
          chartConfig={chartConfig}
          bezier
          yAxisLabel=""
          yAxisSuffix=" kg"
          withInnerLines={false}
        />    
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