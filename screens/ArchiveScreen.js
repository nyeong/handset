import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  View
} from "react-native";

const images = {
  상의: [
    require("../assets/images/u/1.jpg"),
    require("../assets/images/u/2.jpg"),
    require("../assets/images/u/3.jpg"),
    require("../assets/images/u/4.jpg"),
    require("../assets/images/u/5.jpg")
  ],

  하의: [
    require("../assets/images/d/1.jpg"),
    require("../assets/images/d/2.jpg"),
    require("../assets/images/d/3.jpg"),
    require("../assets/images/d/4.jpg"),
    require("../assets/images/d/5.jpg")
  ],
  스커트: [
    require("../assets/images/skirts/1.jpg"),
    require("../assets/images/skirts/2.jpg"),
    require("../assets/images/skirts/3.jpg"),
    require("../assets/images/skirts/4.jpg"),
    require("../assets/images/skirts/5.jpg")
  ],
  원피스: [
    require("../assets/images/onepieces/1.jpg"),
    require("../assets/images/onepieces/2.jpg"),
    require("../assets/images/onepieces/3.jpg"),
    require("../assets/images/onepieces/4.jpg"),
    require("../assets/images/onepieces/5.jpg")
  ]
};

const Item = props => (
  <View
    style={{
      width: 100,
      height: 100
    }}
  >
    <Image
      source={images[props.대분류][props.num]}
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#D8D8D8",
        aspectRatio: 1
      }}
    />
  </View>
);

export default LinksScreen = () => (
  <ScrollView style={styles.container}>
    {["스커트", "상의", "하의", "원피스"].map(대분류 => (
      <View key={대분류}>
        <Text
          style={{
            backgroundColor: "#fbfbfb",
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: "#ededed",
            fontSize: 18
          }}
        >
          {대분류}
        </Text>
        <FlatList
          horizontal
          data={[0, 1, 2, 3, 4].map(num => ({ num, 대분류 }))}
          keyExtractor={item => `${item.num}${item.대분류}`}
          renderItem={({ item }) => <Item {...item} />}
        />
      </View>
    ))}
  </ScrollView>
);

LinksScreen.navigationOptions = {
  title: "내 옷장"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
