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

const logo = require("../../assets/images/beta.png");
const pao = require("../../assets/images/pao.jpg");
const quejo = require("../../assets/images/paoqueijo.jpg");
const sonho = require("../../assets/images/sonho.jpg");
const fuba = require("../../assets/images/fuba.png");
const kit = require("../../assets/images/kitkat.jpg");
const cafe = require("../../assets/images/cafe.jpg");

interface  Products{
  name:String,
  price:number,
  image:String
}


interface User{
  name:String;
  email:String;
  password:String;
  adress:String;
  products:{name:String,price:number,qtd:number}[]
};


export default function TabTwoScreen() {

  const onPress = async(name:String,price:number) => {
    var item = await AsyncStorage.getItem("users");
    var idOp = await AsyncStorage.getItem("userId");

    if(item ==null || idOp===null){
      router.push("/")
      return;
    }


    var id = Number(idOp)
    var user:User[] = item==null?[]:JSON.parse(item);
    try {
      console.log(user[id].products)

      var find = false;

      user[id].products.map((prod,index)=>{
        if(prod.name===name){
          find = true
          user[id].products[index].qtd +=1;
          user[id].products[index].price+=price;
        }
      })
      if(!find){
        user[id].products.push({name,price,qtd:1})
      }
      
    } catch (error) {
      console.log(error)
      user[id].products = [{name,price,qtd:1}]
    }finally{
      // user[id].products = [{name,price,qtd:1}]
      AsyncStorage.setItem("users",JSON.stringify(user))
    }
  }


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
            {json.map((product:Products)=>{
                return(
                  <View style={styles.card}>
                    <Image source={{uri:product.image}} style={styles.imagens} />
                    <View style={styles.hori}>
                      <Text>{product.name}</Text>
                      <Text>{product.price}</Text>
                    </View>
                    <TouchableOpacity style={styles.but} onPress={()=>{onPress(product.name,product.price)}}>
                      <Text style={styles.white}>Adicionar</Text>
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
    backgroundColor: "#DADADAFF",
    padding: 7,
    borderRadius: 10,
  },
  butao: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  tela: {
    padding: 5,
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
});
