import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import NavigateButtons from './NavigateButtons';
import ProductSection from './ProductSection';
import Footer from './Footer';


const Main = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <NavigateButtons />
      <ProductSection />
      <Footer />
    </div>
  )
}

export default Main
