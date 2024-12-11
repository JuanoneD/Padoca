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
        <View style={styles.best}>
          <Text style={styles.titulo}>Carrinho</Text>

          <View style={styles.resto}>
            <View style={styles.card}>
              <Text>Pão Francês</Text>
              <Text>X2</Text>
              <View style={styles.hori}>
                <Text>2,00</Text>
                <TouchableOpacity style={styles.but}>
                  <Text style={styles.white}>X</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.card}>
              <Text>Pão Francês</Text>
              <Text>X2</Text>
              <View style={styles.hori}>
                <Text>2,00</Text>
                <TouchableOpacity style={styles.but}>
                  <Text style={styles.white}>X</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.card}>
              <Text>Pão Francês</Text>
              <Text>X2</Text>
              <View style={styles.hori}>
                <Text>2,00</Text>
                <TouchableOpacity style={styles.but}>
                  <Text style={styles.white}>X</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.dist}>
            <Text style={styles.subtitulo}>R$ 6,00</Text>
            <TouchableOpacity style={styles.button}>
                  <Text style={styles.white}>Pagar</Text>
            </TouchableOpacity></View>

          </View>
        </View>
      </View>
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
