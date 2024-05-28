import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; 
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity, 
} from 'react-native';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const navigation = useNavigation(); 

  const navigateToProfile = () => {
    navigation.navigate('Perfil'); 
  };

  const navigateToRegister = () => {
    navigation.navigate('Cadastro'); 
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eBecf4' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/img/logoLogin.png')}
            style={styles.logoLogin}
            alt="Logo"
          />

          <Text style={styles.title}>Faça seu Login</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Seu Email</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              style={styles.inputControl}
              placeholder="Digite seu email aqui"
              placeholderTextColor="#6b7280"
              value={form.email}
              onChangeText={(email) => setForm({ ...form, email })}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Sua Senha</Text>

            <TextInput
              secureTextEntry
              style={styles.inputControl}
              placeholder="*********"
              placeholderTextColor="#6b7280"
              value={form.password}
              onChangeText={(password) => setForm({ ...form, password })}
            />
          </View>
        </View>

        <View style={styles.formAction}>
          <TouchableOpacity onPress={navigateToProfile}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Acessar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToRegister}>
            <Text style={styles.formFooter}>Não possuo uma conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  logoLogin: {
    marginTop: 3,
    width: 170,
    height: 160,
    alignSelf: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 6,
    color: '#1E1E1E',
    textAlign: 'center',
    marginTop: 10,
  },

  header: {
    marginVertical: 36,
  },

  input: {
    marginBottom: 15, 
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
    width: 200,
    marginBottom: 8,
  },

  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '400',
    color: '#222',
  },

  form: {
    marginBottom: 24,
    flex: 1,
  },
  formAction: {
    marginVertical: 24,
  },

  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#E20B73',
    textAlign: 'center',
    letterSpacing: 0.15,
    marginTop: 30,
  },

  btn: {
    backgroundColor: '#E20B73',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },

  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});
