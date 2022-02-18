import React from "react";
import styled from 'styled-components'
import useCart from "../hooks/useCart";
import useUser from "../hooks/useUser";

import { useState, useEffect } from "react";
import { BoxContainer, SubmitButton } from "./Common";
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
    axios.post(`/reservations/new`, {user, cart}).then((res)=>{
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
    (localStorage.getItem("cart").length>2 && setSaveButton(<SubmitButton size={'25px'} onClick={submitForm}>Save</SubmitButton>));
  }, [cart, saveButton, cartStatus])


  
  
  return (
    <BoxContainer style={{width: "60%"}}>  
      <h1>My Cart</h1>
      {cartStatus}
      {!cartStatus && localStorage.getItem("cart").length<3 && "Your cart is empty."}
      {!cartStatus && cart.map((food) => {
        return(
          <FoodCard key={food.id}>
            <h2>{food.name}</h2>
            <div className="embla__slide__inner">
                <div className="embla_left">
                  <div>
                    <img className="embla__slide__img_fit" src={food.image} alt="food" />
                  </div>
                </div>
                <div className="embla_right">
                  <div className="embla_right_text" style={{fontSize: "20px"}}>
                    <h3>Quantity: {food.qty}</h3>
                  </div>
                  <div>
                    <button size={'5px'} onClick={() => decreaseItemQty(food.id)}>-</button>
                    <button size={'5px'} onClick={() => addItemToCart(food)}>+</button>  
                    <button size={'5px'} onClick={() => removeItemFromCart(food.id)}>Delete</button> 
                  </div> 
                </div> 
            </div>          
          </FoodCard>
          )
        }
      )}
      {saveButton}
    </BoxContainer>
  );  
}