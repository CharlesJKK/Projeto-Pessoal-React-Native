import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    fundo:{
        flex:1,
        backgroundColor: '#F1F1F1',
    }, caixa:{
        padding: 100,
        backgroundColor: 'white',
        borderRadius: 26,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000000'
    }, imagemConteiner:{
        position: 'absolute',
        padding: 20,
        left: 15,
        top: 5,
        flexDirection: 'row'
    }, imagem:{
        padding: 30
    }, dataConteiner:{
        position: 'absolute',
        padding: 10
    }, data:{
        color: '#ACACAC',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 200,
        height: 20,
        top: -60,
        left: 30,
        fontSize: 16,
        textTransform: "uppercase"
    }, humorConteiner:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        position: 'absolute',
        left: 106,
        top: 55,
        flexDirection: 'row'
    }, humor:{
        fontWeight: 'bold',
        fontSize: 18,
        color: 'red'
    }, horaConteiner:{
        position: 'absolute',
        right: -40,
        top: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }, hora:{
        color: '#ACACAC',
    }, iconesConteiner:{
        position: 'absolute',
        flexDirection: 'row',
        width: 180,
        height: 30,
        left: 20,
        justifyContent: 'space-between',
        top: 105
    }, icone:{
        color: 'black',
    }, textoIcone:{
        fontSize: 14,
        fontWeight: '600'
    }, textocaixaConteiner:{
        width: 235,
        height: 20,
        position: 'absolute',
        left: 30,
        top: 150
    }, textocaixa:{
        color: '#ACACAC'
    }, ladinho:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        position:'absolute',
        width: 220,
        height: 50,

    }
})

export default styles