import React from 'react';
import {useGlobalState} from "../GlobalState.js"


export default function ProductList(props) {
  const { product } = props;

  return (
    <div>
      <h3>{product.name}</h3>
      <div>${product.quantity}</div>
      <div>
        <button onClick={() => onAddBasket(product)}>Add To Basket</button>
      </div>
    </div>
  );
}



function onAddBasket(product){
  const [globalState, updateGlobalState] = useGlobalState()

  return <div>
  <h1>{globalState.count}</h1>
  <button onClick={() => updateGlobalState("count", globalState.count + 1)}>Add One</button>
  <button onClick={() => updateGlobalState("count", globalState.count - 1)}>Subtract One</button>
  </div>

}