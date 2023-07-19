import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { colors } from "../Constants/Colors";

export default function Splash() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/splash(2).png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});
