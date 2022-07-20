import React, {Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Menu from "../BarrinhaMenus/barraMenu";
import  Icon  from 'react-native-vector-icons/Entypo';
import styles from './EstiloVisuHumor'
import { useNavigation } from "@react-navigation/native";

function Back(){
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.voltar}
            onPress={() => navigation.goBack()}>
            <Icon name="chevron-thin-left" color={'#2f4efe'}/>
        </TouchableOpacity>
    )
}

export default function VisuHumor ({ route, navigation }) {
    const { image, now, data, hora, humor, about} = route.params;
    const { icon, atividade} = route.params;

    const cores = {
        BEM: '#E24B4B',
        MAL: '#4B75E2',
        TRISTE: '#4BE263'
    } 
    return(
        <>
        <View style={styles.conteiner}>
        <Back/>
            <View style={styles.caixa}>
                <Icon style={styles.emojisUm} name={icon.primeiroIcon} size={18}></Icon>
                <Icon style={styles.emojisDois} name={icon.segundoIcon} size={18}></Icon>
                <Icon style={styles.emojisTres} name={icon.terceiroIcon} size={18}></Icon>
                <Text style={styles.textoEmojisUm}>{atividade.primeiraAtividade}</Text>
                <Text style={styles.textoEmojisDois}>{atividade.segundaAtividade}</Text>
                <Text style={styles.textoEmojisTres}>{atividade.ultimaAtividade}</Text>
            </View>
            <View style={styles.imagemConteiner}>
                <Image source={image} style={styles.imagemH}/>
                <Text style={[styles.textoHumor, {color: cores[humor]}]}>{humor}</Text>
            </View>              
            <View style={styles.diaehoraConteiner}>
                <View style={styles.alinhamentoConteiner}>
                <Image source={require('../scr/assets/relogiozinho.png')}/>
                    <Text style={styles.textoDia}>{hora}</Text>  
                </View>
                <View style={styles.alinhamentoConteiner}>
                    <Image source={require('../scr/assets/calendariozinho.png')}/>
                    <Text style={styles.textoDia}>{now ? `Hoje, ${data}` : data}</Text>
                </View>
            </View>
            <View style={styles.textoCX}>
                <View style={styles.conteinerTexto}>
                    <Text style={styles.textoC}>{about}</Text>
                </View>
            </View>
        </View>
    <Menu/>
    </>
   )
}

