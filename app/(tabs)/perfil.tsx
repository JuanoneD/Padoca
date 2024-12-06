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
            <TouchableOpacity onPress={()=>{router.back()}} style={styles.button}>
              <Text style={styles.white}>◀</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.resto}>
              <Text style={styles.titulo}>Panificadora Beta</Text>
              <Text style={{textAlign: "center", fontSize: 16}}>A Panificadora Beta é um estabelecimento tradicional que oferece pães fresquinhos, bolos deliciosos e uma variedade de produtos de padaria. Com atendimento acolhedor, é o lugar ideal para quem busca qualidade e sabor no seu dia a dia.</Text>
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
      gap: 25,
      padding: 13,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      alignItems: "center",
      backgroundColor: "black",
      padding: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    white: {
      color: "white",
    },
    titulo: {
      fontSize: 25,
      textAlign: "center",
      fontFamily:"Inter",
    }
  });
  