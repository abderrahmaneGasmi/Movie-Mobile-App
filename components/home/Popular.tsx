import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../Constants/Colors";

export default function Popular() {
  return (
    <View>
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        Popular Now{" "}
      </Text>
      <ScrollView horizontal={true} style={styles.popularlist}>
        {popularimages.map((item, i) => (
          <View style={{ position: "relative" }} key={i}>
            <Image
              // source={require(`../../assets/popular${item}.png`)}
              source={item}
              style={{
                width: 240,
                height: 310,
                marginRight: 10,
                borderRadius: 30,
              }}
              key={item}
            />
            <Text
              style={{
                color: "white",
                position: "absolute",
                bottom: 1,
                left: 10,
                fontSize: 85,
                textShadowColor: colors.blue,
                textShadowOffset: { width: 3, height: 5 },
                textShadowRadius: 22,
              }}
            >
              {i + 1}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const popularimages = [
  require("../../assets/popular1.png"),
  require("../../assets/popular2.png"),
  require("../../assets/popular3.png"),
  require("../../assets/popular4.png"),
];

const styles = StyleSheet.create({
  popularlist: {
    marginTop: 20,
    position: "relative",
  },
  navlist: {
    marginTop: 20,
  },
});
