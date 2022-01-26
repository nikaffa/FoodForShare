import React from "react";
import { BrandLogo } from "../components/BrandLogo";
import { Marginer } from "../components/Marginer";
import {PageContainer, InnerPageContainer, BackgroundContainer}from "../components/PageContainer";
import { Button } from "../components/Button"
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { Carousel } from "../components/Carousel";
import styled from "styled-components";
import Counter from "../components/Countup";



export default function Main (props) {
  const { logoSize, hideLogo } = props;

  return (
    <PageContainer>
      <Navbar useTransparent />
      <Marginer direction="vertical" margin="4em"/>
      <InnerPageContainer>
      <Marginer direction="vertical" margin="1em"/>
        <BackgroundContainer box-shadow="0px 0px 0px rgba(0, 0, 0, 0)">
          <Marginer direction="vertical" margin="3em" />
          <Link to="/donation/new">
            <Button>Donate Food</Button>
          </Link>
          <Marginer direction="horizontal" margin="5em" />
          <Link to="/donation/search">
            <Button>Search Food</Button>
          </Link>
        </BackgroundContainer>
        <Marginer direction="vertical" margin="2em" />
        <Carousel />
        <Counter/>
        
      </InnerPageContainer>
    </PageContainer>

  )
}