import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
export default function screen4({ navigation }) {
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
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: "20px",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack("screen3");
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
          Your orders
        </Text>
        <Image
          source={require("../assets/Image 177.png")}
          style={{ width: "24px", height: "24px", marginLeft: "80px" }}
        ></Image>
      </View>
      <View
        style={{
          width: 347,
          height: 100,
          backgroundColor: "#00BDD6",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 30,
          borderRadius: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
            CAFE DELIVERY
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#fff",
              fontWeight: "bold",
              marginTop: 6,
            }}
          >
            Order #18
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
            $5
          </Text>
        </View>
      </View>
      <View
        style={{
          width: 347,
          height: 100,
          backgroundColor: "#8353E2",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 30,
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
            CAFE DELIVERY
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#fff",
              fontWeight: "bold",
              marginTop: 6,
            }}
          >
            Order #18
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
            $5
          </Text>
        </View>
      </View>
      {data.map((item, index) => {
        return (
          <View
            style={{
              width: "100%",
              paddingHorizontal: 20,
              borderWidth: 1,
              borderColor: "#ccc",
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 6,
            }}
          >
            <View style={{ flex: 1 }}>
              <Image source={item.image} style={{ width: 50, height: 50 }} />
            </View>

            <View style={{ flex: 3 }}>
              <View>
                <Text style={{ fontSize: 18 }}>{item.name}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 6,
                }}
              >
                <Feather name="play" size={18} color="black" />
                <Text>{item.price}</Text>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Ionicons name="remove-circle" size={30} color="#0fa958" />
              <Ionicons name="add-circle" size={30} color="#0fa958" />
            </View>
          </View>
        );
      })}
      <Pressable
        style={{
          backgroundColor: "#EFB034",
          width: "350px",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
          PAY NOW
        </Text>
      </Pressable>
    </View>
  );
}
