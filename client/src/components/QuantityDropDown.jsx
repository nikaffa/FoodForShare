import React, { useState } from "react";
import styled from "styled-components";

const Main = styled("div")`
  font-family: Roboto;
  font-size: 12px;
 
`;

const DropDownContainer = styled("div")`
  width: 500px;
  height: 32px;
  outline: none;
  border: #707070 solid 1px;
  background-color: #fff;
  align-item: flex-start;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 10px;
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid #707070;
  &::placeholder {
    color: rgba(170, 170, 170, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.4px solid black;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #black;
  }
`;

const DropDownHeader = styled("div")`
  width: 500px;
  height: 32px;
  padding:5px 0 4px;
  Font-family: Roboto;
  Font-size: 14px;
  Color: rgba(170, 170, 170, 1)
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  width: 450px;
  height: 12px;
  border-radius: 8px;
  
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  overflow:auto;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 12px;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.5em;
  &:hover {
    color: #fd9e46;
  }
  &:selectedOption {
    color: #black;
  }
`;

const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", " "];

export default function QuantityDropDown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState();

  const toggling = () => setIsOpen(!isOpen);
  
  const onOptionClicked = value => () => {
    console.log(value);
    setSelectedOption(value);
    props.setQuantity(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Select Quantity"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}