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

export default function ReservationsShow() {
  const { user } = useUser();
  const [reservations, setReservations] = useState({});

  function getReservations()
  {
    //console.log(user);
    {user && axios.get(`/reservations/user/${user}`)
      .then(res => { 
        setReservations(res.data);
      })
      .catch((err) => {console.log(err)})
    }
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
    <>
      <h1>Reservataions History for User: {user}</h1>
      <div>
        {reservations && Object.keys(reservations).length && (
          Object.keys(reservations).map((i) => {
            const reservation = reservations[i];
            return(
              <FoodCard key={reservations[i][0].reservation_id}>
              {<p>Date: {reservations[i][0].reservation_date}</p>}
              {<p>Status: {reservations[i][0].status}</p>}
                {Object.keys(reservation).map((j) => {
                  const sinres = reservation[j]
                  return(
                    <>
                      <p>Name: {sinres.name}</p>
                      <></>
                      <button size={'5px'} onClick={() => cancelReservations(sinres.reservation_id)}>Cancel</button>              
                    </>
                  )
                })}
              </FoodCard>
            )
          })
        )}
      </div>
    </>
  );
}
