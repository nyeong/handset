import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import { isInCategory } from "../constants/Musinsa";
import FirebaseImage from "../components/FirebaseImage";

const Item = props => {
  const { 제품명, 제품이미지, 대분류 } = props;
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() =>
          Alert.alert("옷을 내 옷장에 등록할까요?", "", [
            {
              text: "좋아요"
            },
            { text: "아니요", style: "cancle" }
          ])
        }
      >
        <FirebaseImage image_name={제품이미지} style={styles.itemImage} />
        <Text style={styles.itemText}>{제품명}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default class AddDetails extends React.Component {
  static navigationOptions = {
    title: "세부 정보"
  };

  state = {
    소분류: "",
    대분류: "",
    items: []
  };

  componentDidMount() {
    const 소분류 = this.props.navigation.getParam("소분류");
    const 대분류 = this.props.navigation.getParam("대분류");
    const items = isInCategory(소분류).map(item => ({
      ...item
    }));

    this.setState({
      소분류,
      대분류,
      items: items
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{this.state.소분류}</Text>
        </View>
        <FlatList
          data={this.state.items}
          keyExtractor={item => "" + item["분류"]}
          renderItem={({ item }) => (
            <Item {...item} 대분류={this.state.대분류} />
          )}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  title: {
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold"
  },
  item: {
    marginBottom: 10
  },
  itemText: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    fontWeight: "600"
  },
  itemImage: {
    aspectRatio: 1,
    width: "100%",
    backgroundColor: "#D8D8D8"
  }
});
