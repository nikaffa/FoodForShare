import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SubmitButton } from './Common'
import { Marginer } from './Marginer'
import { InnerPageContainer } from './PageContainer'
import axios from 'axios';
export const ContentCard = styled.div`
  display: flex;
  width:70%;
  align-items: flex-start;
  background-color: #fff;
  border: solid 0.25px #707070;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ layout }) => layout || 'row'};
  img {
    width: 80%;
  }
  & > div {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
export default function Card({ item: { title, foodType, freshness, description, quantity, address, status } }) {

    axios.get(`http://localhost:3000/donations`,
    { title: title,
      foodType: foodType,
      freshness: freshness, 
      description: description, 
      quantity: quantity, 
      address: address, 
      status: status
    })
    .then((res)=>{
      console.log('donationsgetreq',res)
    })
    .catch((err)=> {
      console.log('ERROR', err)
    });

  return (
    <InnerPageContainer>
      <div>hello</div>
      <ContentCard props={props}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{freshness}</p>
          <p>{quantity}</p>
          <p>{status}</p>
        </div>
        <div>
        </div>
      </ContentCard>
    </InnerPageContainer>
  )
}