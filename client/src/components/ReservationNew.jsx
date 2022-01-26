import React from "react";
import styled from 'styled-components'
import useCart from "../hooks/useCart";
import useUser from "../hooks/useUser";

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


export default function ReservationNew() {
  const { cart, addItemToCart, removeItemFromCart, decreaseItemQty, emptyCart} = useCart();
  const { user } = useUser();
  const [saveButton, setSaveButton] = useState();
  const [cartStatus, setCartStatus] = useState();


  const submitForm = () => {
    console.log(cart);
    axios.post(`/reservations/new`, {user, cart}).then((res)=>{
      //console.log(res.status)
      if(res.status === 222 || res.status === '222')
      {
        setCartStatus(res.data);
        emptyCart();
      }
    })
    .catch((err)=> {
      console.log('ERROR', err)
    });
  }

  useEffect(() => {
    localStorage.setItem('cart-status', "");
    (localStorage.getItem("cart").length<3 && setSaveButton(""));
    (localStorage.getItem("cart").length>2 && setSaveButton(<SubmitButton size={'25px'} onClick={submitForm}>Save Reservation</SubmitButton>));
  }, [cart, saveButton, cartStatus])



  return (
    <>
      <div>
        <h1>Reservations Cart</h1>
        {cartStatus}
        {!cartStatus && localStorage.getItem("cart").length<3 && "Your reservation cart is empty."}
        {!cartStatus && cart.map((food) => {
          return(
            <FoodCard key={food.id}>
              <p>Name: {food.name}</p>
              <p>Freshness: {food.freshness}</p>
              <p><img src={food.image} alt={food.name} /></p>
              <p>Quantity: {food.qty}</p>
              <button size={'5px'} onClick={() => addItemToCart(food)}>+</button>
              <button size={'5px'} onClick={() => decreaseItemQty(food.id)}>-</button>
              <button size={'5px'} onClick={() => removeItemFromCart(food.id)}>x</button>              
            </FoodCard>
            )
          }
        )}
        {saveButton}
      </div>
    </>
  );  
}
