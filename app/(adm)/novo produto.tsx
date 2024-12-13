import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TextInput,
    Button,
    ActivityIndicator,
    TouchableOpacity,
} from "react-native";
import { Link, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Inter_900Black } from "@expo-google-fonts/inter";

import json from "@/constants/Products.json";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Products {
    name: string,
    price:Number,
    link:string
}

export default function TabTwoScreen() {

    const [price, setPrice] = React.useState(0)
    const [name, setName] = React.useState("")
    const [link, setLink] = React.useState("")


    const onPress = async() => {
        var item = await AsyncStorage.getItem("products");
        var products:Products[] = item==null?[]:JSON.parse(item);
        console.log(products)
        products.push({name,price,link})
        await AsyncStorage.setItem("products",JSON.stringify(products));
        router.push("/")
    };

    

    return (
        <>
            <View style={styles.tela}>
                <View style={styles.butao}>
                    <TouchableOpacity
                        onPress={() => {
                            router.back();
                        }}
                        style={styles.button}
                    >
                        <Text style={styles.white}>◀</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.best}>
                    <Text style={styles.titulo}>Novo Produto</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do produto"
                        value={name}
                        onChangeText={setName}
                        />
                    <TextInput
                        style={styles.input}
                        placeholder="Valor do produto"
                        value={price}
                        onChangeText={setPrice}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Link da imagem do produto"
                        value={link}
                        onChangeText={setLink}
                    />
                    <TouchableOpacity style={styles.button} onPress={async()=>{await onPress()}}>
                        <Text style={styles.white}>Adicionar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    dist: {
        marginTop: 20,
        gap: 10
    },
    hori: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    but: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
        backgroundColor: "#C0C0C0FF",
        width: 25,
        height: 25,
        borderColor: "#959595FF",
        borderWidth: 2,
    },
    ok: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
        backgroundColor: "#18B512FF",
        width: 25,
        height: 25,
        borderColor: "#14950FFF",
        borderWidth: 2,
    },
    ops: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
        backgroundColor: "#B51212FF",
        width: 25,
        height: 25,
        borderColor: "#950F0FFF",
        borderWidth: 2,
    },
    card: {
        backgroundColor: "#DADADAFF",
        padding: 10,
        borderRadius: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        flex: 8 / 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", // organiza os textos (nome e "X2")
    },
    productName: {
        fontSize: 16,
    },
    quantity: {
        fontSize: 14,
        fontWeight: "bold",
    },
    butao: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    tela: {
        padding: 5,
    },
    resto: {
        gap: 10,
        padding: 13,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    best: {
        gap: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        alignItems: "center",
        backgroundColor: "black",
        padding: 10,
        borderRadius: 10,
    },
    white: {
        color: "white",
    },
    titulo: {
        fontSize: 25,
        textAlign: "center",
        fontFamily: "Inter",
    },
    subtitulo: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Inter",
    },
    image: {
        width: 200,
        height: 150,
    },

    imagens: {
        width: 115,
        height: 90,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,

        borderRadius: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "80%"
    },
});
