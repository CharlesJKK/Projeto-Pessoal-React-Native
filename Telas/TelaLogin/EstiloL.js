import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
      conteiner : {     
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#304FFE' 
      },logo:{    
            width: 250,
            height:250,
            top:-80,
      }, botao:{   
            marginTop:30,
            width: 300,
            backgroundColor: '#F6F6F6',
            fontSize:18,
            borderRadius: 10,
            elevation: 5,
            shadowColor: '#000000'
      }, botao2:{
            backgroundColor: '#C6CEFF',
            width: 133,
            height: 46,
            top:70,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 5,
            shadowColor: '#000000'
    },  entrar: {
            color:'#304FFE',
            width: 56,
            height: 17,
            fontWeight: 'bold', 
            fontSize: 14         
    }  
});

export default styles