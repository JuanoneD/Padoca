import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
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

const lixo = require("../../assets/images/lixo.png");

interface  Products{
  name:String,
  price:number,
  link:String
}


interface User{
  name:String;
  email:String;
  password:String;
  adress:String;
  products:{name:String,price:number,qtd:number}[]
};


export default function TabTwoScreen() {
  const [data, setData] = React.useState<Products[]>([])

  const onPress = async(index:number) => {
    var item = await AsyncStorage.getItem("products");
    var products:Products[] = item==null?[]:JSON.parse(item);
    products = products.filter((prod,ind)=>ind!==index)
    
    await AsyncStorage.setItem("products",JSON.stringify(products))
    await loadProduct()
  }

  const loadProduct = async()=>{
      var item = await AsyncStorage.getItem("products");
      var products:Products[] = item==null?[]:JSON.parse(item);
      setData(products)
  }

  useEffect(()=>{
      loadProduct();
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
        <View style={styles.resto}>
          <Text style={styles.titulo}>Produtos</Text>
          <View style={styles.best}>
            {data.map((product:Products,index)=>{
                return(
                  <View style={styles.card}>
                    <Image source={{uri:product.link}} style={styles.imagens} />
                    <View style={styles.hori}>
                      <Text>{product.name}</Text>
                      <Text>{product.price}</Text>
                    </View>
                    <TouchableOpacity style={styles.centrol} onPress={()=>{onPress(index)}}>
                      <Image source={lixo} style={styles.imagen} />
                    </TouchableOpacity>
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
  centrol: {
    alignItems: "center"
  },
  hori: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  but: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "black",
    padding: 5,
    marginTop: 5,
  },
  card: {
    backgroundColor: "#f3de9f",
    padding: 7,
    borderRadius: 10,
  },
  butao: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  tela: {
    flex: 1,
    padding: 5,
    backgroundColor: "#e6bd6e",
  },
  resto: {
    gap: 15,
    padding: 13,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  best: {
    gap: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#502410",
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

  imagen: {
    width: 25,
    height: 25,
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
