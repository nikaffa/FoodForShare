import React from "react";
import styled from 'styled-components'
import useUser from "../hooks/useUser";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  BoxContainer,
  SubmitButton,
} from "./Common";
import "../embla.css";

const FoodCard = styled.div`
  display: grid;
  width:70%;
  justify-items: stretch;
  align-items: center;
  background-color: #fff;
  border: solid 0.25px #707070;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin: 10px;`

export default function ReservationsList() {
  const { user } = useUser();
  const [reservations, setReservations] = useState({});
  const [cancel, setCancel] = useState();

  function getReservations()
  {
    // console.log(user);
    user && axios.get(`/reservations/user/${user}`)
      .then(res => { 
        setReservations(res.data);
      })
      .catch((err) => {console.log(err)}) 
  }

  const cancelReservations = (reservation_item_id) => {
    axios.post(`/reservations/cancel`, {reservation_item_id})
      .then(res => { 
        setCancel(res.data);
      })
      .catch((err) => {console.log(err)})
    
  }

  useEffect(() => {
    getReservations()
  }, [cancel])

  useEffect(() => {
    getReservations()
  }, [user])

  const validateStatus = (status) => {
    if(status === 'Completed' || status === 'Cancelled')
      return false;
    return true
  }

  return (
    <BoxContainer style={{width: "60%"}}>
      {reservations && Object.keys(reservations).length && (
        Object.keys(reservations).map((i) => {
          const reservation = reservations[i];
          // const date = new Date(reservations[i][0].reservation_date)
          return(
            <FoodCard key={reservations[i][0].reservation_id}>
              <h3>RESERVATION # {reservations[i][0].reservation_id}</h3>
              <div className="embla__slide__inner">
                <div className="embla_left">
                  <div>
                    <img className="embla__slide__img_fit" src={reservations[i][0].image} alt="food" />
                  </div>  
                </div>
                <div className="embla_right">
                  {Object.keys(reservation).map((j) => {
                    const sinres = reservation[j]
                    return(
                      <>
                        <p>Date: {reservations[i][0].reservation_date}</p>
                        <p>Reservation Status: <span style={{backgroundColor: "lightcoral"}}>{reservations[i][0].status}</span></p>
                        <p>Food: {reservations[i][0].item_name}</p>
                        {validateStatus(sinres.i_status) && <SubmitButton size={'25px'} onClick={()=> cancelReservations(reservations[i][0].reservation_id)}>Cancel</SubmitButton>}
                        {!validateStatus(sinres.i_status) && <p>Item Status: {sinres.i_status}</p>}
                      </>
                    )
                  })}
                </div> 
              </div>
              
            </FoodCard>
          )
        })
      )}
    </BoxContainer>
  );
}
