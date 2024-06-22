import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { getDb } from '../database';

const db = getDb();

const Cadastro = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    altura: '',
    idade: '',
    sexo: '',
    peso: '',
  });

  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const handleSubmit = () => {
    const { nome, email, senha, altura, idade, sexo, peso } = form;

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!nome || !email || !senha || !altura || !idade || !sexo || !peso) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    // Executa a transação para inserir o usuário no banco de dados
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO Usuario (Nome, Email, Senha, Altura, Idade, Sexo, Peso) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [nome, email, senha, altura, idade, sexo, peso],
        (_, result) => {
          if (result.rowsAffected > 0) {
            // Sucesso ao cadastrar usuário
            Alert.alert('Sucesso', 'Usuário cadastrado com sucesso.');
            navigateToLogin(); // Navegar para a tela de login, por exemplo
          } else {
            // Não foi possível cadastrar o usuário
            Alert.alert('Erro', 'Erro ao cadastrar o usuário.');
          }
        },
        (_, error) => {
          // Erro ao executar o SQL de inserção
          if (error.message.includes('UNIQUE constraint failed')) {
            Alert.alert('Erro', 'Email já cadastrado. Por favor, escolha outro email.');
          } else {
            Alert.alert('Erro', `Erro ao cadastrar o usuário: ${error.message}`);
          }
        }
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eBecf4' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.title}>Crie sua Conta</Text>
            </View>

            <View style={styles.form}>
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Nome</Text>
                <TextInput
                  autoCapitalize="words"
                  style={styles.inputControl}
                  placeholder="Digite seu nome aqui"
                  placeholderTextColor="#6b7280"
                  value={form.nome}
                  onChangeText={(nome) => setForm({ ...form, nome })}
                />
              </View>

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
                  value={form.senha}
                  onChangeText={(senha) => setForm({ ...form, senha })}
                />
              </View>

              <View style={styles.input}>
                <Text style={styles.inputLabel}>Altura (cm)</Text>
                <TextInput
                  keyboardType="numeric"
                  style={styles.inputControl}
                  placeholder="Digite sua altura aqui"
                  placeholderTextColor="#6b7280"
                  value={form.altura}
                  onChangeText={(altura) => setForm({ ...form, altura })}
                />
              </View>

              <View style={styles.input}>
                <Text style={styles.inputLabel}>Idade</Text>
                <TextInput
                  keyboardType="numeric"
                  style={styles.inputControl}
                  placeholder="Digite sua idade aqui"
                  placeholderTextColor="#6b7280"
                  value={form.idade}
                  onChangeText={(idade) => setForm({ ...form, idade })}
                />
              </View>

              <View style={styles.input}>
                <Text style={styles.inputLabel}>Sexo (M/F/O)</Text>
                <TextInput
                  autoCapitalize="characters"
                  style={styles.inputControl}
                  placeholder="Digite M, F ou O"
                  placeholderTextColor="#6b7280"
                  value={form.sexo}
                  onChangeText={(sexo) => setForm({ ...form, sexo })}
                />
              </View>

              <View style={styles.input}>
                <Text style={styles.inputLabel}>Peso (kg)</Text>
                <TextInput
                  keyboardType="numeric"
                  style={styles.inputControl}
                  placeholder="Digite seu peso aqui"
                  placeholderTextColor="#6b7280"
                  value={form.peso}
                  onChangeText={(peso) => setForm({ ...form, peso })}
                />
              </View>
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Cadastrar</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={navigateToLogin}>
                <Text style={styles.formFooter}>Já tenho uma conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
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
    marginBottom: 20,
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

export default Cadastro;
