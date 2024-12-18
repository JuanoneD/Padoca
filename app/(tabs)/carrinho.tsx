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

  const [data, setData] = useState<Cart[]>([])
  const [total, setTotal] = useState<Number>(0)

  const loadCart = async () => {
    let item = await AsyncStorage.getItem("users");
    let idOp = await AsyncStorage.getItem("userId");

    if (item == null || idOp === null) {
      router.push("/")
      return;
    }

    let id = Number(idOp)
    let user: User[] = item == null ? [] : JSON.parse(item);
    setData(user[id].products)

    let total = 0
    user[id].products?.forEach((item) => {
      total += Number(item?.price)
    })
    setTotal(total)
  }

  const deleteItem = async (idItem: number) => {
    let item = await AsyncStorage.getItem("users");
    let idOp = await AsyncStorage.getItem("userId");

    if (item == null || idOp === null) {
      router.push("/")
      return;
    }

    let id = Number(idOp)
    let user: User[] = item == null ? [] : JSON.parse(item);

    user[id].products = user[id].products.filter((prod, ind) => ind !== idItem)

    await AsyncStorage.setItem("users", JSON.stringify(user))
    await loadCart()
  }

  const payment = async () => {
    var item = await AsyncStorage.getItem("users");
    var idOp = await AsyncStorage.getItem("userId");

    if (item == null || idOp === null) {
      router.push("/")
      return;
    }

    var id = Number(idOp)
    var user: User[] = item == null ? [] : JSON.parse(item);

    let items = ""
    user[id].products.forEach((item, index) => {
      items += index < 1 ? item.name : ", " + item.name;

    })

    try {
      user[id].payment.push({ name: items, price: total })

    } catch (error) {

      user[id].payment = [{ name: items, price: total }]

    } finally {
      user[id].products = []
      AsyncStorage.setItem("users", JSON.stringify(user))
      loadCart()
    }
  }

  useEffect(() => {
    setInterval(async () => { await loadCart() }, 1000)
  }, []);


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
            {data?.map((item, index) => (
              <View style={styles.card} key={index}>
                <View style={styles.textContainer}>
                  <Text style={{fontWeight: "600", fontSize: 15, color: "#502410"}}>{item?.name}</Text>
                  <Text style={{fontWeight: "600", fontSize: 15, color: "#502410"}}>X{item?.qtd}</Text>
                </View>
                <View style={styles.hori}>
                  <Text style={{fontWeight: "600", fontSize: 15, color: "#502410"}}>{item?.price}</Text>
                  <TouchableOpacity style={styles.but} onPress={() => { deleteItem(index) }}>
                    <Text style={styles.white}>X</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <View style={styles.dist}>
              <Text style={styles.subtitulo}>R$ {total}</Text>
              <TouchableOpacity style={styles.button} onPress={() => { payment() }}>
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
    backgroundColor: "#502410",
    width: 25,
    height: 25,
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
    color: "#502410",
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
