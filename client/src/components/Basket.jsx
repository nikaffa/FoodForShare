import React from 'react';
import BasketItems from './BasketItems';

export default function Basket(probs) {
  const {basketItems, onAddBasket} = probs
  return (
    <div>
      {basketItems.map(product => (
          <BasketItems key={product.id} product={product} onAddBasket={onAddBasket}></BasketItems>
        ))}
    </div>
  );
}
