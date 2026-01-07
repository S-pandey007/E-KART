import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SectionTitle from "../../Search/atoms/SectionTitle";
import { RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "@/src/theme/font/fonts";
import ChooseColorImage from "../atoms/ChooseColorImage";
import { SelectColor } from "@/src/utils/searchData";

type ChooseColorImageProps = {
  id: string;
  image: string;
  title: string;
};

const ChooseColorItem = () => {
  const [selectedColorItemId, setSelectedColorItemId] =
    useState<ChooseColorImageProps>(SelectColor[0]);

    // console log selected color
  const onSelectColor = (item: any) => {
    setSelectedColorItemId(item);
    console.debug("Selected color item : ", item);
  };
  return (
    <View>
      <View style={styles.titleContainer}>
        <SectionTitle title="Selected Color :" />
        <Text style={styles.title}>{selectedColorItemId?.title ?? "None"}</Text>
      </View>
      <View style={styles.optionContainer}>
        {/* <ChooseColorImage/> */}
        <FlatList
          data={SelectColor}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ChooseColorImage
              key={index}
              title={item.title}
              image={item.image}
              onPress={() => onSelectColor(item)}
              selectedOne={item.id === selectedColorItemId?.id}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

export default ChooseColorItem;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: RFValue(14),
    fontFamily: FONTS.REGULAR,
  },
  list: {
    gap: RFValue(10),
  },
  optionContainer: {
    paddingHorizontal: RFValue(10),
  },
});
