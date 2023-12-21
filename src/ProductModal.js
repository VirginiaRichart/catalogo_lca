// ProductModal.js
import React from 'react';
import './ProductModal.css';

const ProductModal = ({ producto, onClose }) => {

    const modalStyle = {
        display: producto ? 'block' : 'none', // Mostrar el modal solo si hay un producto seleccionado
    };

    return (
        <div className="modal" style={modalStyle}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <img src={producto.imagen} alt={producto.nombre} className="modal-image" />
                <h2>{producto.nombre}</h2>
                <p>Talle: {producto.talle}</p>
                <p>Precio: ${producto.precio}</p>
                {/* Agrega más detalles según sea necesario */}
            </div>
        </div>
    );
};

export default ProductModal;


