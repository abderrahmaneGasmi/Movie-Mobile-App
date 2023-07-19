import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "./Constants/Colors";
import Splash from "./pages/Splash";
import Home from "./pages/Home";

export default function App() {
  // return <Splash />;
  return <Home />;
}
