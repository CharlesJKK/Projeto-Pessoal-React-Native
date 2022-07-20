import { StyleSheet } from "react-native";

const styles1 = StyleSheet.create({
    barrinha:{
        backgroundColor: '#FFFFFF',
        width: 428,
        height: 70,
        top: 2
      }, barrinha2:{
          backgroundColor:'#C4C4C4',
          width: 428,
          height:3,
          top: -70
      }, botaomenu:{
        backgroundColor:'#304FFE' ,
        width: 48,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        left: 40,
        position: 'absolute',
        top: 16,
    }, botaoadd:{
        color:'#304FFE',
        borderRadius: 100,
        position: 'absolute',
        top: 12,
        left: 170
    },opcoes:{
        backgroundColor:'#C6CEFF',
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 40,
        display: 'flex',
        right:40,
        borderRadius: 12,
        position: 'absolute',
        top: 16
    }
})
    
export default styles1