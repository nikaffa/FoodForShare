import React from 'react';
import ReactDOM from 'react-dom'
import Slider from 'react-styled-carousel';

export const ExampleSlider = () => (
  <Slider>
    <h1>1</h1>
    <h1>2</h1>
    <h1>3</h1>
    <h1>4</h1>
  </Slider>
);

ReactDOM.render(<ExampleSlider />, document.getElementById('root'));