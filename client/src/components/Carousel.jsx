import React from "react";
import styled from "styled-components";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: 'https://www.themississaugafoodbank.org/wp-content/uploads/2017/06/hero-image@2x.png' },
  { url: 'https://northyorkharvest.com/wp-content/uploads/2021/07/shutterstock_1707843961_rev.jpg' },
  { url: 'https://www.ottawalife.com/admin/cms/images/small/91707h.jpg' }
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
