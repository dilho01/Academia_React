import React from 'react';
import { StyleSheet, Text, View, Pressable, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Menu() {
 
  const navigation = useNavigation();

  const navigateToCadastroAlunos = () => {
    navigation.navigate('CadastroAlunos');
  };
    return (
        <ImageBackground source={require('../../assets/kettlebell-fitness-still-life.jpg')} style={styles.imagfundo}>
            <View style={styles.overlay}>
                <Text style={styles.welcomeText}> Academia1</Text>
                <View style={styles.gridContainer}>
                    <View style={styles.column}>
                      <Text style={styles.text}>ALUNOS </Text>
                        <Pressable style={styles.button}  onPress={navigateToCadastroAlunos}>
                            <Image source={require('../../assets/local-na-rede-internet.png')} style={styles.imag} />
                        </Pressable>
                        <Pressable style={styles.button}>
                            <Image source={require('../../assets/engrenagem.png')} style={styles.imag} />
                        </Pressable>
                        <Pressable style={styles.button}>
                            <Image source={require('../../assets/configuracao.png')} style={styles.imag} />
                        </Pressable>
                        <Pressable style={styles.button}>
                            <Image source={require('../../assets/prancheta.png')} style={styles.imag} />
                        </Pressable>
                    </View>
                    <View style={styles.column}>
                    <Text style={styles.text}>PROFESSORES </Text>
                        <Pressable style={styles.button}>
                            <Image source={require('../../assets/local-na-rede-internet.png')} style={styles.imag} />
                        </Pressable>
                        <Pressable style={styles.button}>
                            <Image source={require('../../assets/engrenagem.png')} style={styles.imag} />
                        </Pressable>
                        <Pressable style={styles.button}>
                            <Image source={require('../../assets/configuracao.png')} style={styles.imag} />
                        </Pressable>
                        <Pressable style={styles.button}>
                            <Image source={require('../../assets/prancheta.png')} style={styles.imag} />
                        </Pressable>
                    </View>
                    <View style={styles.column}>
                    <Text style={styles.text}>ACADEMIA </Text>
                        <Pressable style={styles.button}>
                            <Image source={require('../../assets/supino.png')} style={styles.imag} />
                        </Pressable>
                        <Pressable style={styles.button}>
                            <Image source={require('../../assets/sentido-horario.png')} style={styles.imag} />
                        </Pressable>
                        <Pressable style={styles.button}>
                            <Image source={require('../../assets/fluxo-de-caixa.png')} style={styles.imag} />
                        </Pressable>
                        <Pressable style={styles.button}>
                            <Image source={require('../../assets/sair.png')} style={styles.imag} />
                        </Pressable>
                    </View>
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
        alignItems: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    welcomeText: {
        fontSize: 24,
        color: '#fff', 
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20, 
    },
    texe: {
      fontSize: 50,
      fontWeight: 'bold',
    },
    gridContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'flex-start', 
        flexWrap: 'wrap', 
        width: '100%',
        padding: 10,
    },
    column: {
        width: '30%', 
        alignItems: 'center', 
        marginVertical: 10, 
    },
    button: {
      backgroundColor: 'transparent', 
      padding: 15, 
      borderRadius: 10, 
      borderWidth: 2, 
      marginVertical: 10, 
      alignItems: 'center',
    },
    imag: {
        width: 80, 
        height: 80,
        
    },
});
