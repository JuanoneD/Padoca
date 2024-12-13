import { Link, router } from "expo-router";
import React from "react";
import { View, Text,BackHandler } from "react-native"
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User{
    name:String;
    email:String;
    password:String;
    adress:String
};


export default function Login() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [adress, setAdresss] = React.useState('');
    const [error,setError] = React.useState(false);

    const onPress = async() => {
        var item = await AsyncStorage.getItem("users");
        var user:User[] = item==null?[]:JSON.parse(item);
        user.push({name,email,password,adress})
        await AsyncStorage.setItem("users",JSON.stringify(user));
        router.push("/")
    };

    return (
        <>
            <SafeAreaView style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                <View style={{display:"flex",justifyContent:"flex-start",width:"300px"}}>
                    <TouchableOpacity onPress={()=>{router.back()}}><Text>◀</Text></TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <Text style={{fontFamily:"Inter",fontSize:"40px"}}>Registro</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setName}
                        value={name}
                        placeholder="Digite seu nome"
                    />                    
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Digite seu email"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Senha"
                        secureTextEntry={true}
                    />
                    <TextInput
                    style={styles.input}
                    onChangeText={setAdresss}
                    value={adress}
                    placeholder="Digite seu endereço"
                    />
                    <TextInput
                    style={styles.input}
                    // onChangeText={}
                    // value={}
                    placeholder="Digite seu número"
                    keyboardType="numeric"
                    />
                    {error&&<Text style={{marginBottom:10}}>Email ou senha invalido!!</Text>}
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={styles.white}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    box:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:"80%"
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 12,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width:'120px'
    },
    white:{
        color:"white"
    }
})