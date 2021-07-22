import React from "react";
import propTypes from "prop-types";
import { ActivityIndicator, ScrollView } from "react-native";

const ScrollContainer = ({ loading, children }) => (
  <ScrollView
    style={{ backgroundColor: "black" }}
    contentContainerStyle={{
      flex: loading ? 1 : 0,
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? <ActivityIndicator color="white" size="small" /> : children}
  </ScrollView>
);

ScrollContainer.propTypes = {
  loading: propTypes.bool.isRequired,
  childern: propTypes.node.isRequired,
};

export default ScrollContainer;
