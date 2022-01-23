import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SubmitButton } from './Common'
import { Marginer } from './Marginer'
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

          return (
            <DonationCard key={`{donation.id}.${i}`}>
              <h3 >{donation.id}</h3>
              <h3 >{donation.status}</h3>
              <h3 >{donation.name}</h3>
             
              
            </DonationCard>
          )
          }
        )}
      </FoodBoxContainer>
    </InnerPageContainer>
  )
}
