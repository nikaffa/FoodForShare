import React from 'react';
import ProductList from './ProductList';

export default function Product(props) {
  const {basketItems, setBasketItems} = props;


  const data = [
      {
        id: '1',
        name: 'MacBook',
        quantity: 1400,
      },
      {
        id: '2',
        name: 'Old Car',
        quantity: 2400,
      },
      {
        id: '3',
        name: 'W Shoes',
        quantity: 1000,
      },
      {
        id: '4',
        name: 'Green Shoes',
        quantity: 1100,
      },
    ];

  return (
    <div>
      {data.map(product => (
          <ProductList key={product.id} product={product} onAddBasket={onAddBasket}></ProductList>
        ))}
    </div>
  );
}




