import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Menu from "../BarrinhaMenus/barraMenu";
import Icon from "react-native-vector-icons/Entypo";

export default class Opcoes extends Component{
    render(){
        return(
            <>
            <View style={styles.fundo}>
                <Icon name= 'tools' size={100} color='#ACACAC' style={styles.emoji}/>
                <Text style={styles.desen}> Tela em desenvolvimento...</Text>
            </View>
            <Menu/>
            </>
        )
    }
}

const styles = StyleSheet.create({
    fundo:{
        flex:1,
        backgroundColor: '#F1F1F1',
        alignItems: 'center',
        justifyContent: 'center'
    }, desen:{
        position: 'absolute',
        color: '#ACACAC',
        fontWeight: 'bold'
    },emoji:{
        top: -100
    }
})