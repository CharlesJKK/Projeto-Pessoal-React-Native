import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './EstiloTI'



export default function TelaInicial(){
        return(     
            <View style={styles.fundo}>
                <Image
                    style={styles.carinha}
                    source={require('../scr/assets/neutral1.png')} />
                <Text style={styles.textoini}>Você ainda não tem nenhum registro diário.Para começar, toque no ícone de adicionar na tela</Text>
            </View>     
        )
}       
      
    
