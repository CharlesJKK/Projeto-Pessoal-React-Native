import React from 'react';
import {View, Text } from 'react-native';
import  Icon  from 'react-native-vector-icons/Entypo';
import styles from '../EstiloVisuHumor'
import { icones } from '../../TelaHumores/dados';

export default function AtividadesVisuH(props) {

    function parandoElipses(index, array) {
        //Se for a última atividade ele não mostra o elipse na frente dela
        return index < array.length - 1? 'flex' : 'none' 
    }

    const { activity } = props;
    return (

        <View style={styles.caixa}>
            {activity.map((item) => {
                return (
                    <View key={item.id}>
                        <View style={styles.iconesConteiner}>
                        <Icon style={styles.emojisUm} name={icones[item.name].icone} size={20}></Icon>
                        <Text style={styles.textoEmojisUm}> {icones[item.name].name}</Text>
                        </View>
                    </View>
                );
            })}

        </View>
    );
}