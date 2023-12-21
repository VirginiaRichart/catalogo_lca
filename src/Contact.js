// Contact.js
import React from 'react';


const Contact = () => {
  // Reemplaza 'nombreDeUsuario' con el nombre de usuario de tu cuenta de Instagram
  const instagramLink = 'https://www.instagram.com/la_casita_delarbol_?igshid=YTQwZjQ0NmI0OA==/';

  return (
    <div style={{ width: '100%', margin: 'auto', backgroundColor: '#aaf0d1' /* Color verde agua */ }}>

      <p style={{ textAlign: 'center', marginTop: '20px', backgroundColor: '#aaf0d1', padding: '10px' }}>
        <span style={{ fontSize: '18px' }}>Síguenos en</span>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
          <img src="/instagram.jpg" alt="Instagram" style={{ width: '30px', height: '30px' }} />
        </a>
      </p>

      <p style={{ textAlign: 'center', marginTop: '20px', backgroundColor: '#aaf0d1', padding: '10px' }}>
        <span style={{ fontSize: '18px' }}>Contáctanos en WhatsApp 358-4174408:</span>
        <a href="https://wa.me/3584174408" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
          <img src="/whatsapp.jpg" alt="WhatsApp" style={{ width: '30px', height: '30px' }} />
        </a>
      </p>

      <p style={{ textAlign: 'center', marginTop: '20px', backgroundColor: '#aaf0d1', padding: '10px' }}>
        <span style={{ fontSize: '18px' }}>Ubicación: Colón 279 - Río Cuarto - Córdoba - Argentina:</span>
      </p>
 

    </div>
  );
};

export default Contact;
