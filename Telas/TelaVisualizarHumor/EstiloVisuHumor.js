import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  conteiner:{

        flex: 1,
        backgroundColor: '#F1F1F1',
        justifyContent: 'center',
        alignItems: 'center'

  }, voltar:{

        position:'absolute',
        top:25,
        left: 25,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C6CEFF',
        borderRadius: 9,
        padding: 15

  }, caixa:{

        backgroundColor: 'white',
        borderRadius: 26,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000000',
        width: 350,
        height: 160,
        position: 'absolute',
        top: 270

  }, conteinerEmojis:{

        backgroundColor: '#304FFE',
        position: 'absolute',
        alignSelf: 'center',
        flexDirection: 'row',

  }, emojisUm:{
        
        backgroundColor: '#304FFE',
        left: 40,
        padding: 15,
        color: 'white',
        position: 'absolute',
        borderRadius: 50

  }, emojisDois:{
        
        backgroundColor: '#304FFE',
        padding: 15,
        color: 'white',
        position: 'absolute',
        borderRadius: 50


}, emojisTres:{

    backgroundColor: '#304FFE',
    right: 40,
    padding: 15,
    color: 'white',
    position: 'absolute',
    borderRadius: 50

}, textoEmojisUm:{

        position: 'absolute',
        bottom: 40,
        flexDirection: 'row',
        left: 47,
        fontWeight:'bold',
        color: 'black',
        bottom: 35

  }, textoEmojisDois:{

        position: 'absolute',
        bottom: 40,
        flexDirection: 'row',
        fontWeight:'bold',
        color: 'black',
        bottom: 35

}, textoEmojisTres:{

        position: 'absolute',
        bottom: 40,
        flexDirection: 'row',
        right: 38,
        fontWeight:'bold',
        color: 'black',
        bottom: 35

}, imagemConteiner:{

        position: 'absolute',
        top: 150,
        justifyContent: 'center',
        alignItems: 'center'

  }, imagemH:{

        padding: 38

  }, textoHumor:{

        position: 'absolute',
        fontWeight: 'bold',
        fontSize: 18,
        bottom: -30

  }, diaehoraConteiner:{

        position: 'absolute',
        padding: 30,
        top: 40,
        flexDirection: 'column',

  }, alinhamentoConteiner:{

        flexDirection: 'row',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'

  }, textoDia:{

        color: '#969696',
        bottom: 1,
        left: 8

  }, textoCX:{

        position: 'absolute',
        backgroundColor: 'white',
        width: 350,
        height: 100,
        bottom: 120,
        borderRadius: 26,
        elevation: 5,
        shadowColor: '#000000',

  },conteinerTexto:{

        width: 320,
        height: 20,
        position: 'relative',
        left: 10,
        top: 15

  }, textoC:{

        color: 'black',
        position: 'absolute'
  }

})

export default styles