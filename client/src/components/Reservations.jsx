import React from "react";
import styled from 'styled-components'
import useUser from "../hooks/useUser";
import axios from "axios";
import { useState, useCallback, useRef, useEffect, useContext } from "react";
import {
  BoxContainer,
  SubmitButton,
} from "./Common";
import { Link } from "react-router-dom";
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

  function getReservations()
  {
    // console.log(user);
    user && axios.get(`/reservations/user/${user}`)
      .then(res => { 
        setReservations(res.data);
      })
      .catch((err) => {console.log(err)}) 
  }

  const cancelReservations = id => {
    {user && axios.get(`/reservations/user/${user}`)
      .then(res => { 
        setReservations(res.data);
      })
      .catch((err) => {console.log(err)})
    }
  }

  useEffect(() => {
    getReservations()
  }, [user])

  return (
    <BoxContainer style={{width: "60%"}}>
      {reservations && Object.keys(reservations).length && (
        Object.keys(reservations).map((i) => {
          const reservation = reservations[i];
          // const date = new Date(reservations[i][0].reservation_date)
      
          return(
            <FoodCard key={reservations[i][0].reservation_id}>
              <h3>RESERVATION # {reservations[i][0].reservation_id}</h3>
              <p>Date: {reservations[i][0].reservation_date}</p>
              <h3>Status: <span style={{backgroundColor: "lightcoral"}}>{reservations[i][0].status}</span></h3>
              <h3>Food: </h3>
              {Object.keys(reservation).map((j) => {
                const sinres = reservation[j]
                return(
                  <div className="embla__slide__inner">
                    <div className="embla_left">
                      <div>
                        <img className="embla__slide__img_fit" src={sinres.image} alt="food" />
                      </div>  
                    </div>
                    <div className="embla_right">
                      <div className="embla_right_text" style={{fontSize: "20px"}}>
                        <h3>{sinres.name}</h3> 
                      </div>
                      <SubmitButton size={'25px'} onClick={()=> cancelReservations(sinres.reservation_id)}>Cancel</SubmitButton>              
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
