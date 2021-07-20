import React from "react";
import styled from "styled-components/native";
import propTypes from "prop-types";

const Container = styled.Text`
  color: rgb(220, 220, 220);
  opacity: 0.9;
  font-size: 12px;
`;

const Votes = ({ votes }) => <Container>⭐ {votes} / 10</Container>;

export default Votes;
