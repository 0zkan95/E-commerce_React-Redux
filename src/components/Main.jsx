import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import NavigateButtons from './NavigateButtons';
import ProductSection from './ProductSection';
import Footer from './Footer';


const Main = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <NavigateButtons />
      <ProductSection />
      <Footer />
    </>
  )
}

export default Main
