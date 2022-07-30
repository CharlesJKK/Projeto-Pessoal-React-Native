import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Modal, Pressable} from "react-native";
import Menu from "../BarrinhaMenus/barraMenu";
import AlterarFT from "./componentesEditPerfil/EscolherIMG";
import  Icon  from 'react-native-vector-icons/Entypo';
import api from "../scr/services/Api";

export default function EditarPerfil({route, navigation}){
    const [modalActive, setModalActive] = useState(false);
    const [modalActiveGenero, setModalActiveGenero] = useState(false);
    const { name, email, gender, birthdate, photo, photoId} = route.params;
    const [selectionGender, setSelectionGender] = useState(gender);


      const genes = {
        male: 'Masculino',
        female: 'Feminino',
        other: 'Outro'
    }

    const putGender = async () => {
        await api.put('/user', {
            "user": {
                "gender": selectionGender,
            }
        }).catch(err => console.log('deu erro ' + err))
    }

    return(
        <KeyboardAvoidingView       
        behavior='position'
        style={styles.conteinerFundo}
        keyboardVerticalOffset={28}>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalActive}
                onRequestClose={() => setModalActive(!modalActive)}>
            <AlterarFT photoId={photoId} visible={() => setModalActive(!modalActive)}/>
            </Modal>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalActiveGenero}
                onRequestClose={() => setModalActiveGenero(!modalActiveGenero)}>
                    
                <View>
                    <View style={[styles.caixinhaGeneros, {top: 482}]}>
                        <TouchableOpacity style={{position:'absolute'}} onPress={() => { setSelectionGender('male'); setModalActiveGenero(!modalActiveGenero)}}>
                            <Text style={{color:'black', top: 9, left: 15}}>Masculino</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.caixinhaGeneros, {top: 522}]}>
                    <TouchableOpacity style={{position:'absolute'}} onPress={() => { setSelectionGender('female'); setModalActiveGenero(!modalActiveGenero)}}>
                            <Text style={{color:'black', top: 10, left: 15}}>Feminino</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.caixinhaGeneros, {top: 560}]}>
                    <TouchableOpacity style={{position:'absolute'}} onPress={() => { setSelectionGender('other'); setModalActiveGenero(!modalActiveGenero)}}>
                            <Text style={{color:'black', top: 10, left: 15}}>Outro</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.conteinerFoto}>
                <Image source={{uri: photo}} style={styles.foto}/>
            </View>
            <View style={[styles.conteinersTexto, {top: 326}]}>
                <Text style={styles.textosInfo}>NOME</Text>
                <TextInput
                    defaultValue={name}
                    placeholderTextColor="#969696"
                    placeholder="NOME"
                    color= '#000000'
                    style={[{left: 10}]}
                />
            </View>
            <View style={[styles.conteinersTexto, {top: 404}]}>
                <Text style={styles.textosInfo}>E-MAIL</Text>
                <TextInput
                    defaultValue={email}
                    placeholderTextColor="#969696"
                    placeholder="E-MAIL"
                    color= '#000000'
                    style={[{left: 10}]}
                />
            </View>
            <View style={[styles.conteinersTexto, {top: 482}]}>
                <Text style={styles.textosInfo}>GÊNERO</Text>
                <Text style={{color: 'black', position: 'absolute', bottom: 15, left: 15}}>{genes[selectionGender]}</Text>
                <TouchableOpacity onPress={() => setModalActiveGenero(true)}>
                    <Icon name="chevron-down" style={{color: 'black', left: 270 }} size={40}></Icon>
                </TouchableOpacity>
            </View>
            <View style={[styles.conteinersTexto, {top: 560}]}>
                <Text style={styles.textosInfo}>DATA DE NASCIMENTO</Text>
                <TextInput                  
                    defaultValue={birthdate}  
                    placeholderTextColor="#969696"
                    placeholder="DD/MM/AAAA"
                    color= '#000000'
                    style={[{left: 10}]}
                />
            </View>
            <TouchableOpacity style={styles.BotaoAltFoto} onPress={() => setModalActive(true)}>
                <View style={styles.bordinha}></View>
                    <Text style={[{color: '#304FFE', fontWeight: '900', fontSize: 15}]}>ALTERAR FOTO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BSalvar} onPress={() => putGender()}>
                <Text style={[{color: 'white', fontWeight: 'bold',}]}>SALVAR</Text>
            </TouchableOpacity>
        <View style={styles.menu}>
            <Menu/>
        </View>
        </KeyboardAvoidingView>
    )
}       

const styles = StyleSheet.create({
    conteinerFundo:{
        flex: 1,
        position: 'relative', 
        backgroundColor: '#F1F1F1'
    }, menu:{
        position: 'relative',
        top: 701
    }, BSalvar:{
        width: 322,
        height: 52,
        top: 630,
        left: 35,
        backgroundColor: '#304FFE',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    }, conteinerFoto:{
        position: 'absolute',
        width: 128,
        height: 129,
        top: 60,
        left: 130,
        justifyContent: 'center',
        alignItems: 'center'
    }, conteinersTexto:{
        width: 322,
        height: 45,
        position: 'absolute',
        left: 35,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#FFFFFF'
    }, BotaoAltFoto:{
        width: 178,
        height: 44,
        top: 231,
        left: 108,
        position: 'absolute',
        backgroundColor: '#C6CEFF',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    }, bordinha:{
        borderWidth: 2, 
        borderColor: '#304FFE', 
        position: 'absolute', 
        width: 182, 
        height: 44,
        borderRadius: 6,
        opacity: 0.4
    }, textosInfo:{
        position: 'absolute',
        color: 'black',
        fontWeight: '900',
        top: -28
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
        width: 128,
        height: 129
    }, caixinhaGeneros:{
        width: 322,
        height: 45,
        position: 'absolute',
        left: 35,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#FFFFFF'
    }
    
})