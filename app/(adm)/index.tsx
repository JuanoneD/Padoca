import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Link, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Inter_900Black } from "@expo-google-fonts/inter";

const logo = require("../../assets/images/beta.png");
const pao = require("../../assets/images/pao.png");
const corote = require("../../assets/images/corote.png");
const sonho = require("../../assets/images/sonho.png");
const fuba = require("../../assets/images/bolo.png");
const cafe = require("../../assets/images/cafe.png");
const seta = require("../../assets/images/seta.png")

export default function TabTwoScreen() {

  const onPress = async() => {
    router.push("/produtos")
  }

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
        <View style={styles.resto}><Image source={logo} style={styles.image} />
          <Text style={{ textAlign: "center", fontSize: 16, color: "#502410", fontWeight: "600" }}>
            A Panificadora Beta é um estabelecimento tradicional que oferece
            pães fresquinhos, bolos deliciosos e uma variedade de produtos de
            padaria. Com atendimento acolhedor, é o lugar ideal para quem busca
            qualidade e sabor no seu dia a dia.
          </Text>
          <Text style={styles.subtitulo}>Destaques</Text>
          <View style={styles.best}>
            <TouchableOpacity onPress={onPress} style={styles.retango}>
              <View style={styles.cubinho}>
                <Image source={corote} style={styles.imagens} />
              </View>
              <Text style={styles.bigz}>Corote</Text>
              <Image source={seta} style={styles.seta} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress} style={styles.retango}>
              <View style={styles.cubinho}>
                <Image source={sonho} style={styles.imagens} />
              </View>
              <Text style={styles.bigz}>Sonho</Text>
              <Image source={seta} style={styles.seta} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress} style={styles.retango}>
              <View style={styles.cubinho}>
                <Image source={fuba} style={styles.imagens} />
              </View>
              <Text style={styles.bigz}>Bolo</Text>
              <Image source={seta} style={styles.seta} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress} style={styles.retango}>
              <View style={styles.cubinho}>
                <Image source={cafe} style={styles.imagens} />
              </View>
              <Text style={styles.bigz}>Café</Text>
              <Image source={seta} style={styles.seta} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  cubinho: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3de9f",
    borderRadius: 10,
    width: 65,
    height: 65,
  },
  retango: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ecce87",
    borderRadius: 10,
    width: "100%",
    height: 80,
  },
  butao: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  tela: {
    padding: 5,
    backgroundColor: "#e6bd6e",
    flex: 1
  },
  resto: {
    gap: 15,
    padding: 13,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  best: {
    gap: 8,
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 5,
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
  },
  subtitulo: {
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Inter",
    marginTop: 5,
    color: "#502410"
  },
  image: {
    width: 200,
    height: 140,
  },
  imagens: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  seta: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  bigz: {
    fontSize: 20,
    textAlign: "center",
    color: "#502410",
    fontWeight: "500",
  },
});
