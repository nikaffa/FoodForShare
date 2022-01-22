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
 
 
  
`
// align-items: flex-start;
//   background-color: #fff;
//   border: solid 0.25px #707070;
//   border-radius: 15px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
//   margin: 40px 0;
//   padding: 60px;
//   flex-direction: ${({ layout }) => layout || 'row'};
//   img {
//     width: 80%;
//   }
//   & > div {
//     flex: 1;
//   }
//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     flex-direction: column;
//   }

export default function foodCard({ foods }) {
  return (
    <InnerPageContainer>
      <FoodCard >
        <div>
          {Object.keys(foods).map((i) => {
            const food = foods[i];
            console.log(food);
            return (
              <div>
                <div>
                  <h3 >{food.name}</h3>
                  <h3 >{food.description}</h3>
                  <h3 >{food.food_type}</h3>
                  <h3 >{food.freshness}</h3>
                  <h3 >{food.leftover} portions</h3>
                  <Link to="/reservations">
                    <SubmitButton size={'25px'}>Reserve</SubmitButton>
                  </Link> 
                </div>
                <br />
                <div>

                </div>
                
              </div>
            
            )
          })}

        </div>
        
        <div>
        </div>
      </FoodCard>
    </InnerPageContainer>
  )
}
