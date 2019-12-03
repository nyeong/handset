import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  LayoutAnimation,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ITEMS = [
  {
    대분류: "스커트",
    소분류: ["미디 스커트", "미니 스커트", "롱 스커트"]
  },
  {
    대분류: "상의",
    소분류: [
      "맨투맨",
      "후드 스웨트셔츠",
      "셔츠",
      "니트 티셔츠",
      "긴팔 티셔츠",
      "반팔 티셔츠",
      "민소매 티셔츠"
    ]
  },
  {
    대분류: "하의",
    소분류: ["데님 팬츠", "수트 팬츠", "코튼 팬츠", "쇼트 팬츠", "레깅스"]
  },
  {
    대분류: "원피스",
    소분류: ["점프수트", "미디 원피스", "미니 원피스", "맥시 원피스"]
  }
];

class SectionHeader extends React.Component {
  _toggle() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  render() {
    return (
      <View style={[styles.sectionHeader]}>
        <TouchableWithoutFeedback
          onPress={() => {
            this._toggle();
            this.props.onPress();
          }}
        >
          <View style={styles.sectionHeaderTitle}>
            <Text style={styles.sectionHeaderText}>{this.props.title}</Text>
            <Ionicons
              name={!this.props.open ? "ios-arrow-down" : "ios-arrow-up"}
              size={26}
              style={{ marginLeft: "auto" }}
              color="#ccc"
            />
          </View>
        </TouchableWithoutFeedback>
        <View
          style={{ height: this.props.open ? null : 0, overflow: "hidden" }}
        >
          {this.props.items.map(text => (
            <TouchableOpacity
              style={styles.sectionItem}
              key={text}
              onPress={() =>
                this.props.navigation.push("Details", {
                  소분류: text,
                  대분류: this.props.title
                })
              }
            >
              <Text style={styles.sectionItemText}>{text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

export default class AddScreen extends React.Component {
  state = {
    nowOpen: null
  };

  updateOpen(nextOpen) {
    this.setState({ nowOpen: nextOpen });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {ITEMS.map(({ 대분류, 소분류 }) => (
          <SectionHeader
            title={대분류}
            key={대분류}
            open={this.state.nowOpen === 대분류}
            onPress={() =>
              this.updateOpen(this.state.nowOpen === 대분류 ? null : 대분류)
            }
            items={소분류}
            navigation={this.props.navigation}
          />
        ))}
      </ScrollView>
    );
  }
}

AddScreen.navigationOptions = {
  title: "옷 등록"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  sectionHeader: {},
  sectionHeaderTitle: {
    backgroundColor: "#fbfbfb",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ededed",
    flexDirection: "row"
  },
  sectionHeaderText: {
    fontSize: 18
  },
  sectionItem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#efefef"
  },
  sectionItemText: {
    fontSize: 14,
    color: "#666"
  }
});
