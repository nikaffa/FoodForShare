import React from "react";
import styled from 'styled-components'

import { useState, useCallback, useRef, useEffect, useContext } from "react";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
} from "./Common";
import { Link } from "react-router-dom";
import axios from "axios";
const FoodCard = styled.div`
  display: grid;
  width:70%;
  justify-items: stretch;
  background-color: #fff;
  border: solid 0.25px #707070;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 60px;
  margin: 10px;`


export default function ReservationForm(props) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart.length)
  return (
    <div>
      {cart.map((food) => {
        return(
          <FoodCard>
            <td>Name: {food.name}</td>
            <td>Freshness: {food.freshness}</td>
            <td>{food.image}</td>
            <td>Quantity: {food.qty}</td>
            <button size={'5px'} >+</button>
            <button size={'5px'} >-</button>              
          </FoodCard>
          )
        }
      )}
    </div>
  );
}