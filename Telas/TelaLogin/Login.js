import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './EstiloL'
import { useNavigation } from '@react-navigation/core'

function BotaoLogin(){
  const navigation = useNavigation();
  return(
    <TouchableOpacity style={styles.botao2}
    onPress={() => navigation.navigate('Humores')}>
        <Text style={styles.entrar}>ENTRAR</Text>
    </TouchableOpacity>   
  )
}


export default class TelaLogin extends Component{
  render(){
    return(
      <View style={styles.conteiner}>
        <Image
            style={styles.logo}
            source={require('../scr/assets/logo.png')}/>
        <View>
          <TextInput 
            placeholderTextColor="#969696"
            placeholder="  e-mail"
            style={styles.botao}
            color= '#000000'/>
        </View>
        <View>
          <TextInput 
              style={styles.botao}
              secureTextEntry={true}
              placeholderTextColor="#969696"   
              placeholder="  senha"
              color= '#000000'/>
        </View>
        <BotaoLogin/>     
      </View>
    )
  }
}