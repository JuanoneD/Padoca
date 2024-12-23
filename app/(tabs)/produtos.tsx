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

import AsyncStorage from "@react-native-async-storage/async-storage";

interface  Products{
  name:String,
  price:number,
  link:String,
  qtd:number
}


interface User{
  name:String;
  email:String;
  password:String;
  adress:String;
  products:{name:String,price:number,qtd:number}[]
};




export default function TabTwoScreen() {

  const [data,setData]= React.useState<Products[]>([])

  const onPress = async(name:String,price:number,index:number) => {
    var item = await AsyncStorage.getItem("users");
    var idOp = await AsyncStorage.getItem("userId");

    var productItem = await AsyncStorage.getItem("products");
    var products:Products[] = productItem==null?[]:JSON.parse(productItem);

    products[index].qtd-=1

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
          user[id].products[index].price=Number(price)+Number(user[id].products[index].price);
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
      AsyncStorage.setItem("products",JSON.stringify(products))
      loadProduct()
    }
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
      <ScrollView contentContainerStyle={styles.tela}>
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
            {data?.map((product:Products,index)=>{
              if(product.qtd<=0){
                return(<></>)
              }
                return(
                  <View style={styles.card}>
                    <Image source={{uri:product.link}} style={styles.imagens} />
                    <View style={styles.hori}>
                      <Text>{product.name}</Text>
                      <Text>{product.price}</Text>
                    </View>
                    <TouchableOpacity style={styles.but} onPress={()=>{onPress(product.name,product.price,index)}}>
                      <Text style={styles.white}>Adicionar</Text>
                    </TouchableOpacity>
                  </View>
                )
              })
            }
          </View>
        </View>
      </ScrollView>
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
    backgroundColor: "#502410",
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
