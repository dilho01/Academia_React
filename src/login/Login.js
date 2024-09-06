import React, { useState } from 'react';
import { Alert } from 'react-native';
import { StyleSheet, Text, View, TextInput, Pressable, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Login() {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!isValidEmail(email)) {
      Alert.alert('Email inválido', 'Por favor, insira um email válido.');
      return;
    }

    
    const correctEmail = 'gabriel@gmail.com';
    const correctPassword = '123';

    if (email === correctEmail && password === correctPassword) {
      navigation.navigate('Menu');
      Alert.alert('Bem vindo');
    } else {
      Alert.alert('Login incorreto', 'Email ou senha incorretos. Por favor, tente novamente.');
    }
  };

  return (
    <ImageBackground source={require('../../assets/view-gym-room-training-sports.jpg')} style={styles.imagfundo}>
      <View style={styles.container}>
        <Image source={require('../../assets/musculo2.png')} style={styles.logo} />
        <Text style={styles.titulo}>FAÇA SEU LOGIN 8</Text>
        <View style={styles.formContainer}>
          <Text style={styles.label}>
            <Image source={require('../../assets/peso-pesado1.png')} style={styles.icon} />
            E-MAIL:
          </Text>
          <TextInput style={styles.input} placeholder="Digite seu e-mail"
          onChangeText={setEmail}  />
          <Text style={styles.label}>
            <Image source={require('../../assets/cadeado1.png')} style={styles.icon} />
            SENHA:
          </Text>
          <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry 
          onChangeText={setPassword} />
          <Pressable style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
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
