import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
      conteiner : {     
            backgroundColor: '#304FFE',
            height: '100%',
            alignItems: 'center',
      },logo:{    
            width: 250,
            height:250,
            top:90
      }, botao:{   
            marginTop:30,
            width: 300,
            backgroundColor: '#F6F6F6',
            fontSize:18,
            borderRadius: 10,
            elevation: 5,
            shadowColor: '#000000',
            top: 120
      }, conteinerEntrar:{
            backgroundColor: '#C6CEFF',
            width: 133,
            height: 46,
            top:180,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 5,
            shadowColor: '#000000',
    },  entrar: {
            color:'#304FFE',
            width: 56,
            height: 17,
            fontWeight: 'bold', 
            fontSize: 14,       
    }  
});

export default styles