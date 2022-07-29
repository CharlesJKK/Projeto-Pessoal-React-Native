import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import api from "../../scr/services/Api";
import { Alert } from "react-native";
import  Icon  from 'react-native-vector-icons/Entypo';



export default function AlterarFT({ visible, photo, photoId }){
    const [chooseFT, setChooseFT] = useState()
    const [isLoad, setIsLoad] = useState(true)


    const getFotos = async () => {

        await api.get("/photos")
            .then((res) => setChooseFT(res?.data))
            .catch(err => console.log('erro no get da fotos '))
            .finally(() => setIsLoad(false))
    }

    useEffect(() => {
        getFotos()
    }, [])

    const [id, setId] = useState(photo);

    const clicado = (id, key) => {
        setId(key);
    if (key === id) {
        setId(0)
    }
}

const putPhoto = async () => {
    await api.put('/user', {
        "user": {
            "photo_id": id || photoId
        }
    }).then(visible)
    .catch(err => console.log('deu erro ' + err))
}

    return(
        <View style={styles.conteinerModal}>
            <TouchableOpacity style={styles.xBotao}
                onPress={visible}>
                <Icon name='cross' color={'#304FFE'} size={25}/>
            </TouchableOpacity>
            <Text style={styles.textoModal}>Selecione a foto de perfil</Text>
            <View style={styles.conteinerCima}>
                {chooseFT?.slice(0, 3).map(fotoESC => {
                    return (
                        <TouchableOpacity key={fotoESC.id} onPress={() => clicado(id, fotoESC.id)}>
                            <View style={[styles.conteinerFoto, id === fotoESC.id ? styles.FotoAtivada : null]}>
                                <Image style={styles.foto} source={{ uri: `${api.defaults.baseURL}${fotoESC.url}` }}/>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>
            <View style={styles.conteinerBaixo}>
                {chooseFT?.slice(3, 6).map(fotoESC => {
                return (
                    <TouchableOpacity key={fotoESC.id} onPress={() => clicado(id, fotoESC.id)}>
                        <View style={[styles.conteinerFoto, id === fotoESC.id ? styles.FotoAtivada : null]}>
                            <Image style={styles.foto} source={{ uri: `${api.defaults.baseURL}${fotoESC.url}` }}/>
                        </View>
                    </TouchableOpacity>
                    );
                })}
            </View>
                <TouchableOpacity style={styles.confirmarModal} onPress={() => putPhoto()}>
                    <Text style={[{color: 'white', fontWeight: '900', fontSize: 15 }]}>CONFIRMAR</Text>
                </TouchableOpacity>
        </View>
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
        borderRadius: 60
    }, conteinerCima: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 213,
        right: 50,
        width: 380
    }, conteinerBaixo:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 334,
        right: 50,
        width: 380
    }, conteinerModal:{
        width: 428,
        height: 926,
        backgroundColor: 'white',
        position: 'relative'
    }, textoModal:{
        position: 'absolute',
        top: 131,
        color: 'black',
        left: 58,
        fontWeight: '700',
        fontSize: 24
    }, confirmarModal:{
        width: 322,
        height: 52,
        left: 32,
        top: 623,
        backgroundColor: '#304FFE',
        borderRadius: 6,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    }, xBotao:{
        position:'absolute',
        width: 36,
        height: 36,
        top: 32,
        paddin: 8,
        borderRadius: 10,
        backgroundColor: '#C6CEFF',
        justifyContent: 'center',
        alignItems: 'center',
        left: 33
    }, foto:{
        width: 100,
        height: 100
    }
    
})