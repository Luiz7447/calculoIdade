import React, {useState} from "react";

import  {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home (){

    let [valor1, setValor1] = useState();
    let [valor2, setValor2] = useState();
    let [resultado, setResultado] = useState();

    function ConverterDolar(){

let resultado = parseFloat(valor2) - parseFloat(valor1);
setResultado(resultado);

alert("O ano que nasceu " + resultado);

    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>CALCULADOR DE IDADE</Text>

            <Text style={styles.subtitulo}></Text>

            <TextInput onChangeText={setValor1} style={styles.campo} placeholder="Digite o ano que nasceu"/>
            <TextInput onChangeText={setValor2} style={styles.campo} placeholder="Digite o ano que estamos"/>

            <TouchableOpacity style={styles.botao} onPress={ConverterDolar}>
                <Text style={styles.botaoTexto}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFE4B5',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo:{
        fontSize:26,
        color:'#000',
        fontWeight:'bold',
        marginBottom:40,
        alignContent: 'center'
    },

    subtitulo:{
        fontSize:20,
        color:'#000',
        fontWeight:'bold',
        marginBottom:20
    },

    campo:{
        backgroundColor: '#F8F8FF',
        fontSize:18,
        padding:8,
        marginTop:10,
        width:300,
        borderRadius:10
    },

    botao:{
        backgroundColor:'#FFDAB9',
        alignItems: "center",
        padding:15,
        borderRadius:7,
        marginTop:20,
        width:250
    },

    botaoTexto:{
        color: '#000',
        fontSize:17,
        fontWeight: "700",
    }
});
