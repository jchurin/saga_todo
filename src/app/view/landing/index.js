import React from 'react'
import Footer from '../footer';
import Header from '../header';
import { AppContainer } from '../shared/container';
import Todo from '../todo';

const Landing = () => {
  console.log('Landing');
  return (
    <AppContainer>
      <Header/>
      <Todo/>
      <Footer/>
    </AppContainer>
  )
}

export default Landing;