import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import  Icon  from 'react-native-vector-icons/Entypo';
import  Icone  from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import styles1 from './EstiloBarraMenu';

function Voltar(){
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles1.botaomenu}
            onPress={() => navigation.navigate('Humores')}>
            <Icon name='home' color='#FFFFFF' size={18}/>
        </TouchableOpacity>
    )
}
function Add(){
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles1.botaoadd}
            onPress={() => navigation.navigate('Humores')}>
            <Icone name='pluscircle' size={50} color='#304FFE'/>
        </TouchableOpacity>
    )
}

function Opcoes(){
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles1.opcoes}
            onPress={() => navigation.navigate('Opcoes')}>
            <Icone name= 'bars' color='#304FFE' size={18}/>
        </TouchableOpacity>
    )
}

export default class Menu extends Component{
    render(){
        return(
            <View>
                <Text style={styles1.barrinha}> </Text>
                <Text style={styles1.barrinha2}> </Text>
                <Voltar/>
                <Add/>
                <Opcoes/>
            </View>
        )
    }
}
