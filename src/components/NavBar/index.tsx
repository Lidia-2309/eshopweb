import React from 'react';
import Logo from "../../assets/logo.svg";
import data from "../../mock/user.json";
import { LogoImg, NavbarContainer, UserContainer, UserName, UserPhoto } from './styles';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <LogoImg src={Logo} alt="Logo" />
      <UserContainer>
        <UserName>{data.name}</UserName>
        <UserPhoto src={data.photo} alt="User Photo" />
      </UserContainer>
    </NavbarContainer>
  );
};

export default Navbar;
