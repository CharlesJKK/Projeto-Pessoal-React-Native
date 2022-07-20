import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, FlatList} from "react-native";
import  Icon  from 'react-native-vector-icons/Entypo';
import styles from './EstiloTHS';
import Menu from '../BarrinhaMenus/barraMenu'
import HumorVazio from '../TelaInicial/TelaInicial'
import { useNavigation } from "@react-navigation/native";
import Lista from "./dados";

const cores = {
    BEM: '#E24B4B',
    MAL: '#4B75E2',
    TRISTE: '#4BE263'
}

export default function TelaH({ navigation }) {
    const renderItem = ({ item }) => (
        <View style={styles.fundo}>
        <TouchableOpacity style={styles.caixa} onPress={() => navigation.navigate('VisuHumor', item)}>
            <View style={styles.imagemConteiner}>
                <Image source={item.image}/>
            </View>
            <View style={styles.dataConteiner}>
                <Text style={styles.data}>{item.now ? `Hoje, ${item.data}` : item.data}</Text>
            </View>
            <View style={styles.humorConteiner}>
                <Text style={[styles.humor, {color: cores[item.humor]}]}>{item.humor}</Text>
                <View style={styles.horaConteiner}>
                    <Text style={styles.hora}>{item.hora}</Text>
                </View>
            </View>
            <View style={styles.iconesConteiner}>
                <Icon style={styles.icone} name='drink' size={20}>
                    <Text style={styles.textoIcone}> {item.atividade.primeiraAtividade} •</Text> {item.primeiroIcon}</Icon>
                <Icon style={styles.icone} name='dribbble' size={20}>
                    <Text style={styles.textoIcone}> {item.atividade.segundaAtividade} •</Text> {item.segundoIcon}</Icon>
                <Icon style={styles.icone} name='bowl' size={20}>
                    <Text style={styles.textoIcone}> {item.atividade.ultimaAtividade}</Text> {item.terceiroIcon}</Icon>
            </View>
            <View style={styles.textocaixaConteiner}>
                <Text numberOfLines={1} style={styles.textocaixa}>{item.about}</Text>
            </View>
        </TouchableOpacity>
    </View>
 );

    return (
            <>
            <FlatList
            data={Lista}
            renderItem={renderItem}
            keyExtractor={item => item.id} 
            ListEmptyComponent={HumorVazio}
            />
            <Menu/>
            </>
    );
}