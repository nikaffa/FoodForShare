import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import { Marginer } from "./Marginer";


const CounterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  //height: 30vh;
  background: #fff;
  align-item: center;
  margin: 1em;
  border-top: 10px double #707070;
  border-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
`;

const Count = styled.div `
  font-family: roboto;
  font-weight: 600;
  font-size: 80px;
  padding: 60px;
  margin-right: 80px;

`;
const CounterTitle = styled.div`
  display: flex;
  //align-item: flex-start;
  margin-top: 2em;
  font-family: roboto;
  font-weight: 200;
  font-size: 21px;
  text-color: #fff;
`;

 export default function Counter() {

  const CountUp = ({start = 0, end, timer = 50}) => {
    const [state, setState] = useState(null);
    const ref = useRef(start);
  
    const accumulator = end /200;
  
    const updateCounterState = () => {
      if (ref.current < end) {
        const result = Math.ceil(ref.current + accumulator)
        if (result > end) return setState(end);
        setState(result);
        ref.current = result;
      }
      setTimeout(updateCounterState , timer);
    };
    useEffect(() => {
      let isMounted = true;
      if (isMounted) {
        updateCounterState();
      }
      return () => (isMounted=false);
    }, [end, start]);
    return <div>{state}</div>;
  }
  
  return (
    <CounterContainer>
      <Marginer direction="horizontal" margin="1em" />
      <Count>
      <CountUp end={500} start={300} timer={48}/>
        <CounterTitle>Number of Food Donated</CounterTitle>
      </Count>
      <Marginer direction="horizontal" margin="1em" />
      <Count>
      <CountUp end={60} start={30} timer={98}/>
        <CounterTitle>Number of Hearts Full</CounterTitle>
      </Count> 
        
      <Count>
      <CountUp end={20} start={5} timer={195}/>
        <CounterTitle>Number of Sponsors</CounterTitle>
      </Count> 
    </CounterContainer>
    
  )
}
