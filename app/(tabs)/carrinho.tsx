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
  ScrollView,
} from "react-native";
import { Link, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Inter_900Black } from "@expo-google-fonts/inter";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TabTwoScreen() {
  
  const [data,setData] = useState<Cart[]>([])
  const [total,setTotal] = useState<Number>(0)
  
  const loadCart = async()=>{
    let item = await AsyncStorage.getItem("users");
    let idOp = await AsyncStorage.getItem("userId");
  
    if(item ==null || idOp===null){
      router.push("/")
      return;
    }
  
    let id = Number(idOp)
    let user:User[] = item==null?[]:JSON.parse(item);
    setData(user[id].products)
  
    let total = 0
    user[id].products?.forEach((item)=>{
      total+=item?.price
    })
    setTotal(total)
  }
  
  const deleteItem = async(idItem:number)=>{
    let item = await AsyncStorage.getItem("users");
    let idOp = await AsyncStorage.getItem("userId");
    
    if(item ==null || idOp===null){
      router.push("/")
      return;
    }

    let id = Number(idOp)
    let user:User[] = item==null?[]:JSON.parse(item);
    
    user[id].products = user[id].products.filter((prod,ind)=>ind!==idItem)
    
    await AsyncStorage.setItem("users",JSON.stringify(user))
    await loadCart()
  }

  const payment = async()=>{
    var item = await AsyncStorage.getItem("users");
    var idOp = await AsyncStorage.getItem("userId");

    if(item ==null || idOp===null){
      router.push("/")
      return;
    }

    var id = Number(idOp)
    var user:User[] = item==null?[]:JSON.parse(item);

    let items = "" 
    user[id].products.forEach((item,index)=>{
      items+=index<1?item.name:", "+item.name;
    })

    try {
      user[id].payment.push({name:items,price:total})

    } catch (error) {

      user[id].payment = [{name:items,price:total}]

    }finally{
      user[id].products = []
      AsyncStorage.setItem("users",JSON.stringify(user))
      loadCart()
    }
  }
  
  useEffect(()=>{
    setInterval(async()=>{await loadCart()},1000)
  },[]);
  
  
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
        <View style={styles.best}>
          <Text style={styles.titulo}>Carrinho</Text>
          <View style={styles.resto}>
            {data?.map((item,index)=>(
              <View style={styles.card}>
                <Text>{item?.name}</Text>
                <Text>X{item?.qtd}</Text>
                <View style={styles.hori}>
                  <Text>{item?.price.toFixed(2)}</Text>
                  <TouchableOpacity style={styles.but} onPress={()=>{deleteItem(index)}}>
                    <Text style={styles.white}>X</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <View style={styles.dist}>
            <Text style={styles.subtitulo}>R$ {total.toFixed(2)}</Text>
            <TouchableOpacity style={styles.button} onPress={()=>{payment()}}>
                  <Text style={styles.white}>Pagar</Text>
            </TouchableOpacity></View>

          </View>
        </View>
      </ScrollView>
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
    backgroundColor: "black",
    width: 25,
    height: 25,
  },
  card: {
    backgroundColor: "#DADADAFF",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
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
});
