import React from "react";
import styled from 'styled-components'
import useCart from "../hooks/useCart";

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


export default function ReservationForm() {
  const { cart, addItemToCart, removeItemFromCart, decreaseItemQty } = useCart();
  //const cartR = JSON.parse(localStorage.getItem("cart"));
console.log(cart)
  return (
    <div>
      {cart.map((food) => {
        return(
          <FoodCard key={food.id}>
            <p>Name: {food.name}</p>
            <p>Freshness: {food.freshness}</p>
            <p>{food.image}</p>
            <p>Quantity: {food.qty}</p>
            <button size={'5px'} onClick={() => addItemToCart(food)}>+</button>
            <button size={'5px'} onClick={() => decreaseItemQty(food.id)}>-</button>
            <button size={'5px'} onClick={() => removeItemFromCart(food.id)}>x</button>              
          </FoodCard>
          )
        }
      )}
    </div>
  );
}