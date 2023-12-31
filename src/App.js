import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ProductModal from './ProductModal';
import Home from './Home';
import Producto from './Producto';
import AboutUs from './AboutUs';
import Contact from './Contact';


function App() {

  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Aquí puedes realizar una llamada a una API o cargar los datos de otra manera
    // Aquí se asume un array de productos con información, incluyendo las rutas de las imágenes
    const productosData = [
      { nombre: 'Remera 1', categoria: 'remeras', imagen: '/imagen/remeras/remera01.jpg', talle: 'S', precio: 20 },
      { nombre: 'Remera 2', categoria: 'remeras', imagen: '/imagen/remeras/remera02.jpg', talle: 'S', precio: 30 },
      { nombre: 'Remera 3', categoria: 'remeras', imagen: '/imagen/remeras/remera03.jpg', talle: 'S', precio: 40 },

      { nombre: 'Pantalón 1', categoria: 'pantalones', imagen: '/imagen/pantalones/pantalon01.jpg', talle: 'S', precio: 40 },
      { nombre: 'Pantalón 2', categoria: 'pantalones', imagen: '/imagen/pantalones/pantalon02.jpg', talle: 'S', precio: 40 },
      { nombre: 'Pantalón 3', categoria: 'pantalones', imagen: '/imagen/pantalones/pantalon03.jpg', talle: 'S', precio: 40 },

      { nombre: 'Vestido 1', categoria: 'vestidos', imagen: '/imagen/vestidos/vestido01.jpg', talle: 'S', precio: 40 },
      { nombre: 'Vestido 2', categoria: 'vestidos', imagen: '/imagen/vestidos/vestido02.jpg', talle: 'S', precio: 40 },
      { nombre: 'Vestido 3', categoria: 'vestidos', imagen: '/imagen/vestidos/vestido03.jpg', talle: 'S', precio: 40 },

      { nombre: 'Accesorio 1', categoria: 'accesorios', imagen: '/imagen/accesorios/accesorio01.jpg', talle: 'S', precio: 40 },
      { nombre: 'Accesorio 2', categoria: 'accesorios', imagen: '/imagen/accesorios/accesorio02.jpg', talle: 'S', precio: 40 },
      { nombre: 'Accesorio 3', categoria: 'accesorios', imagen: '/imagen/accesorios/accesorio03.jpg', talle: 'S', precio: 40 },
      { nombre: 'Accesorio 4', categoria: 'accesorios', imagen: '/imagen/accesorios/accesorio04.jpg', talle: 'S', precio: 40 },

      // Agrega más productos según sea necesario
    ];

    setProductos(productosData);
  }, []);

  const handleClickCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const handleOpenModal = (producto) => {
    setSelectedProduct(producto);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };


  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/producto">Producto</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </header>

        <main className="MainContainer">

          
          

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/producto" element={<Producto />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/contacto" element={<Contact />} />
            {/* Agrega más rutas según sea necesario */}
          </Routes>
          

          {/*<aside>
            <h2>Categorías</h2>
            <ul>

              <li
                onClick={() => handleClickCategoria('remeras')}
                className={categoriaSeleccionada === 'remeras' ? 'active' : ''}
              >
                <a href="#">Remeras</a>
              </li>
              <li
                onClick={() => handleClickCategoria('pantalones')}
                className={categoriaSeleccionada === 'pantalones' ? 'active' : ''}
              >
                <a href="#">Pantalones</a>
              </li>
              <li
                onClick={() => handleClickCategoria('vestidos')}
                className={categoriaSeleccionada === 'vestidos' ? 'active' : ''}
              >
                <a href="#">Vestidos</a>
              </li>
              <li
                onClick={() => handleClickCategoria('accesorios')}
                className={categoriaSeleccionada === 'accesorios' ? 'active' : ''}
              >
                <a href="#">Accesorios</a>
              </li>

            </ul>
  </aside>*/}

          {/*<section id="productos">
            

            {productos
              .filter((producto) => !categoriaSeleccionada || producto.categoria === categoriaSeleccionada)
              .map((producto, index) => (
                <div className="producto" key={index} onClick={() => handleOpenModal(producto)}>
                  
                  <img src={producto.imagen} alt={producto.nombre} />
                  <h3>{producto.nombre}</h3>
                  <p>Talle: {producto.talle}</p>
                  <p>Precio: ${producto.precio}</p>
                </div>
              ))}

          </section>*/}
        </main>

        <footer>
          <p>&copy; 2023 La casita del Árbol. Todos los derechos reservados.</p>
        </footer>

        {selectedProduct && (
          <ProductModal producto={selectedProduct} onClose={handleCloseModal} />
        )}

      </div>
    </Router>
  );
}

export default App;

