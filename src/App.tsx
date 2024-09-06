import { useState } from 'react';

import NavBar from './_components/NavBar.tsx';
import Root from './Root/index.tsx';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Footer from './_components/Footer.tsx';

function App() {

  return (
    <>
      <NavBar />
      <Root />
      <Footer />
    </>
  )
}

export default App;
