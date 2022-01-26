import styled from 'styled-components'
import { InnerPageContainer } from './PageContainer'
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

  const cancelReservations = (reservation_item_id, donation_item_id) => {
    axios.post(`/reservations/cancel/`, {reservation_item_id, donation_item_id})
      .then(res => { 
        //setReservations(res.data);
      })
      .catch((err) => {console.log(err)})
  }


  const completeReservations = (reservation_item_id) => {
    axios.post(`/reservations/completed/`, {reservation_item_id})
      .then(res => { 
        //setReservations(res.data);
      })
      .catch((err) => {console.log(err)})
  }

  return (
    <InnerPageContainer>
      <FoodBoxContainer>
        {donations && Object.keys(donations).length && (
          Object.keys(donations).map((i) => {
            const donation = donations[i];
            return(
              <DonationCard key={donations[i][0].donation_id}>
              {<p>Date: {donations[i][0].donation_date}</p>}
              {<p>Status: {donations[i][0].status}</p>}
              {<p>Status: {donations[i][0].item_name}</p>}
              {<p><img height="100" className="embla__slide__img_fit" src={donations[i][0].image} alt={donations[i][0].image} /></p>}
                {Object.keys(donation).map((j) => {
                  const sindon = donation[j]
                  return(
                    <>
                      <p>Name: {sindon.reservation_name}</p>
                      <p>Reservation: {sindon.reservation_date}</p>
                      <p>Quantity: {sindon.quantity}</p>
                      <button size={'5px'} onClick={() => cancelReservations(sindon.reservation_item_id, sindon.donation_id)}>Cancel</button>
                      <button size={'5px'} onClick={() => completeReservations(sindon.reservation_item_id)}>Picked Up</button>              
                    </>
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