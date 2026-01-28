import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "@/src/components/atoms/Icons";
import { FONTS } from "@/src/theme/font/fonts";
import { RFValue } from "react-native-responsive-fontsize";
import { scale } from "@/src/utils/Responsivess";
import ScrollOptionsRow from "../../Product_Detail/molecules/ScrollOptionsRow";
import { FeatureCustomerLoved, ReviewsSortedBy } from "@/src/utils/searchData";
import { Colors } from "@/src/utils/Constants";
import { goBack, navigate } from "@/src/navigation/NavigationUtils";
import DotLine from "@/src/components/atoms/DotLine";
import SectionTitle from "../../Search/atoms/SectionTitle";
import UsersReviewCard from "../atom/UsersReviewCard";

const AllReviews = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {/* <View> */}
        {/* back button and header text  */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icons
              name="chevron-back"
              iconFamily="Ionicons"
              size={28}
              color="#000"
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>All Reviews</Text>
        </View>

        {/* scroll options  */}
        <View style={styles.scrollOptionsContainer}>
          <ScrollOptionsRow
            options={FeatureCustomerLoved}
            selected={true}
            selectedcontainerStyle={styles.chipContainer}
            selectedtextStyle={styles.chipText}
          />
          <DotLine thickness={1.3} color="#ccc" borderStyle="solid" />
        </View>

        {/* user reviews  */}
        <View style={styles.userReviewSortContainer}>
          <SectionTitle
            titleStyle={{ fontSize: RFValue(14) }}
            title="User reviews sorted by"
          />
          <ScrollOptionsRow
            options={ReviewsSortedBy}
            selected={true}
            selectedcontainerStyle={styles.chipContainer}
            selectedtextStyle={styles.chipText}
          />
        </View>

        {/* user's review card  */}
        <View style={{flex:1}}>
          <UsersReviewCard />
        </View>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default AllReviews;

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: scale(10),
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
  headerTitle: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(17),
  },
  chipContainer: {
    backgroundColor: Colors.primaryBG,
    borderColor: "rgb(136, 179, 235)",
    borderWidth: 1,
  },
  chipText: {
    color: "rgb(136, 179, 235)",
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(11),
  },
  scrollOptionsContainer: {
    paddingTop: scale(20),
  },
  userReviewSortContainer: {
    // borderBottomWidth:scale(1),
    // borderBottomColor:"#ccc",
    paddingBottom: scale(10),
  },
});
