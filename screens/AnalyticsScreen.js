import React from "react";
import { ScrollView, StyleSheet, Text, Image } from "react-native";
import Layout from "../constants/Layout";

export default function AnalyticsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        resizeMode="stretch"
        source={require("../assets/images/chart.png")}
        style={{
          width: Layout.window.width,
          height: Layout.window.width * 1.33333
        }}
      />
    </ScrollView>
  );
}

AnalyticsScreen.navigationOptions = {
  title: "통계"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%"
  }
});
