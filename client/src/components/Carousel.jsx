import React from "react";
import styled from "styled-components";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' },
  { url: 'https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png' },
  { url: 'https://www.w3schools.com/w3css/img_lights.jpg' }
]

const carouselContainer = styled.div`
width: 80%;
height: 50vh;
border: 1px solid black;
margin: 10px auto;

`

const imageContainer = styled.div`
width: 80%;
height: 80%;
display: flex;

`

const image = styled.div `
width: 100%;
height: 100%;

`

export function Carousel() {

 return (
  <carouselContainer>
    <SimpleImageSlider
      width={896}
      height={400}
      images={images}
      showBullets={true}
      showNavs={true}
      autoPlay={true}
      
    />
  </carouselContainer>

  )
};
