import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../Constants/Colors";

export default function Nav() {
  const [selectedcat, setSelectedcat] = useState("Now Playing");
  const updatecat = (cat: string) => {
    setSelectedcat(cat);
  };
  return (
    <ScrollView horizontal={true} style={styles.navlist}>
      {navlist.map((item) => (
        <Item
          text={item}
          key={item}
          selectedcat={selectedcat}
          updatecat={updatecat}
        />
      ))}
    </ScrollView>
  );
}
const navlist = ["Now Playing", "Popular", "Top Rated", "Upcoming"];

const styles = StyleSheet.create({
  navlist: {
    marginVertical: 40,
  },
});

function Item({
  text,
  selectedcat,
  updatecat,
}: {
  text: string;
  selectedcat: string;
  updatecat: (cat: string) => void;
}) {
  return (
    <View style={{ marginLeft: 30 }}>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
        }}
        onPress={() => updatecat(text)}
      >
        {text}
      </Text>
      <View
        style={{
          backgroundColor: colors.blue,
          width: "100%",
          height: 5,
          borderRadius: 10,
          marginTop: 15,
          paddingHorizontal: 5,
          opacity: text === selectedcat ? 1 : 0,
        }}
      />
    </View>
  );
}
