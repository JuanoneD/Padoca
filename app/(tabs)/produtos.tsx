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
          <Text style={styles.titulo}>Produtos</Text>
          <View style={styles.best}>
            <View style={styles.card}>
              <Image source={pao} style={styles.imagens} />
              <View style={styles.hori}>
                <Text>Pão Frances</Text>
                <Text>2,00</Text>
              </View>
              <TouchableOpacity style={styles.but}>
                <Text style={styles.white}>Adicionar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Image source={quejo} style={styles.imagens} />
              <View style={styles.hori}>
                <Text>Pão de queijo</Text>
                <Text>2,00</Text>
              </View>
              <TouchableOpacity style={styles.but}>
                <Text style={styles.white}>Adicionar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Image source={sonho} style={styles.imagens} />
              <View style={styles.hori}>
                <Text>Sonho</Text>
                <Text>2,00</Text>
              </View>
              <TouchableOpacity style={styles.but}>
                <Text style={styles.white}>Adicionar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Image source={fuba} style={styles.imagens} />
              <View style={styles.hori}>
                <Text>Fubá</Text>
                <Text>2,00</Text>
              </View>
              <TouchableOpacity style={styles.but}>
                <Text style={styles.white}>Adicionar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Image source={kit} style={styles.imagens} />
              <View style={styles.hori}>
                <Text>Bolo kitkat</Text>
                <Text>2,00</Text>
              </View>
              <TouchableOpacity style={styles.but}>
                <Text style={styles.white}>Adicionar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.card}>
              <Image source={cafe} style={styles.imagens} />
              <View style={styles.hori}>
                <Text>Café</Text>
                <Text>2,00</Text>
              </View>
              <TouchableOpacity style={styles.but}>
                <Text style={styles.white}>Adicionar</Text>
              </TouchableOpacity>
            </View>
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
