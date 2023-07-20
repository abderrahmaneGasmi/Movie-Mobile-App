import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { showsimages } from "./GridShows";

export default function AllCategories() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Watch by Category
      </Text>
      <View style={styles.categorycontainer}>
        {categories.map((item) => (
          <Category name={item} key={item} />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { marginVertical: 50 },
  categorycontainer: {},
  categoryitem: {
    marginVertical: 20,
  },
  categoryimages: {
    position: "relative",
    marginTop: 10,
  },
  categorytitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
const categories = ["Action", "Adventure", "Animation", "Comedy", "Crime"];

function Category({ name }: { name: string }) {
  return (
    <View style={styles.categoryitem}>
      <Text style={styles.categorytitle}>{name}</Text>
      <ScrollView horizontal={true} style={styles.categoryimages}>
        {showsimages.map((show, index) => (
          <Image
            source={show}
            style={{
              width: 180,
              height: 220,
              marginRight: 10,
              borderRadius: 20,
            }}
            key={index}
          />
        ))}
      </ScrollView>
    </View>
  );
}
