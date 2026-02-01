import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import SectionTitle from "../../Search/atoms/SectionTitle";
import OptionsChips from "../atom/OptionsChips";
import { scale } from "@/src/utils/Responsivess";

const options = [
  {
    id: "1",
    title: "My Reviews",
    iconName: "star-outline",
    iconFamilyName: "Ionicons",
    image: "",
    navigate: "MyReviews",
  },
  {
    id: "2",
    title: "Questions & Answers",
    iconName: "chatbubble-ellipses-outline",
    iconFamilyName: "Ionicons",
    image: "",
    navigate: "QuestionsAnswers",
  },
];
const MyActivity = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title="My Activity" />
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OptionsChips
            key={item.id}
            title={item.title}
            iconName={item.iconName}
            iconFamilyName={item.iconFamilyName}
            color="rgb(63, 137, 235)"
            onPress={() => console.debug(`nanvigate to ${item.navigate}`)}
          />
        )}
      />
    </View>
  );
};

export default MyActivity;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    marginBottom: scale(10),
  },
});
