import React from "react";
import styled from "styled-components";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: 'https://www.themississaugafoodbank.org/wp-content/uploads/2017/06/hero-image@2x.png' },
  { url: 'https://northyorkharvest.com/wp-content/uploads/2021/07/shutterstock_1707843961_rev.jpg' },
  { url: 'https://www.ottawalife.com/admin/cms/images/small/91707h.jpg' },
  { url: 'https://github.com/nikaffa/final/blob/19e2f6070b98162c7695ff13cc2b5bd14b8208c5/client/src/images/Foodforshare.png'}
]

const carouselContainer = styled.div`
width: 60%;
height: 20vh;
// border: 1px solid black;
margin: 10px auto;
box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
`

const imageContainer = styled.div`
width: 50%;
height: 50%;
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
      width={800}
      height={400}
      images={images}
      showBullets={true}
      showNavs={true}
      autoPlay={true}
      
    />
  </carouselContainer>

  )
};
