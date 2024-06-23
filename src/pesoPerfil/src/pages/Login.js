
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getDb } from '../database';

const db = getDb();

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const navigation = useNavigation();

  const navigateToProfile = () => {
    const { email, password } = form;

    if (!email || !password) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Usuario WHERE Email = ? AND Senha = ?',
        [email, password],
        (_, { rows }) => {
          if (rows.length > 0) {
            const user = rows.item(0);
            if (user && user.Nome) {
              Alert.alert('Sucesso', `Bem-vindo, ${user.Nome}!`);
              navigation.navigate('Perfil', { userId: user.UsuarioID });
            } else {
              Alert.alert('Erro', 'Nome do usuário não encontrado.');
            }
          } else {
            Alert.alert('Erro', 'Email ou senha incorretos.');
          }
        },
        (_, error) => {
          Alert.alert('Erro', `Erro ao fazer login: ${error.message}`);
        }
      );
    });
  };

  const navigateToRegister = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
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
                onChangeText={email => setForm({ ...form, email })}
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
                onChangeText={password => setForm({ ...form, password })}
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eBecf4',
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginVertical: 36,
    alignItems: 'center',
  },
  logoLogin: {
    width: 170,
    height: 160,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 6,
    color: '#1E1E1E',
    textAlign: 'center',
    marginTop: 10,
  },
  form: {
    marginBottom: 24,
    flex: 1,
  },
  input: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
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

export default Login;
