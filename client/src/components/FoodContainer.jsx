import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SubmitButton } from './Common'
import { Marginer } from './Marginer'
import { InnerPageContainer } from './PageContainer'

const FoodCard = styled.div`
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

export default function FoodContainer({ foods }) {
  return (
    <InnerPageContainer>
      <FoodBoxContainer>
        {Object.keys(foods).map((i) => {
          const food = foods[i];

          return (
            <FoodCard key={`{food.id}.${i}`}>
              <h3 >{food.name}</h3>
              <h3 >{food.description}</h3>
              <h3 >{food.food_type}</h3>
              <h3 >{food.food_type}</h3>
              <h3 >freshness: {food.freshness}</h3>
              <h3 >{food.leftover} portions left</h3>
              <Link to={`/reservation/new`}>
                <SubmitButton size={'25px'}>Reserve</SubmitButton>
              </Link> 
              
            </FoodCard>
          )
          }
        )}
      </FoodBoxContainer>
    </InnerPageContainer>
  )
}
