import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  Button,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Link, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Inter_900Black } from "@expo-google-fonts/inter";
import AsyncStorage from "@react-native-async-storage/async-storage";


const user = require("../../assets/images/user.png");

interface Payment{
  name:String,
  price:Number
}

interface User{
  name:String;
  email:String;
  password:String;
  adress:String;
  payment:Payment[]
};

export default function TabTwoScreen() {

  const [data,setData] = useState<User>()

  const loadProfile = async()=>{
    let item = await AsyncStorage.getItem("users");
    let idOp = await AsyncStorage.getItem("userId");
  
    if(item ==null || idOp===null){
      router.push("/")
      return;
    }
  
    let id = Number(idOp)
    let user:User[] = item==null?[]:JSON.parse(item);

    setData(user[id])
  }

  useEffect(()=>{
    setInterval(async()=>{await loadProfile()},1000)
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
        <View style={styles.best}>
          <View style={styles.borda}>
            <Image source={user} style={styles.imagao} />
          </View>
          <View style={styles.resto}>
            <Text style={styles.titulo}>{data?.name}</Text>
            <Text style={{color: "#502410", fontWeight: "600", fontSize: 15}}>{data?.email}</Text>
          </View>
          <View style={styles.resto}>
            <Text style={styles.subtitulo}>41 9999-9999</Text>
            <Text style={{color: "#502410", fontWeight: "600", fontSize: 15}}>{data?.adress}</Text>
          </View>
          <View style={styles.restao}>
            <Text style={styles.titulo2}>Histórico</Text>
            {data?.payment?.map((item)=>(
              <View style={styles.card}>
                <Text style={{color: "#502410", fontWeight: "600", fontSize: 15}}>{item.name}</Text>
                <Text style={{color: "#502410", fontWeight: "700", fontSize: 15}}>{item.price.toFixed(2)}</Text>
              </View>
            ))}

          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  dist: {
    marginTop: 20,
    gap: 10,
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
    backgroundColor: "#502410",
    width: 25,
    height: 25,
  },
  card: {
    backgroundColor: "#f3de9f",
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
    flex: 1,
    backgroundColor: "#e6bd6e",
  },
  resto: {
    marginTop: 5,
    gap: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  restao: {
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
  titulo2: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
    color: "#502410",
  },
  subtitulo: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#502410",
  },
  image: {
    width: 200,
    height: 150,
  },

  borda: {
    padding: 10,
    borderRadius: "100%",
    backgroundColor: "#f9efb8",
  },

  imagao: {
    width: 120,
    height: 120,
    borderRadius: "100%",
  },
});
