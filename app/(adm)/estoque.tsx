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
    link:string,
    qtd:number
}

export default function TabTwoScreen() {

    const [data, setData] = React.useState<Products[]>([])

    const [on, setOn] = useState(Boolean)
    const [qtd, setQtd] = useState(Number)

    const plus = async (index:number) => {
        let products:Products[] = data;
        products[index].qtd+=1;

        await AsyncStorage.setItem("products",JSON.stringify(products));
        loadProduct()
    }

    const less = async (index:number) => {
        let products:Products[] = data;
        products[index].qtd-=1;

        await AsyncStorage.setItem("products",JSON.stringify(products));
        loadProduct()
    }


    const loadProduct = async()=>{
        var item = await AsyncStorage.getItem("products");
        var products:Products[] = item==null?[]:JSON.parse(item);
        setData(products)
    }

    useEffect(()=>{
        loadProduct()
    },[])


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
                    <Text style={styles.titulo}>Estoque</Text>

                    <View style={styles.best}>

                        {data.map((product: Products,index) => {
                            return (
                                <View style={styles.card}>
                                    <View style={styles.textContainer}>
                                        <View style={styles.hori}>
                                            <Text style={ product.qtd>0 ? styles.ok : styles.ops}></Text>
                                            <Text style={styles.productName}>{product.name}</Text>
                                        </View>
                                        <Text style={styles.quantity}>X{product.qtd?product.qtd:"0"}</Text>
                                    </View>
                                    <View style={styles.hori}>
                                        <TouchableOpacity onPress={()=>{plus(index)}} style={styles.but}>
                                            <Text style={styles.white}>➕</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=>{less(index)}} style={styles.but}>
                                            <Text style={styles.white}>➖</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })
                        }

                    </View>
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
        backgroundColor: "#ffffd0",
        width: 25,
        height: 25,
        borderColor: "#ecce87",
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
        backgroundColor: "#f3de9f",
        padding: 10,
        borderRadius: 10,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        flex: 8/12, 
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
        color: "#502410",
    },
    butao: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    tela: {
        padding: 5,
        flex: 1,
        backgroundColor: "#e6bd6e",
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
        backgroundColor: "#502410",
        padding: 10,
        borderRadius: 10,
    },
    white: {
        color: "#ffffd0",
    },
    titulo: {
        fontSize: 25,
        textAlign: "center",
        fontFamily: "Inter",
        color: "#502410",
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
});
