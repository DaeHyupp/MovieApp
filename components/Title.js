import React from "react";
import styled from "styled-components/native";
import propTypes, { string } from "prop-types";

const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-left: 20px;
`;

const Title = ({ title }) => <Text>{title}</Text>;

Title.propTypes = {
  title: propTypes.string.isRequired,
};

export default Title;
