import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteinerScroll:{
        backgroundColor: '#FFFFFF',
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
    }, conteinerFundo:{
        width: 428,
        height: 1109,
    }, conteinerPergunta:{
        width: 218,
        height: 45,
        top: 123,
        position:'absolute',
        left: 85,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }, textoPergunta:{
        position: 'absolute',
        color: 'black',
        fontSize: 28,
        fontWeight: 'bold'
    }, conteinerDataeHora:{
        width: 236,
        height: 24,
        top: 180,
        position: 'absolute',
        left: 76,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }, textoDH:{
        color: '#969696',
        fontSize: 14,
        left: 4,
        bottom: 4
    }, alinhamentoData:{
        flexDirection: 'row',
        position: 'absolute',
        left: 1
    }, alinhamentoHora:{
        flexDirection: 'row',
        position: 'absolute',
        right: 5
    }, conteinerHumores:{
        position: 'absolute',
        width: 300,
        height: 71,
        top: 269,
        left: 46,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }, humores:{
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }, opacidadeHumor:{
        backgroundColor: '#304FFE',
        borderColor: '#304FFE',
        borderRadius: 50
    }, textoHumor:{
        color: '#969696',
        position: 'absolute',
        fontSize: 11,
        fontWeight: 'bold',
        bottom: -16
    }, conteinerAcao:{
        width: 345,
        height: 481,
        position: 'absolute',
        flexDirection: 'row',
        top: 390,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        left: 24,
        alignItems: 'center',
        justifyContent: 'center'
    }, conteinericonCima:{
        width: 324.44,
        height: 95.92,
        position: 'absolute',
        justifyContent:'center',
        alignItems: 'center',
        top: 50,
    }, conteinericonMeio:{
        width: 324.44,
        height: 95.92,
        position: 'absolute',
        justifyContent:'center',
        alignItems: 'center',
        top: 180
    }, conteinericonBaixo:{
        width: 324.44,
        height: 95.92,
        position: 'absolute',
        justifyContent:'center',
        alignItems: 'center',
        bottom: 80
    }, fundoAtividade:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }, fundoAtividadeAtivado:{
        backgroundColor: '#304FFE',
        borderRadius: 50
    }, iconEsquerda:{
        borderColor: 'black',
        borderWidth: 1,
        position: 'absolute',
        borderRadius: 50,
        left: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }, iconMeio:{
        borderColor: 'black',
        borderWidth: 1,
        position: 'absolute',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }, iconDireita:{
        borderColor: 'black',
        borderWidth: 1,
        position: 'absolute',
        borderRadius: 50,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }, corIcon:{
        color: 'black'
    }, textoicon:{
        position: 'absolute',
        fontWeight: 'bold',
        fontSize: 12,
        color: 'black',
        bottom: -32
    }, conteinerTexto:{
        width: 345,
        height: 89,
        top: 893, 
        borderRadius: 20,
        position: 'absolute',
        borderWidth: 1,
        left: 24,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }, botaoSalvar:{
        width: 345,
        height: 52,
        borderRadius: 6,
        position: 'absolute',
        backgroundColor: '#304FFE',
        top: 1004,
        left: 24,
        justifyContent: 'center',
        alignItems: 'center'
    }, textoSalvar:{
        fontWeight: 'bold',
        color: 'white'
    }
})

export default styles