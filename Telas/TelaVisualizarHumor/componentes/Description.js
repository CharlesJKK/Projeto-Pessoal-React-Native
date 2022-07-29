import React, {useState, useEffect } from 'react';
import {View, Text } from 'react-native';
import styles from '../EstiloVisuHumor'
import api from '../../scr/services/Api';

export default function Descript(props){

    const [ description, setDescription ] = useState()
    const { id } = props;

    const getDailyEntry = async () => {
        await api
            .get(`/daily_entries/${id}`).then((res) => {
                setDescription(res?.data?.description);
            }).catch(err => console.log('deu erro ' + err))
    }

    useEffect(() => {
        getDailyEntry()
    }, [])

    return(
        <View style={styles.textoCX}>
            <View style={styles.conteinerTexto}>
                <Text style={styles.textoC}>{description}</Text>
            </View>
        </View>
    )
}