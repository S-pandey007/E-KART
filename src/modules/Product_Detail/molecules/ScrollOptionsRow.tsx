import { FlatList, StyleSheet, TextStyle, ViewStyle, View } from "react-native";
import React, { memo, useState } from "react";
import ScrollableOtpions from "../atoms/ScrollableOtpions";
import { RFValue } from "react-native-responsive-fontsize";

type ScrollOptions = {
  id: string;
  label: string;
  icon?: string;
};
type Props = {
  options: ScrollOptions[];
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  selected?: boolean;
  selectedcontainerStyle?: ViewStyle;
  selectedtextStyle?: TextStyle;
};
const ScrollOptionsRow: React.FC<Props> = ({
  options,
  containerStyle,
  textStyle,
  selected,
  selectedcontainerStyle,
  selectedtextStyle,
}) => {
   const [selectedId, setSelectedId] = useState<string | null>("1");

  const onSelectOption = (item: ScrollOptions) => {
    setSelectedId(item.id);
    console.debug("selected option:", item);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.items}
        renderItem={({ item }) => (
          <ScrollableOtpions
            containerStyle={containerStyle}
            textStyle={textStyle}
            key={item.id}
            icon={item.icon}
            text={item.label}
            onPress={() => onSelectOption(item)}
            selected={selectedId === item.id}
            selectedcontainerStyle={selectedcontainerStyle}
            selectedtextStyle={selectedtextStyle}
          />
        )}
      />
    </View>
  );
};

export default memo(ScrollOptionsRow);

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  items: {
    gap: RFValue(12),
    paddingHorizontal: RFValue(14),
  },
});
