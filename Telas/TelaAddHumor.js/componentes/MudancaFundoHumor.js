import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../AddHumorEstilo';

function Radiante({click}){
    return(
    <View style={[styles.humores, click ? styles.opacidadeHumor : null]}>
        <Image source={require('../../scr/assets/morideri.png')}/>
        <Text style={[styles.textoHumor, click ? {color: '#C801FA'} : null]}>RADIANTE</Text>
    </View>
    )
}

function Bem({click}){
    return(
    <View style={[styles.humores, click ? styles.opacidadeHumor : null]}>
        <Image source={require('../../scr/assets/bem.png')}/>
        <Text style={[styles.textoHumor, click ? {color: '#C801FA'} : null]}>FELIZ</Text>
    </View>
    )
}

function Ok({click}){
    return(
    <View style={[styles.humores, click ? styles.opacidadeHumor : null]}>
        <Image source={require('../../scr/assets/reacao.png')}/>
        <Text style={[styles.textoHumor, click ? {color: '#C801FA'} : null]}>OK</Text>
    </View>
    )
}

function Triste({click}){
    return(
    <View style={[styles.humores, click ? styles.opacidadeHumor : null]}>
        <Image source={require('../../scr/assets/triste.png')}/>
        <Text style={[styles.textoHumor, click ? {color: '#C801FA'} : null]}>TRISTE</Text>
    </View>
    )
}

function Acabado({click}){
    return(
    <View style={[styles.humores, click ? styles.opacidadeHumor : null]}>
        <Image source={require('../../scr/assets/mal.png')}/>
        <Text style={[styles.textoHumor, click ? {color: '#C801FA'} : null]}>ACABADO</Text>
    </View>
    )
}

export default function MudancaFundoHumores(){
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
            <Radiante click={id === 1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => clicado(id, 2)}>
            <Bem click={id === 2}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => clicado(id, 3)}>
            <Ok click={id === 3}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => clicado(id, 4)}>
            <Triste click={id === 4}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => clicado(id, 5)}>
            <Acabado click={id === 5}/>
        </TouchableOpacity>
        </>
    )
}