import styled from 'styled-components'
import { InnerPageContainer } from './PageContainer'
import useUser from "../hooks/useUser";
import axios from "axios";
import { Button } from './Button';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { SubmitButton } from './Common';

const DonationCard = styled.div`
  display: grid;
  width:70%;
  justify-items: stretch;
  background-color: #fff;
  // border: solid 0.25px #707070;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 60px;
  margin: 10px;
  font-family: Roboto;
  
`
const FoodBoxContainer= styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  background: #white;
  font-family: Roboto;
  
`;

export default function DonationContainer({ donations }) {
  const { user } = useUser();
  const [cancel, setCancel] = useState();

  const cancelReservations = (reservation_item_id) => {
    axios.post(`/reservations/cancel/`, {reservation_item_id})
      .then(res => { 
        setCancel(res.data);
      })
      .catch((err) => {console.log(err)})
  }

  useEffect(() => {
    cancelReservations()
  }, [cancel])

  const completeReservations = (reservation_item_id) => {
    axios.post(`/reservations/completed/`, {reservation_item_id})
      .then(res => { 
        setCancel(res.data);
      })
      .catch((err) => {console.log(err)})
  }


  const validateStatus = (status) => {
    if(status === 'Completed' || status === 'Cancelled')
      return false;
    return true
  }

  return (
    <InnerPageContainer>
      <FoodBoxContainer>
        {donations && Object.keys(donations).length && (
          Object.keys(donations).map((i) => {
            const donation = donations[i];
            return(
              <DonationCard key={donations[i][0].donation_id}>
                <h3>DONATION # {donations[i][0].donation_id}</h3>
                <div className="embla__slide__inner">
                  <div className="embla_left">
                    <div>
                      <img className="embla__slide__img_fit" src={donations[i][0].image} alt={donations[i][0].image} />
                    </div>  
                  </div>
                  <div className="embla_right">
                    {<p>Date: {donations[i][0].donation_date}</p>}
                    {<p>Status: {donations[i][0].status}</p>}
                    {<p>Name: {donations[i][0].item_name}</p>}
                  </div>
                </div>
                {Object.keys(donation).map((j) => {
                  const sindon = donation[j]
                  return(
                    <div className="embla__slide__inner">
                      <div className="embla_left">
                        <p>Reserver Name: {sindon.reserve_name}</p>
                        <p>Reservation: {sindon.reservation_date}</p>
                        <p>Quantity: {sindon.quantity}</p>
                      </div>
                      <div className="embla_right">
                        {validateStatus(sindon.i_status) && <SubmitButton onClick={() => cancelReservations(sindon.reservation_item_id)}>Cancel</SubmitButton>}
                        {validateStatus(sindon.i_status) && <SubmitButton onClick={() => completeReservations(sindon.reservation_item_id)}>Complete</SubmitButton>}
                        {!validateStatus(sindon.i_status) && sindon.i_status}
                      </div>
                    </div>
                  )
                })}
              </DonationCard>
            )
          })
        )}
      </FoodBoxContainer>
    </InnerPageContainer>
  )
}