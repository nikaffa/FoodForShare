import styled from 'styled-components'
import { InnerPageContainer } from './PageContainer'

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
  return (
    <InnerPageContainer>
      <FoodBoxContainer>
        {Object.keys(donations).map((i) => {
          const donation = donations[i];

           //check availability & freshness
          if (donation.leftover > 0) {
            return (
            <DonationCard key={`{donation.id}.${i}`}>
              <h3 >ID # {donation.id}</h3>
              <h3 >Status {donation.status}</h3>
              <h3 >Food {donation.name}</h3>
              <h3 >Quantity {donation.quantity}</h3>
              <h3 >Left {donation.leftover} portions</h3>
            </DonationCard>
            ) 
          }else {
            return null
          }
        })}
      </FoodBoxContainer>
    </InnerPageContainer>
  )
}
