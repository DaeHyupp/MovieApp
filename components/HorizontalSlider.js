import React from "react";
import { ScrollView } from "react-native";
import propTypes from "prop-types";
import Title from "./Title";
import styled from "styled-components/native";

const Container = styled.View``;

const HorizontalSlider = ({ title, children }) => (
  <Container>
    <Title title={title} />
    <ScrollView
      style={{ marginTop: 20, marginVertical: 30 }}
      contentContainerStyle={{ paddingLeft: 15 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  </Container>
);

HorizontalSlider.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default HorizontalSlider;
