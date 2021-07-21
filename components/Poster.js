import React from "react";
import propTypes from "prop-types";
import styled from "styled-components/native";
import { apiImage } from "../api";

const Image = styled.Image`
  width: 120px;
  height: 192px;
`;

const Poster = ({ url }) => (
  <Image resizeMode="cover" source={{ uri: apiImage(url) }} />
);

Poster.propTypes = {
  url: propTypes.string.isRequired,
};
export default Poster;
