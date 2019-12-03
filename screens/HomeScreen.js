import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView
} from "react-native";
import Layout from "../constants/Layout";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={{ height: "100%" }}>
        <View style={styles.story}>
          <Image
            source={require("../assets/images/story01.png")}
            resizeMode="stretch"
            style={styles.storyImage}
          />
        </View>
        <View style={styles.story}>
          <Image
            source={require("../assets/images/story02.png")}
            resizeMode="stretch"
            style={styles.storyImage}
          />
        </View>
        <View style={styles.story}>
          <Image
            source={require("../assets/images/story03.png")}
            resizeMode="stretch"
            style={styles.storyImage}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  title: "handset"
};

const styles = StyleSheet.create({
  story: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
    overflow: "hidden"
  },
  storyImage: {
    width: Layout.window.width - 20,
    height: Layout.window.width - 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27
  }
});
