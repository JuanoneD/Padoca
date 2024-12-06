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

const logo = require("../../assets/images/beta.png");
const pao = require("../../assets/images/pao.jpg");
const quejo = require("../../assets/images/paoqueijo.jpg");
const sonho = require("../../assets/images/sonho.jpg");
const fuba = require("../../assets/images/fuba.png");
const kit = require("../../assets/images/kitkat.jpg");
const cafe = require("../../assets/images/cafe.jpg");

export default function TabTwoScreen() {
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
          <Text style={styles.titulo}>Panificadora Beta</Text>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            A Panificadora Beta é um estabelecimento tradicional que oferece
            pães fresquinhos, bolos deliciosos e uma variedade de produtos de
            padaria. Com atendimento acolhedor, é o lugar ideal para quem busca
            qualidade e sabor no seu dia a dia.
          </Text>
          <Image source={logo} style={styles.image} />
          <Text style={styles.subtitulo}>Melhores Produtos</Text>
          <View style={styles.best}>
            <Image source={pao} style={styles.imagens} />
            <Image source={quejo} style={styles.imagens} />
            <Image source={sonho} style={styles.imagens} />
            <Image source={fuba} style={styles.imagens} />
            <Image source={kit} style={styles.imagens} />
            <Image source={cafe} style={styles.imagens} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
    width: 120,
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
