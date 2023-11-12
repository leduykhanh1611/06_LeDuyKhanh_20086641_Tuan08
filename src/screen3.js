import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function screen3({ navigation }) {
  var [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://654ad3515b38a59f28ee4286.mockapi.io/Drink")
      .then((response) => response.json())
      .then((json) => {
        console.log(data);
        setData(json);
      });
  }, []);
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: "20px",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack("screen2");
          }}
        >
          <Image
            source={require("../assets/Button 70.png")}
            style={{ width: "44px", height: "44px" }}
          ></Image>
        </Pressable>
        <Text
          style={{
            fontFamily: "Inter",
            fontSize: "24px",
            lineHeight: "36px",
            marginLeft: "60px",
            fontWeight: 700,
          }}
        >
          Drink
        </Text>
        <Image
          source={require("../assets/Image 177.png")}
          style={{ width: "24px", height: "24px", marginLeft: "80px" }}
        ></Image>
      </View>
      {data.map((item, index) => {
        return (
          <View
            style={{
              flex: 3,
              width: "350px",
              height: "64px",
              borderRadius: "4px",
              borderWidth: "1px",
              flexDirection: "row",
              marginVertical: "10px",
              alignItems: "center",
            }}
          >
            <Image
              source={item.image}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "6px",
              }}
            ></Image>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text
                style={{
                  color: "#171A1F",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  lineHeight: "26px",
                  marginLeft: "10px",
                  fontWeight: 700,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  color: "#171A1F",
                  fontFamily: "Inter",
                  fontSize: "12px",
                  lineHeight: "20px",
                  marginLeft: "10px",
                  marginTop: "20px",
                  fontWeight: 400,
                }}
              >
                {item.price}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                marginLeft: "30px",
              }}
            >
              <Image
                source={require("../assets/Image 230.png")}
                style={{ width: "18px", height: "18px" }}
              ></Image>
              <Image
                source={require("../assets/Image 231.png")}
                style={{ width: "14px", height: "18px", marginLeft: "20px" }}
              ></Image>
            </View>
          </View>
        );
      })}
      <View style={{ flex: 1 }}>
        <Pressable
          style={{
            backgroundColor: "#EFB034",
            width: "350px",
            height: "50px",
            alignItems:"center",
            justifyContent:"center"
          }}
          onPress={() => {
            navigation.navigate("screen4");
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
            GO TO CART
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
