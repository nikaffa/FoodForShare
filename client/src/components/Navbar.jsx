import React from "react";
import styled from "styled-components";
import { BrandLogo, LogoTitle } from "./BrandLogo";
import { Marginer } from "./Marginer";
import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";


const NavbarContainer = styled.div`
  width: 95.7%;
  height: 35px;
  max-width: ${deviceSize.laptop}px;
  max-height: ${deviceSize.laptop}px;
  overflow:hidden;
  position: sticky; top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  border: 1px solid #707070;
  background-color: #fff;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
`
;

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  transition: all 200ms ease-in-out;
  &:hover {
    color: #707070;
  }
`;

const AnchorLink = styled(Link)`
  font-family: Open Sans;
  font-style: normal;
  font-size: 12px;
  color: #black;
  transition: all 200ms ease-in-out;
  &:hover {
    color: #white;
  }
  cursor: pointer;
  text-decoration: none;
  outline: none;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  
`;

const Seperator = styled.div `
  min-height: 35%;
  width: 1px;
  background-color: #7B61FF;`;

export default function Navbar(props) {

  const isMobile = useMediaQuery({ maxWidth: deviceSize });
  const { textSize, color,} = props;

  return (
    <NavbarContainer>
      <BrandLogo>
       <LogoTitle>FoodforShare</LogoTitle>
        <AnchorLink to="/">
        </AnchorLink>
      </BrandLogo>
      <AccessibilityContainer>
      {!isMobile && <AnchorLink to="/donations">Donations</AnchorLink>}
      {!isMobile && <Marginer direction="horizontal" margin={25} />}
      {!isMobile && <AnchorLink to="/reservations">Reservations</AnchorLink>}
      {!isMobile && <Marginer direction="horizontal" margin={20} />}
      {!isMobile && <Seperator />}
      {!isMobile && <Marginer direction="horizontal" margin={8} />}
      {!isMobile && <AnchorLink to="/login">Login</AnchorLink>}
      </AccessibilityContainer>
    </NavbarContainer>
  );
}