import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ArchiveScreen from "../screens/ArchiveScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AnalyticsScreen from "../screens/AnalyticsScreen";
import AddScreen from "../screens/AddScreen";
import AddDetailsScreen from "../screens/AddDetailsScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "홈",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-home` : "md-home"}
    />
  )
};

HomeStack.path = "";

const ArchiveStack = createStackNavigator(
  {
    Archive: ArchiveScreen
  },
  config
);

ArchiveStack.navigationOptions = {
  tabBarLabel: "내 옷장",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-archive" : "md-archive"}
    />
  )
};

ArchiveStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "설정",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

SettingsStack.path = "";

const AnalyticsStack = createStackNavigator(
  {
    Analytics: AnalyticsScreen
  },
  config
);

AnalyticsStack.navigationOptions = {
  tabBarLabel: "분석",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-analytics" : "md-analytics"}
    />
  )
};

AnalyticsStack.path = "";

const AddStack = createStackNavigator(
  {
    Add: AddScreen,
    Details: AddDetailsScreen
  },
  config
);

AddStack.navigationOptions = {
  tabBarLabel: "옷 등록",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={`ios-add-circle`} />
  )
};

AddStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ArchiveStack,
  AddStack,
  AnalyticsStack,
  SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
