import React, { useState } from 'react';
import { Alert } from 'react-native';
import { StyleSheet, Text, View, TextInput, Pressable, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCadastro = () => {
    if (!isValidEmail(email)) {
      Alert.alert('Email inválido', 'Por favor, insira um email válido.');
      return;
    }

    if (nome === '' || sobrenome === '' || endereco === '' || telefone === '' || cpf === '' || senha === '') {
      Alert.alert('Campos obrigatórios', 'Por favor, preencha todos os campos.');
      return;
    }


    Alert.alert('Cadastro realizado com sucesso', 'Você pode agora fazer login.');
  };

  return (
    <ImageBackground source={require('../../assets/view-gym-room-training-sports.jpg')} style={styles.imagfundo}>
      <View style={styles.container}>
        <Image source={require('../../assets/musculo2.png')} style={styles.logo} />
        <Text style={styles.titulo}>FAÇA SEU CADASTRO 0</Text>
        <View style={styles.formContainer}>
          <Text style={styles.label}>NOME:</Text>
          <TextInput style={styles.input} placeholder="Digite seu nome" onChangeText={setNome} />
          <Text style={styles.label}>SOBRENOME:</Text>
          <TextInput style={styles.input} placeholder="Digite seu sobrenome" onChangeText={setSobrenome} />
          <Text style={styles.label}>ENDEREÇO:</Text>
          <TextInput style={styles.input} placeholder="Digite seu endereço" onChangeText={setEndereco} />
          <Text style={styles.label}>E-MAIL:</Text>
          <TextInput style={styles.input} placeholder="Digite seu e-mail" onChangeText={setEmail} />
          <Text style={styles.label}>TELEFONE:</Text>
          <TextInput style={styles.input} placeholder="Digite seu telefone" onChangeText={setTelefone} />
          <Text style={styles.label}>CPF:</Text>
          <TextInput style={styles.input} placeholder="Digite seu CPF" onChangeText={setCpf} />
          <Text style={styles.label}>SENHA:</Text>
          <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry onChangeText={setSenha} />
          <Pressable style={styles.button} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imagfundo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#fff',
  },
  button: {
    backgroundColor: '#faa',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
