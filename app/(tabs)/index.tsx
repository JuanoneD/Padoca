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

export default function TabTwoScreen() {
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
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            A Panificadora Beta é um estabelecimento tradicional que oferece
            pães fresquinhos, bolos deliciosos e uma variedade de produtos de
            padaria. Com atendimento acolhedor, é o lugar ideal para quem busca
            qualidade e sabor no seu dia a dia.
          </Text>
          <Text style={styles.subtitulo}>Destaques</Text>
          <View style={styles.best}>
            <View style={styles.cubinho}>
              <Image source={corote} style={styles.imagens} />
            </View>
            <View style={styles.cubinho}>
              <Image source={sonho} style={styles.imagens} />
            </View>
            <View style={styles.cubinho}>
              <Image source={fuba} style={styles.imagens} />
            </View>
            <View style={styles.cubinho}>
              <Image source={cafe} style={styles.imagens} />
            </View>
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
    backgroundColor: "#DADADAFF",
    borderRadius: 10,
    width: 65,
    height: 65,
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
    gap: 8,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 15,
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
    marginTop: 40,
  },
  image: {
    width: 200,
    height: 150,
  },
  imagens: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
