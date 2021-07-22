import React from "react";
import propTypes from "prop-types";
import styled from "styled-components/native";

const TextInput = styled.TextInput`
  background-color: white;
  margin: 0px 30px;
  padding: 15px 25px;
  border-radius: 15px;
  margin-bottom: 40px;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => (
  <TextInput
    value={value}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
    placeholder={placeholder}
    returnKeyType={"search"}
  />
);

Input.propTypes = {
  placeholder: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
};

export default Input;
