import styled from 'styled-components'
import { InnerPageContainer } from './PageContainer'
import useCart from '../hooks/useCart'
import Countdown from 'react-countdown';

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
  const { cart, addItemToCart } = useCart();
  
  // console.log(cart)  
  
  return (
    <InnerPageContainer>
      <FoodBoxContainer>
        {Object.keys(foods).map((i) => {
          const food = foods[i];
         
          const subset = ['id', 'name', 'freshness', 'image', 'leftover'].reduce((a, e) => (a[e] = food[e], a), {})
          
          const date = new Date(food.donation_date);
          const timeLeft = date.getTime() + food.freshness * 3600000;
          const isFresh = Date.now()-(date.getTime() + food.freshness * 3600000);
          const renderer = ({days, hours, minutes, seconds}) => {
            return (
              <span>{days} days {hours} hours {minutes}:{seconds} minutes</span>
            )
          }

          //check availability & freshness
          if (food.leftover > 0 && isFresh < 0 ) {
            return (  
            <FoodCard key={`{food.id}.${i}`}>
              <h3 >{food.name}</h3>
              <h3 >{food.description}</h3>
              <h3 >{food.food_type}</h3>
              <h3>Ends in <strong><Countdown date={timeLeft} renderer={renderer} /></strong></h3>
              <h3 >{food.leftover} left</h3>
              
              <button size={'25px'} onClick={() => addItemToCart(subset)}>Reserve</button>              
            </FoodCard>
            )
          }
          else {
            return null
          }
        })}
      </FoodBoxContainer>
    </InnerPageContainer>
  )
}
