import React from 'react';
import {View, Text } from 'react-native';
import  Icon  from 'react-native-vector-icons/Entypo';
import styles from '../EstiloTHS';
import { icones } from '../dados';

export default function Atividades(props) {

    function parandoElipses(index, array) {
        //Se for a última atividade ele não mostra o elipse na frente dela
        return index < array.length - 1? 'flex' : 'none' 
    }

    const { activity } = props;
    return (

        <View style={styles.iconesConteiner}>
            {activity.map((item) => {
                return (
                    <View key={item.id}>
                        <Icon style={styles.icone} name={icones[item.name].icone} size={20}>
                        <Text style={styles.textoIcone}> {icones[item.name].name} •</Text>
                         </Icon>
                    </View>
                );
            })}

        </View>
    );
}