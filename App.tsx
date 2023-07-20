import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "./Constants/Colors";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Nav from "./components/home/Nav";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const Tab = createBottomTabNavigator();
  // return (
  //   <NavigationContainer>
  //     <Tab.Navigator>
  //       <Tab.Screen name="Home" component={Home} />
  //       <Tab.Screen name="Settings" component={Splash} />
  //     </Tab.Navigator>
  //   </NavigationContainer>
  // );
  // return <Splash />;
  return <Dashboard />;
}
