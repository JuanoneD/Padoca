import { Link, router } from "expo-router";
import React from "react";
import { View, Text } from "react-native"
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User{
    name:String;
    email:String;
    password:String;
    adress:String
};


export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error,setError] = React.useState(false);




    const onPress = async() => {
        await AsyncStorage.removeItem("users")
        var item = await AsyncStorage.getItem("users");
        var user:User[] = item==null?[]:JSON.parse(item);
        user.map(async (item,index)=>{
            if(item.email === email){
                user[index].password = password
                await AsyncStorage.setItem("users",JSON.stringify(user))
                router.push("/")
            }
        })
        console.log(user)
        setError(true);
    };

    return (
        <>
            <SafeAreaView style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                <View style={{display:"flex",justifyContent:"flex-start",width:"300px"}}>
                    <TouchableOpacity onPress={()=>{router.back()}}><Text>◀</Text></TouchableOpacity>
                </View>
                <View style={styles.box}>
                    <Text style={{fontFamily:"Inter",fontSize:"25px"}}>Recuperação de Senha</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email que deseja trocar a senha!"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Nova senha"
                        secureTextEntry={true}
                    />
                    {error&&<Text style={{marginBottom:10}}>Conta não encontrada!</Text>}
                    <TouchableOpacity style={styles.button} onPress={onPress}>
                        <Text style={styles.white}>Editar senha</Text>
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