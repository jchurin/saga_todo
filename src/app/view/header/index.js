import React from 'react'
import { HeaderIcon, HeaderText, HeaderWrapper } from './styled';
import headerImg from '../../img/header.png'

const Header = () => {
  console.log('Header');

  return (
    <HeaderWrapper>
      <HeaderIcon src={headerImg} />
      <HeaderText>Welcome to LeniRemember!</HeaderText>
    </HeaderWrapper>
  )
}

export default Header;