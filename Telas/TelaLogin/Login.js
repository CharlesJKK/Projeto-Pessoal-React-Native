import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import styles from './EstiloL'
import AutentApi from './AuntentApi';



export default function TelaLogin({ navigation }){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { entrar, formatInvalid } = AutentApi(email, password, navigation);
    return(
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#304FFE'}} behavior= 'position' keyboardVerticalOffset={28}>
        <View style={styles.conteiner}>
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
        <Text style={{display: formatInvalid ? 'flex': 'none', color: 'red', fontWeight: 'bold', position: 'absolute', top: 455, left:45}}>Ops! Preencha corretamente os campos!!</Text>
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
        </View>   
      </KeyboardAvoidingView>
    )
  }
