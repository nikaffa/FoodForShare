import React from "react";
import styled from "styled-components";
import { BrandLogo, LogoTitle } from "./BrandLogo";
import { Marginer } from "./Marginer";
import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import UserDropDown from "./UserDropDown";

const NavbarContainer = styled.div`
  width: 95.7%;
  height: 55px;
  max-width: ${deviceSize.laptop}px;
  max-height: ${deviceSize.laptop}px;
  overflow:hidden;
  position: fixed; top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 1.5em;
  //border: 1px solid #707070;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  &:focus {
    background: transparent;
    outline: none;
  }

  background-color: #fff;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;

  
`
;

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  //flex-direction: row;
  align-items: center;
  padding: 0px;
  transition: all 200ms ease-in-out;
  &:hover {
    color: #707070;
  }
`;

const AnchorLink = styled(Link)`
  font-family: Roboto;
  font-weight:600;
  font-style: normal;
  font-size: 15px;
  color: #black;
  transition: all 200ms ease-in-out;
  &:hover {
    color: #white;
  }
  cursor: pointer;
  text-decoration: none;
  outline: none;
  
`;

const Seperator = styled.div `
  min-height: 55%;
  width: 3px;
  background-color: #7B99ea;`;

export default function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize });
  const { logoSize, color,} = props;
  
  return (
    <NavbarContainer>
      <BrandLogo size={logoSize}>
       <LogoTitle>FoodforShare</LogoTitle>
        <AnchorLink to="/">
        </AnchorLink>
      </BrandLogo>
      <AccessibilityContainer>
        {!isMobile && <AnchorLink to="/donation/new">Donate</AnchorLink>}
        {!isMobile && <Marginer direction="horizontal" margin={25} />}
        {!isMobile && <AnchorLink to="/donations">Donations</AnchorLink>}
        {!isMobile && <Marginer direction="horizontal" margin={25} />}
        {!isMobile && <AnchorLink to="/reservations">Reservations</AnchorLink>}
        {!isMobile && <Marginer direction="horizontal" margin={25} />}
        {!isMobile && <AnchorLink to="/reservations/new">Reservation Cart</AnchorLink>}
        {!isMobile && <Marginer direction="horizontal" margin={20} />}
        {!isMobile && <Seperator />}
        {!isMobile && <Marginer direction="horizontal" margin={20} />}
        {!isMobile && <UserDropDown name="user"  />}
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
