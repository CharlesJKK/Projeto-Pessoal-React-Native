import React from 'react';
import {TouchableOpacity, Text, View, Image } from 'react-native';
import { formatoData} from '../../Opções/componentesEditPerfil/formatoData'
import styles from '../EstiloTHS';
import Atividades from './Icones';

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
    radiant: require('../../scr/assets/morideri.png'),
    happy: require('../../scr/assets/bem.png'),
    ok: require('../../scr/assets/reacao.png'),
    sad: require('../../scr/assets/triste.png'),
    terrible: require('../../scr/assets/mal.png')
}

export default Item = ({date, humor, activity, about, onPress}) =>{
    const nomeMes = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "outubro", "novembro", "dezembro");
    const dataCriado = formatoData(date);
    const mesNome = nomeMes[dataCriado.mes1]


    return(
        <View style={styles.fundo}>
        <TouchableOpacity style={styles.caixa} onPress={onPress}>
            <View style={styles.imagemConteiner}>
                <Image source={humorsFT[humor]} style={styles.imagem}/>
            </View>
           <View style={styles.dataConteiner}>
                <Text style={styles.data}>{dataCriado.dia} de {mesNome}</Text>
            </View>
            <View style={styles.humorConteiner}>
                <Text style={[styles.humor, {color: cores[humor]}]}>{humors[humor]}</Text>
                <View style={styles.horaConteiner}>
                    <Text style={styles.hora}>{dataCriado.hora}:{dataCriado.minuto}</Text>
                </View>
            </View>
            <Atividades
                activity={activity}
            />
            <View style={styles.textocaixaConteiner}>
                <Text numberOfLines={1} style={styles.textocaixa}>{about}</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}
