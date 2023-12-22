// Producto.js
import React, { useState, useEffect } from 'react';
import './App.css';
import ProductModal from './ProductModal';

const Producto = () => {
    const [productos, setProductos] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        // Aquí puedes realizar una llamada a una API o cargar los datos de otra manera
        // Aquí se asume un array de productos con información, incluyendo las rutas de las imágenes
        const productosData = [
            { nombre: 'Remera bebe', categoria: 'remeras', imagen: '/imagen/remeras/remera01.jpg', talle: '1 al 4', precio: 5500 },
            { nombre: 'Remera bebe', categoria: 'remeras', imagen: '/imagen/remeras/remera02.jpg', talle: '1 al 4', precio: 5500 },
            { nombre: 'Remera bebe', categoria: 'remeras', imagen: '/imagen/remeras/remera03.jpg', talle: '1 al 4', precio: 5500 },

            { nombre: 'Short bebe', categoria: 'pantalones', imagen: '/imagen/pantalones/pantalon01.jpg', talle: ' 1 al 4', precio: 4200 },
            { nombre: 'Short bebe', categoria: 'pantalones', imagen: '/imagen/pantalones/pantalon02.jpg', talle: '1 al 4', precio: 4200 },
            { nombre: 'Short bebe', categoria: 'pantalones', imagen: '/imagen/pantalones/pantalon03.jpg', talle: '1 al 4', precio: 4200 },

            { nombre: 'Vestido Rosa con Mariposas', categoria: 'vestidos', imagen: '/imagen/vestidos/vestido01.jpeg', talle: '0 al 4', precio:  9500 },
            { nombre: 'Vestido Beba Blanco flores rosas', categoria: 'vestidos', imagen: '/imagen/vestidos/vestido02.jpeg', talle: '0 al 4', precio: 9500 },
            { nombre: 'Vestido Rojo y Blanco', categoria: 'vestidos', imagen: '/imagen/vestidos/vestido03.jpeg', talle: '0 al 4', precio: 9500 },
            { nombre: 'Vestido Rojo y Blanco', categoria: 'vestidos', imagen: '/imagen/vestidos/vestido04.jpeg', talle: '0 al 4', precio: 9500 },
            { nombre: 'Vestido Rosa con Mariposoas', categoria: 'vestidos', imagen: '/imagen/vestidos/vestido05.jpeg', talle: '0 al 4', precio: 9500 },
            { nombre: 'Vestido Rosa con breteles', categoria: 'vestidos', imagen: '/imagen/vestidos/vestido06.jpeg', talle: '0 al 4', precio: 9500 },
            { nombre: 'Vestido Blanco con Flores azules', categoria: 'vestidos', imagen: '/imagen/vestidos/vestido07.jpeg', talle: '0 al 4', precio: 9500 },
            { nombre: 'Vestido Blanco con Flores azules', categoria: 'vestidos', imagen: '/imagen/vestidos/vestido08.jpeg', talle: '0 al 4', precio: 9500 },
            { nombre: 'Vestido Algodon flores', categoria: 'vestidos', imagen: '/imagen/vestidos/vestido09.jpeg', talle: '1 y 4', precio: 8000 },
            { nombre: 'Vestido Blanco con flores', categoria: 'vestidos', imagen: '/imagen/vestidos/vestido10.jpeg', talle: '0 al 4', precio: 9500 },

            { nombre: 'Set amamantador, cuellito, sonajero, gimnasio, cambiardor', categoria: 'accesorios', imagen: '/imagen/accesorios/accesorio01.jpg', talle: 'U', precio: 15000 },
            { nombre: 'Accesorio', categoria: 'accesorios', imagen: '/imagen/accesorios/accesorio02.jpg', talle: 'U', precio: 0 },
            { nombre: 'Accesorio', categoria: 'accesorios', imagen: '/imagen/accesorios/accesorio03.jpg', talle: 'U', precio: 0 },
            { nombre: 'Accesorio', categoria: 'accesorios', imagen: '/imagen/accesorios/accesorio04.jpg', talle: 'U', precio: 0 },
            { nombre: 'Cuellito bebe', categoria: 'accesorios', imagen: '/imagen/accesorios/accesorio05.jpeg', talle: 'U', precio: 5500 },
            { nombre: 'Cuellito bebe', categoria: 'accesorios', imagen: '/imagen/accesorios/accesorio06.jpeg', talle: 'U', precio: 5500 },
            { nombre: 'Cuellito bebe', categoria: 'accesorios', imagen: '/imagen/accesorios/accesorio07.jpeg', talle: 'U', precio: 5500 },
            { nombre: 'Almohada bebe', categoria: 'accesorios', imagen: '/imagen/accesorios/accesorio08.jpeg', talle: 'U', precio: 3500 },
            { nombre: 'Cuellito bebe', categoria: 'accesorios', imagen: '/imagen/accesorios/accesorio09.jpeg', talle: 'U', precio: 5500 },
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
        <div className="App">
            {/*<header>
                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Productos</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
    </header>*/}

            <main className="MainContainer">

                <aside>
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
                </aside>

                <section id="productos">
                    {/* Aquí se mostrarán los productos */}

                    {productos
                        .filter((producto) => !categoriaSeleccionada || producto.categoria === categoriaSeleccionada)
                        .map((producto, index) => (
                            <div className="producto" key={index} onClick={() => handleOpenModal(producto)}>
                                {/* ... (código existente) */}
                                <img src={producto.imagen} alt={producto.nombre} />
                                <h3>{producto.nombre}</h3>
                                <p>Talle: {producto.talle}</p>
                                <p>Precio: ${producto.precio}</p>
                            </div>
                        ))}

                    {/*<div className="producto">
              <img src="imagen/remeras/remera01.jpg" alt="Remera 1" />
              <h3>Remera 1</h3>
              <p>Talle: S</p>
              <p>Precio: $20</p>
            </div>
            <div className="producto">
              <img src="imagen/remeras/remera02.jpg" alt="Remera 2" />
              <h3>Remera 2</h3>
              <p>Talle: S</p>
              <p>Precio: $20</p>
            </div>
            <div className="producto">
              <img src="imagen/remeras/remera03.jpg" alt="Remera 3" />
              <h3>Remera 3</h3>
              <p>Talle: S</p>
              <p>Precio: $20</p>
            </div>*/}




                </section>
            </main>

            {selectedProduct && (
                <ProductModal producto={selectedProduct} onClose={handleCloseModal} />
            )}

        </div>
    );
};

export default Producto;