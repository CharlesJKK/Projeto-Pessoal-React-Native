import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import styles from './EstiloL'
import AutentApi from './AuntentApi';



export default function TelaLogin({ navigation }){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { entrar } = AutentApi(email, password, navigation);
    return(
      <KeyboardAvoidingView style={styles.conteiner} behavior= 'position' keyboardVerticalOffset={28}>
        <Image
            style={styles.logo}
            source={require('../scr/assets/logo.png')}/>
        <View>
          <TextInput 
            placeholderTextColor="#969696"
            placeholder="  e-mail"
            keyboardType='email-address'
            style={styles.botao}
            color= '#000000'
            onChangeText={value => setEmail(value)}/>
        </View>
        <View>
          <TextInput 
              style={styles.botao}
              secureTextEntry={true}
              placeholderTextColor="#969696"   
              placeholder="  senha"
              color= '#000000'
              onChangeText={value => setPassword(value)}/>
        </View>
        <TouchableOpacity style={styles.conteinerEntrar}
            onPress={() => entrar()}>
            <Text style={styles.entrar}>ENTRAR</Text>
        </TouchableOpacity>   
      </KeyboardAvoidingView>
    )
  }
