import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  text: string;
  numberOfLines?: number;
  textStyle?: any;
  toggleStyle?: any;
};

const ExpandableText: React.FC<Props> = ({
  text,
  numberOfLines,
  textStyle,
  toggleStyle,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };
  return (
    <View>
      <Text
        style={[styles.text, textStyle]}
        numberOfLines={expanded ? undefined : numberOfLines}
      >
        {text.trim().split(".")}
      </Text>

      <TouchableOpacity onPress={toggleExpand} activeOpacity={0.7}>
        <Text style={[styles.toggle, toggleStyle]}>
          {expanded ? "Show Less ▲" : "Read More ▼"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(ExpandableText);

const styles = StyleSheet.create({
  text: {
    fontSize: RFValue(14),
    lineHeight: RFValue(15),
    color: "#333",
    paddingHorizontal: RFValue(15),
    textAlign: "left",
    textAlignVertical: "top",
    includeFontPadding: false,
  },
  toggle: {
    marginTop: RFValue(6),
    fontSize: RFValue(13),
    color: "#1a73e8",
    fontWeight: "600",
    paddingHorizontal: RFValue(15),
  },
});
