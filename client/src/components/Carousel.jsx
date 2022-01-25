import React from "react";
import styled from "styled-components";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "client/src/components/carousel_image/first.jpeg" },
  { url: "client/src/components/carousel_image/second.jpg" },
  { url: "client/src/components/carousel_image/third.jpg" }
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
      height={504}
      images={images}
      showBullets={true}
      showNavs={true}
      
    />
  </carouselContainer>

  )
};
