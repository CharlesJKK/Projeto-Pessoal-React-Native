import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Menu from "../BarrinhaMenus/barraMenu";
import  Icon  from 'react-native-vector-icons/Entypo';
import styles from './EstiloVisuHumor'
import { formatoData } from "../Opções/componentesEditPerfil/formatoData";
import { useNavigation } from "@react-navigation/native";
import AtividadesVisuH from "./componentes/Atividades";
import Descript from "./componentes/Description";

function Back(){
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.voltar}
            onPress={() => navigation.goBack()}>
            <Icon name="chevron-thin-left" color={'#2f4efe'}/>
        </TouchableOpacity>
    )
}

const cores = {
    happy: '#E24B4B',
    terrible: '#4B75E2',
    sad: '#4BE263',
    ok: 'green',
    radiant: 'pink'
}

const humors = {
    radiant: 'RADIANTE',
    happy: 'FELIZ',
    ok: 'OK',
    sad: 'TRISTE',
    terrible: 'ACABADO'
}

const humorsFT = {
    radiant: require('../scr/assets/morideri.png'),
    happy: require('../scr/assets/bem.png'),
    ok: require('../scr/assets/reacao.png'),
    sad: require('../scr/assets/triste.png'),
    terrible: require('../scr/assets/mal.png')
}

export default function VisuHumor ({ route }) {
    const { id, date, mood, activities } = route.params;
    const nomeMes = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "outubro", "novembro", "dezembro");
    const dataCriado = formatoData(date);
    const mesNome = nomeMes[dataCriado.mes1]
    
    return(
        <>
        <View style={styles.conteiner}>
            <Back/>
            <AtividadesVisuH
            activity={activities}
            />
            <View style={styles.imagemConteiner}>
                <Image source={humorsFT[mood]} style={styles.imagemH}/>
                <Text style={[styles.textoHumor, {color: cores[mood]}]}>{humors[mood]}</Text>
            </View>              
            <View style={styles.diaehoraConteiner}>
                <View style={styles.alinhamentoConteiner}>
                <Image source={require('../scr/assets/relogiozinho.png')}/>
                    <Text style={styles.textoDia}>{dataCriado.hora}:{dataCriado.minuto}</Text>  
                </View>
                <View style={styles.alinhamentoConteiner}>
                    <Image source={require('../scr/assets/calendariozinho.png')}/>
                    <Text style={[styles.textoDia, {textTransform: 'uppercase'}]}>{dataCriado.dia} de {mesNome}</Text>
                </View>
            </View>
            <Descript
            id={id}
            />
        </View>
    <Menu/>
    </>
   )
}
