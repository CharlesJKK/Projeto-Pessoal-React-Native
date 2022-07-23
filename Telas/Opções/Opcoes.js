import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal, Pressable } from "react-native";
import Menu from "../BarrinhaMenus/barraMenu";
import { useNavigation } from '@react-navigation/native';

function EditarP(){
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.conteinerEditPerfil} 
        onPress={() => navigation.navigate('EditPerfil')}>
            <Text style={[styles.textoBold, {color: 'white'}]}>EDITAR PERFIL</Text>
        </TouchableOpacity>
    )
}

export default function Opcoes(){
    const [modalActive, setModalActive] = useState(false);
        return(
            <>
            <View style={styles.fundo}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalActive}
                    onRequestClose={() => setModalActive(false)}>
                    <View style={styles.estiloModal}>
                        <Text style={styles.Atencaotxt}>Atenção</Text>
                        <Text style={styles.modaltxt}>Deseja mesmo sair?</Text>
                        <Pressable onPress={() => setModalActive(false)} style={[styles.pressionarModal, {left: 199}]}>
                            <Text style={[{color: 'black', fontWeight: '700', fontSize: 18}]}>CANCELAR</Text>
                        </Pressable>
                        <Pressable onPress={() => setModalActive(false)} style={[styles.pressionarModal, {left: 319}]}>
                            <Text style={[{color: 'black', fontWeight: '700', fontSize: 18}]}>SIM</Text>
                        </Pressable>
                    </View>
                </Modal>
                <View style={styles.conteinerFoto}>
                    <Image source={require('../scr/assets/12.png')} style={styles.foto}></Image>
                </View>
                <View style={styles.conteinerNome}>
                    <Text style={styles.textoNome}>Olá, Fulana</Text>
                </View>
                <View style={styles.conteinerInformacoes}>
                    <Text style={[styles.textoBold,{color: 'black'}]}>E-MAIL: <Text style={styles.semibold}>teste@gmail.com</Text> </Text>
                    <Text style={[styles.textoBold,{color: 'black'}]}>GÊNERO: <Text style={styles.semibold}>Masculino</Text> </Text>
                    <Text style={[styles.textoBold,{color: 'black'}]}>DATA DE NASCIMENTO: <Text style={styles.semibold}>15/12/1998</Text> </Text>
                </View>
                <EditarP/>
                <TouchableOpacity style={styles.conteinerSair} onPress={() => setModalActive(true)}>
                    <Text style={[styles.textoBold, {color: 'black'}]}>SAIR</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.menu}>
                <Menu/>
            </View>
            </>
        )  
}

const styles = StyleSheet.create({
    fundo:{
        flex: 1,
        position: 'absolute'
    }, conteinerFoto:{
        position: 'absolute',
        width: 128,
        height: 129,
        top: 128,
        left: 130,
        justifyContent: 'center',
        alignItems: 'center'
    }, conteinerNome:{
        width: 380,
        height: 45,
        top: 304,
        left: 7,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }, textoNome:{
        fontSize: 36,
        color: 'black',
    }, conteinerInformacoes:{
        width: 250,
        height: 79,
        top: 366,
        left: 42,
        position: 'absolute',
        justifyContent: 'space-evenly'
    }, textoBold:{
        fontWeight: 'bold'
    }, semibold:{
        fontFamily: 'SourceSansPro-SemiBold'
    }, conteinerEditPerfil:{
        position:'absolute',
        width: 343,
        height:52,
        top: 464,
        backgroundColor: '#304FFE',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        left: 22
    }, conteinerSair:{
        position:'absolute',
        width: 343,
        height:52,
        top: 523,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        left: 22
    }, menu:{
        position: 'relative',
        top: 700
    },  estiloModal:{
        width: 394,
        height: 200,
        top: 300,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        position: 'relative'
    }, Atencaotxt:{
        color: 'black', 
        fontWeight: '700', 
        fontSize: 24, 
        top: 27, 
        left: 40,
        position:'absolute'
    }, modaltxt:{
        color: '#969696',
        top: 69,
        left: 38,
        fontSize: 20,
        position:'absolute'
    }, pressionarModal:{
        position: 'absolute',
        alignItems: 'center',
        textAlign: 'center',
        top: 147
    }
})