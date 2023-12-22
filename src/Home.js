// Home.js
import React from 'react';
import AboutUs from './AboutUs'; // Asumiendo que tienes un componente AboutUs
import Contact from './Contact'; // Asumiendo que tienes un componente Contact
import CarruselHome from './CarruselHome';
import Bienvenidos from './Bienvenidos';


const Home = () => {
  return (
    <div>
      <CarruselHome />
      <Bienvenidos />
      <Contact />
    </div>
  );
};

export default Home;
