import React from "react";
import styled from 'styled-components'
import useUser from "../hooks/useUser";
import axios from "axios";
import { useState, useEffect } from "react";
import { BoxContainer, SubmitButton } from "./Common";
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

  return (
    <BoxContainer >
      {reservations && Object.keys(reservations).length && (
        Object.keys(reservations).map((i) => {
          const reservation = reservations[i];
          
          return(
            <FoodCard key={reservations[i][0].reservation_id}>
              <h3>RESERVATION # {reservations[i][0].reservation_id}</h3>
              <p><b>From: </b>{reservations[i][0].donor}</p>
               {Object.keys(reservation).map((j) => {
                const sinres = reservation[j]
                return(
                  <div className="embla__slide__inner">
                    <div className="embla_left" style={{width: "30%"}}>
                      <div>
                        <img className="embla__slide__img_fit" src={sinres.image} alt="food" />
                      </div>  
                    </div>
                    <div className="embla_right" style={{width: "70%"}}>
                      <div className="embla_right_text" style={{fontSize: "20px"}}>
                        <h3>{sinres.name}</h3> 
                      </div>
                      <div>
                      <SubmitButton size={'25px'} onClick={()=> cancelReservations(sinres.reservation_id)}>Cancel</SubmitButton>              
                      </div>  
                    </div> 
                  </div>

                )
              })} 
            </FoodCard>
          )
        })
      )}
    </BoxContainer>
  );
}
