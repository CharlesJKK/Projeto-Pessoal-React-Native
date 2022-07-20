import React, {Component, useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import  Icon  from 'react-native-vector-icons/Entypo';
import styles from './AddHumorEstilo';
import { useNavigation } from "@react-navigation/native";

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
                    <TouchableOpacity onPress={() => {}}>
                        <View style={styles.humores}>
                            <Image source={require('../scr/assets/morideri.png')}/>
                            <Text style={styles.textoHumor}>RADIANTE</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.humores}>
                            <Image source={require('../scr/assets/bem.png')}/>
                            <Text style={styles.textoHumor}>FELIZ</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.humores}>
                            <Image source={require('../scr/assets/reacao.png')}/>
                            <Text style={styles.textoHumor}>OK</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.humores}>
                            <Image source={require('../scr/assets/triste.png')}/>
                            <Text style={styles.textoHumor}>TRISTE</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.humores}>
                            <Image source={require('../scr/assets/mal.png')}/>
                            <Text style={styles.textoHumor}>ACABADO</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.conteinerAcao}>
                    <View style={styles.conteinericonCima}>
                        <TouchableOpacity style={styles.iconEsquerda}>
                            <Icon name='moon' color={'black'} size={40}></Icon>
                            <Text style={styles.textoicon}>descanso</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconMeio}>
                            <Icon name='heart' color={'black'} size={40}></Icon>
                            <Text style={styles.textoicon}>encontro</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconDireita}>
                            <Icon name='laptop' color={'black'} size={40}></Icon>
                            <Text style={styles.textoicon}>filmes e séries</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.conteinericonMeio}>
                    <TouchableOpacity style={styles.iconEsquerda}>
                            <Icon name='shopping-cart' color={'black'} size={40}></Icon>
                            <Text style={styles.textoicon}>compras</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconMeio}>
                            <Icon name='app-store' color={'black'} size={40}></Icon>
                            <Text style={styles.textoicon}>boa refeição</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconDireita}>
                            <Icon name='drink' color={'black'} size={40}></Icon>
                            <Text style={styles.textoicon}>festa</Text>
                        </TouchableOpacity> 
                    </View>
                    <View style={styles.conteinericonBaixo}>
                    <TouchableOpacity style={styles.iconEsquerda}>
                            <Icon name='dribbble' color={'black'} size={40}></Icon>
                            <Text style={styles.textoicon}>esporte</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconMeio}>
                            <Icon name='bowl' color={'black'} size={40}></Icon>
                            <Text style={styles.textoicon}>cozinhar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconDireita}>
                            <Icon name='game-controller' color={'black'} size={40}></Icon>
                            <Text style={styles.textoicon}>jogos</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
