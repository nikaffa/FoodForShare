import { useState, useRef, useEffect } from "react";
import styled from 'styled-components';
import { InnerPageContainer } from './PageContainer';
import { SubmitButton } from "./Common";
import useUser from "../hooks/useUser";
import axios from "axios";

const DonationCard = styled.div`
  display: grid;
  width:70%;
  justify-items: stretch;
  background-color: #fff;
  border: solid 0.25px #707070;
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
  
`;

export default function DonationContainer({ donations }) {
  const { user } = useUser();
  const [complete, setComplete] = useState();
  // const cancelRef = useRef(cancel);

  // const cancelReservations = (reservation_item_id) => {
  //   axios.post(`/reservations/cancel/`, {reservation_item_id})
  //     .then(res => { 
  //       setCancel(reservation_item_id);
  //       cancelRef.current = reservation_item_id;
  //     })
  //     .catch((err) => {console.log(err)})
  // }

  const completeReservation = (reservation_item_id) => {
    axios.post(`/reservations/completed`, {reservation_item_id})
      .then(res => { 
        setComplete(reservation_item_id);
      })
      .catch((err) => {console.log(err)})
  }

  useEffect(() => {
    validateStatus(complete);
  }, [complete])

  const validateStatus = (status) => {
    if(status === 'Completed')
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
                {console.log(donations[i][0])}
    
                <h2>{donations[i][0].item_name}</h2>
                <div className="embla__slide__inner">
                  <div className="embla_left">
                    <div>
                      <img className="embla__slide__img_fit" src={donations[i][0].image} alt={donations[i][0].image} />
                    </div>  
                  </div>
                  <div className="embla_right">
                    {/* {<p>Date: {donations[i][0].donation_date}</p>} */}
                    {<h3>Portions left: {donations[i][0].leftover}</h3>}  
                  </div>
                </div>
                {Object.keys(donation).map((j) => {
                  const sindon = donation[j]
                  return(
                    (sindon.reserve_name &&
                    <div className="embla__slide__inner">
                      <div className="embla_left">
                        <p><b>Reserved by:</b> {sindon.reserve_name}</p>
                        {/* <p>Reservation: {sindon.reservation_date}</p> */}
                        <p>Quantity: {sindon.quantity}</p>
                      </div>
                      <div className="embla_right">
                      <p><b>Status:</b> {donations[i][0].status}</p>
                        {/* {validateStatus(sindon.i_status) && <button size={'5px'} key={sindon.reservation_item_id+'_1'} onClick={() => cancelReservations(sindon.reservation_item_id)}>Cancel</button>} */}
                        {validateStatus(sindon.i_status) && <SubmitButton size={'25px'} key={sindon.reservation_item_id+'_2'} onClick={() => completeReservation(sindon.reservation_item_id)}>Complete</SubmitButton>}
                        {/* {!validateStatus(sindon.i_status) && 'Cancelled'} */}
                      </div>
                    </div>)
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