import React from 'react';

export default function BasketItems(props) {
  const { product, onAddBasket } = props;

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



