import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "./Home";
import Splash from "./Splash";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../Constants/Colors";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

export default function Dashboard() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: colors.primary,
            shadowColor: colors.primary,
            elevation: 0,
          },
          // headerLeft: () => (
          //   <Ionicons
          //     name="menu"
          //     size={30}
          //     color={colors.blue}
          //     style={{ marginLeft: 20 }}
          //   />
          // ),
          headerTitle: () => {
            let iconname = "";
            let rn = route.name;
            if (rn === "Home") {
              iconname = "home";
            } else if (rn === "Watchlist") {
              iconname = "heart";
            }
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <Ionicons
                  name={iconname}
                  size={30}
                  color={colors.blue}
                  style={{ marginLeft: 20 }}
                />
                <Text
                  style={{
                    color: colors.blue,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  {rn}
                </Text>
              </View>
            );
          },
          headerTintColor: colors.blue,
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",

          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "";
            let rn = route.name;
            if (rn === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === "Watchlist") {
              iconName = focused ? "heart" : "heart-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.blue,
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: colors.primary,
            borderTopWidth: 3,
            borderTopColor: colors.primarylight,
            height: 75,
            // paddingBottom: 5,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            paddingBottom: 10,
          },
          tabBarIconStyle: {
            // marginTop: 10,
            // width: 20,
            // height: 20,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Watchlist" component={Splash} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
