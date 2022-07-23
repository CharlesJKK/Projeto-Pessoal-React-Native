import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView} from "react-native";

function Foto1({click}){
    return(
        <View style={[styles.conteinerFoto, {top: 213, left: 28}, click ? styles.FotoAtivada : null]}>
            <Image source={require('../../scr/assets/6.png')}></Image>
        </View>
    )
}

function Foto2({click}){
    return(
        <View style={[styles.conteinerFoto, {top: 213, left: 148}, click ? styles.FotoAtivada : null]}>
            <Image source={require('../../scr/assets/6.png')}></Image>
        </View>
    )
}

function Foto3({click}){
    return(
        <View style={[styles.conteinerFoto, {top: 213, left: 267}, click ? styles.FotoAtivada : null]}>
            <Image source={require('../../scr/assets/6.png')}></Image>
        </View>
    )
}

function Foto4({click}){
    return(
        <View style={[styles.conteinerFoto, {top: 324, left: 28}, click ? styles.FotoAtivada : null]}>
            <Image source={require('../../scr/assets/6.png')}></Image>
        </View>
    )
}

function Foto5({click}){
    return(
        <View style={[styles.conteinerFoto, {top: 324, left: 148}, click ? styles.FotoAtivada : null]}>
            <Image source={require('../../scr/assets/6.png')}></Image>
        </View>
    )
}

function Foto6({click}){
    return(
        <View style={[styles.conteinerFoto, {top: 324, left: 267}, click ? styles.FotoAtivada : null]}>
            <Image source={require('../../scr/assets/6.png')}></Image>
        </View>
    )
}


export default function AlterarFT(){
    const [id, setId] = useState(0);

    const clicado = (id, key) => {
        setId(key);
    if (key === id) {
        setId(0)
    }
}
    return(
        <>
            <TouchableOpacity onPress={() => clicado(id, 1)}>
                <Foto1 click={id === 1}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => clicado(id, 2)}>
                <Foto2 click={id === 2}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => clicado(id, 3)}>
                <Foto3 click={id === 3}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => clicado(id, 4)}>
                <Foto4 click={id === 4}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => clicado(id, 5)}>
                <Foto5 click={id === 5}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => clicado(id, 6)}>
                <Foto6 click={id === 6}/>
            </TouchableOpacity>
            </>
    )
}

const styles = StyleSheet.create({
    conteinerFoto:{
        position: 'absolute',
        justifyContent: 'center',
        padding: 5,
        alignItems: 'center',
    }, FotoAtivada:{
        backgroundColor: '#304FFE',
        borderColor: '#304FFE',
        borderRadius: 50
    }
})