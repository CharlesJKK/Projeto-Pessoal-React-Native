import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../AddHumorEstilo';
import  Icon  from 'react-native-vector-icons/Entypo';

function Descanso({click}){
    return(
        <View style={[styles.fundoAtividade, click ? styles.fundoAtividadeAtivado : null]}>
            <Icon name='moon' size={30} style={[styles.corIcon, click ? {color: '#FFFFFF'} : null]}></Icon>
            <Text style={styles.textoicon}>descanso</Text>
        </View>
    )
}

function Encontro({click}){
    return(
        <View style={[styles.fundoAtividade, click ? styles.fundoAtividadeAtivado : null]}>
            <Icon name='heart' size={30} style={[styles.corIcon, click ? {color: '#FFFFFF'} : null]}></Icon>
            <Text style={styles.textoicon}>encontro</Text>
        </View>
    )
}

function FilmeseS({click}){
    return(
        <View style={[styles.fundoAtividade, click ? styles.fundoAtividadeAtivado : null]}>
            <Icon name='laptop' size={30} style={[styles.corIcon, click ? {color: '#FFFFFF'} : null]}></Icon>
            <Text style={styles.textoicon}>filmes e séries</Text>
        </View>
    )
}

function Compras({click}){
    return(
        <View style={[styles.fundoAtividade, click ? styles.fundoAtividadeAtivado : null]}>
            <Icon name='shopping-cart' size={30} style={[styles.corIcon, click ? {color: '#FFFFFF'} : null]}></Icon>
            <Text style={styles.textoicon}>compras</Text>
        </View>
    )
}

function BoaRefeicao({click}){
    return(
        <View style={[styles.fundoAtividade, click ? styles.fundoAtividadeAtivado : null]}>
            <Icon name='app-store' size={30} style={[styles.corIcon, click ? {color: '#FFFFFF'} : null]}></Icon>
            <Text style={styles.textoicon}>boa refeição</Text>
        </View>
    )
}

function Festa({click}){
    return(
        <View style={[styles.fundoAtividade, click ? styles.fundoAtividadeAtivado : null]}>
            <Icon name='drink' size={30} style={[styles.corIcon, click ? {color: '#FFFFFF'} : null]}></Icon>
            <Text style={styles.textoicon}>festa</Text>
        </View>
    )
}

function Esporte({click}){
    return(
        <View style={[styles.fundoAtividade, click ? styles.fundoAtividadeAtivado : null]}>
            <Icon name='dribbble' size={30} style={[styles.corIcon, click ? {color: '#FFFFFF'} : null]}></Icon>
            <Text style={styles.textoicon}>esporte</Text>
        </View>
    )
}

function Cozinhar({click}){
    return(
        <View style={[styles.fundoAtividade, click ? styles.fundoAtividadeAtivado : null]}>
            <Icon name='bowl' size={30} style={[styles.corIcon, click ? {color: '#FFFFFF'} : null]}></Icon>
            <Text style={styles.textoicon}>cozinhar</Text>
        </View>
    )
}

function Jogos({click}){
    return(
        <View style={[styles.fundoAtividade, click ? styles.fundoAtividadeAtivado : null]}>
            <Icon name='game-controller' size={30} style={[styles.corIcon, click ? {color: '#FFFFFF'} : null]}></Icon>
            <Text style={styles.textoicon}>jogos</Text>
        </View>
    )
}

export default function MudancaFundoAtividades(){
    const [id, setId] = useState(0);
    const [array, setArray] = useState([]);
    
    const clicado = (id, key) => {
        setId(key);
        if (key === id) {
            setId(0)
        }
        if(array.includes(key)) {
            array.splice(array.indexOf(key), 1)
        }else if(array.length < 3){
            setId(key);
            array.push(key)
        }
    }
        return(
            <View style={styles.conteinerAcao}>
                <View style={styles.conteinericonCima}>
                    <TouchableOpacity style={styles.iconEsquerda} onPress={() => clicado(id, 1)}>
                        <Descanso click={array.includes(1)} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconMeio} onPress={() => clicado(id, 2)}>
                        <Encontro click={array.includes(2)} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconDireita} onPress={() => clicado(id, 3)}>
                        <FilmeseS click={array.includes(3)} />
                    </TouchableOpacity>
                </View>
                <View style={styles.conteinericonMeio}>
                    <TouchableOpacity style={styles.iconEsquerda} onPress={() => clicado(id, 4)}>
                        <Compras click={array.includes(4)} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconMeio} onPress={() => clicado(id, 5)}>
                        <BoaRefeicao click={array.includes(5)} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconDireita} onPress={() => clicado(id, 6)}>
                        <Festa click={array.includes(6)} />
                    </TouchableOpacity>
                </View>
                <View style={styles.conteinericonBaixo}>
                    <TouchableOpacity style={styles.iconEsquerda} onPress={() => clicado(id, 7)}>
                        <Esporte click={array.includes(7)} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconMeio} onPress={() => clicado(id, 8)}>
                        <Cozinhar click={array.includes(8)} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconDireita} onPress={() => clicado(id, 9)}>
                        <Jogos click={array.includes(9)} />
                    </TouchableOpacity>
                </View>
            </View>
        )
}