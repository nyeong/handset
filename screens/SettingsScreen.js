import Constants from "expo-constants";
import React from "react";
import { SectionList, View, Text, StyleSheet } from "react-native";

const renderItem = ({ item }) => (
  <View style={styles.sectionContentContainer}>
    <Text style={styles.sectionContentText}>{item}</Text>
  </View>
);

const renderSectionHeader = ({ section }) => (
  <View style={styles.sectionHeaderContainer}>
    <Text style={styles.sectionHeaderText}>{section.title}</Text>
  </View>
);

export default function SettingsScreen() {
  const { manifest = {} } = Constants;
  const sections = [
    {
      title: "전화 문의",
      data: ["010-1234-5678"]
    },
    {
      title: "이메일 문의",
      data: ["john@example.com"]
    },
    {
      title: "이용 안내",
      data: [
        "가지고 있는 옷을 등록한다",
        "내 옷장에 들어가서 당일 입을 옷을 코디한다",
        "주별, 월별 빈도를 분석하여 코디에 참고한다"
      ]
    },
    {
      title: "버전 정보",
      data: [manifest.version]
    }
  ];
  return (
    <SectionList
      sections={sections}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={(item, index) => index}
    />
  );
}

SettingsScreen.navigationOptions = {
  title: "설정"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  titleContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
    flexDirection: "row"
  },
  titleIconContainer: {
    marginRight: 15,
    paddingTop: 2
  },
  sectionHeaderContainer: {
    backgroundColor: "#fbfbfb",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ededed"
  },
  sectionHeaderText: {
    fontSize: 14
  },
  sectionContentContainer: {
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 15
  },
  sectionContentText: {
    color: "#808080",
    fontSize: 14
  },
  nameText: {
    fontWeight: "600",
    fontSize: 18
  },
  slugText: {
    color: "#a39f9f",
    fontSize: 14,
    backgroundColor: "transparent"
  },
  descriptionText: {
    fontSize: 14,
    marginTop: 6,
    color: "#4d4d4d"
  },
  colorContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  colorPreview: {
    width: 17,
    height: 17,
    borderRadius: 2,
    marginRight: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ccc"
  },
  colorTextContainer: {
    flex: 1
  }
});
