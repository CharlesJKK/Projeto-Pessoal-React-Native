import React, {Component, useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import  Icon  from 'react-native-vector-icons/Entypo';
import styles from './AddHumorEstilo';
import { useNavigation } from "@react-navigation/native";
import MudancaFundoHumores from './componentes/MudancaFundoHumor';
import MudancaFundoAtividades from './componentes/MudancaFundoAtividade';

function BotaoX(){
    const navigation = useNavigation()
    return(
        <TouchableOpacity style={styles.xBotao}
        onPress={() => navigation.goBack()}>
            <Icon name='cross' color={'#304FFE'} size={25}/>
        </TouchableOpacity>
    )
}

function BotaoSalvar(){
    const navigation = useNavigation()
    return(
        <TouchableOpacity style={styles.botaoSalvar}
        onPress={() => navigation.navigate('Humores')}>
        <Text style={styles.textoSalvar}>SALVAR</Text>
    </TouchableOpacity>
    )
}


function AddH(){

    return(
            <View style={styles.conteinerFundo}>
                <BotaoX/>
                <View style={styles.conteinerPergunta}>
                    <Text style={styles.textoPergunta}>Como você está?</Text>
                </View>
                <View style={styles.conteinerDataeHora}>
                    <View style={styles.alinhamentoData}>
                        <Image source={require('../scr/assets/calendariozinho.png')}/>
                        <Text style={styles.textoDH}>HOJE, 23 DE JANEIRO</Text>
                    </View>
                    <View style={styles.alinhamentoHora}>
                        <Image source={require('../scr/assets/relogiozinho.png')}/>
                        <Text style={styles.textoDH}>08:35</Text>
                    </View>
                </View>
                <View style={styles.conteinerHumores}>
                    <MudancaFundoHumores/>
                </View>
                    <MudancaFundoAtividades/>
                <TextInput
                    style={styles.conteinerTexto}
                    placeholderTextColor="#969696"   
                    placeholder="  Escreva aqui o que aconteceu hoje..."
                    color= '#000000'
                />
                <BotaoSalvar/>
            </View>
    
    )
}

export default function AdicionarHumor(){
    return(
        <ScrollView style={styles.conteinerScroll}>
            <AddH/>
        </ScrollView>
    )
}
