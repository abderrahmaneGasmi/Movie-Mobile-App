import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

export default function GridShows() {
  return (
    <View
      style={{
        flexDirection: "row",
        // marginVertical: 20,
        // marginBottom: 70,
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {showsimages.map((show, index) => (
        <Image
          source={show}
          style={{
            width: "31%",
            height: 250,
            marginBottom: 10,
            borderRadius: 20,
          }}
          key={index}
        />
      ))}
    </View>
  );
}
export const showsimages = [
  require("../../assets/popular1.png"),
  require("../../assets/popular2.png"),
  require("../../assets/popular3.png"),
  require("../../assets/popular4.png"),
  require("../../assets/popular5.png"),
  require("../../assets/popular6.png"),
  require("../../assets/popular7.png"),
];
