import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { colors } from "../Constants/Colors";
import { Image } from "react-native";
import Popular from "../components/home/Popular";
import Nav from "../components/home/Nav";
import GridShows from "../components/home/GridShows";
import AllCategories from "../components/home/AllCategories";
export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Watch any thing you want
      </Text>
      <View style={styles.search}>
        <Text style={{ color: colors.gray }}>Search</Text>
        <Image
          source={require("../assets/search.png")}
          style={{ width: 30, height: 30 }}
        />
      </View>
      <Popular />
      <Nav />
      <GridShows />
      <AllCategories />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 50,
    gap: 20,
    // marginBottom: 70,
    // alignItems: "center",
    // justifyContent: "center",
  },
  search: {
    backgroundColor: colors.primarylight,
    // width: "90%",
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
