import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function screen2() {
  const navigation = useNavigation();
  var [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://654ad3515b38a59f28ee4286.mockapi.io/Shop")
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
            navigation.goBack("screen1");
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
          Shops Near Me
        </Text>
        <Image
          source={require("../assets/Image 177.png")}
          style={{ width: "24px", height: "24px", marginLeft: "80px" }}
        ></Image>
      </View>
      {data.map((item, index) => {
        return (
          <Pressable
            onPress={() => {
              navigation.navigate("screen3");
            }}
            style={{
              flex: 3,
              width: "347px",
              height: "200px",
              borderRadius: "6px",
            }}
          >
            <Image
              source={item.image}
              style={{
                width: "347px",
                height: "114px",
                borderRadius: "6px",
              }}
            ></Image>
            <View style={{ flexDirection: "row", marginTop: "5px" }}>
              <Image
                source={item.image2}
                style={{ width: "19px", height: "14px", marginLeft: "10px" }}
              ></Image>
              <Text
                style={{
                  color: "#1DD75B",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  lineHeight: "22px",
                  marginLeft: "10px",
                  fontWeight: 400,
                }}
              >
                {item.order}
              </Text>
              <Image
                source={require("../assets/Image 180.png")}
                style={{ width: "18px", height: "18px", marginLeft: "30px" }}
              ></Image>
              <Text
                style={{
                  color: "#DE3B40",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  lineHeight: "22px",
                  marginLeft: "10px",
                  fontWeight: 400,
                }}
              >
                {item.time}
              </Text>
              <Image
                source={require("../assets/Image 181.png")}
                style={{ width: "14px", height: "18px", marginLeft: "30px" }}
              ></Image>
            </View>
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
                fontSize: "14px",
                lineHeight: "22px",
                marginLeft: "10px",
                fontWeight: 400,
              }}
            >
              {item.locate}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
