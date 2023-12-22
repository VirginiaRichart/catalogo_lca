// CarruselHome.js
import React from 'react';
import './App.css';

const CarruselHome = () => {
  // Aquí puedes implementar el carrusel de imágenes
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/imagen/vestidos/vestido02.jpeg" className="d-block w-100 img-fluid custom-carousel-img" alt="Vestidos"/>
        </div>
        <div className="carousel-item">
          <img src="/imagen/accesorios/accesorio01.jpg" className="d-block w-100 img-fluid custom-carousel-img" alt="Accesorios"/>
        </div>
        <div className="carousel-item">
          <img src="/imagen/remeras/remera01.jpg" className="d-block w-100 img-fluid custom-carousel-img" alt="Remeras"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarruselHome;
