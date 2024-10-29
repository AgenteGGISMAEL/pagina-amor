import React, { useState } from 'react';
import './App.css';
import { Fade, Zoom } from 'react-awesome-reveal';
import tulipImg from './assets/tulipan1.png'; // Asegúrate de importar las imágenes
import loveImg from './assets/gatos.jpg';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [heartSize, setHeartSize] = useState(1);

  const handleOpenCard = () => setIsOpen(true);
  const handleHeartClick = () => setHeartSize(prevSize => prevSize + 0.1);

  return (
    <div className="page-container">
      {!isOpen ? (
        <div className="closed-card" onClick={handleOpenCard}>
          <p className="open-message">Ábreme</p>
        </div>
      ) : (
        <div className="open-card">
          {/* Título */}
          <Zoom>
            <h1 className="dear-andre">Dear Andre,</h1>
          </Zoom>

          {/* Texto romántico */}
          <Fade cascade>
            <p>Hoy celebramos 200 días juntos. 🌹</p>
            <p>Gracias por ser mi novia y por hacerme feliz. 🥰</p>
          </Fade>

          {/* Imagen especial */}
          <img src={loveImg} alt="Un momento especial" className="love-image" />

          {/* Corazón interactivo */}
          <div className="heart-container">
            <button
              className="heart-button"
              onClick={handleHeartClick}
              style={{ transform: `scale(${heartSize})` }}
            >
              ❤️
            </button>
            <p className="heart-message">¡Haz clic en el corazón!</p>
          </div>

          {/* Contenedor del contenido */}
          <div className="content-container">
            <div className="poem-container">
              <img src={tulipImg} alt="Tulipán" className="tulip" />
              <h2>Te amo</h2>
              <p className="poem-text">
                "Te amo con mi alma, sin medida,<br />
                en cada suspiro, en cada herida.<br />
                Eres mi luz, mi paz y mi canto,<br />
                un amor eterno que jamás me plantó.<br />
                En cada latido, en cada mirada,<br />
                te llevo en mi ser, mi vida sagrada.<br />
                Contigo quiero soñar y volar,<br />
                ya que mi amor por ti nunca tendrá un final." 🌻
              </p>
            </div>

            <div className="message-container">
              <img src={tulipImg} alt="Tulipán" className="tulip" />
              <h3>Dear Andre</h3>
              <p className="message-text">
                "Quería escribir algo memorable, algo que solo tú puedas leer. Te amo. Sé que lo he dicho varias veces, pero para mí esa palabra no la diría a cualquiera. Cuando te lo dije por primera vez, sabía que se lo decía a la persona correcta. Tú no solo tocaste mi corazón, sino también mi alma, y convertiste mi mundo de caos en tranquilidad. No me interesa conocer a otras personas porque tenerte en mi vida es suficiente para mí.  
                A veces me río al pensar que saqué mi forma de amar de las películas de Adam Sandler, pero me encanta expresarlo contigo. Quiero que te enamores de mí cada día como si fuera la primera vez, sin importar cuántos intentos necesite. Gracias por amarme tal como soy, incluso cuando soy un poco pesado. Gracias por hacerme feliz y ser mi razón para levantarme cada día, sin importar cuán cansado esté. TE AMO Y SOLO TE AMARÉ A TI en todo lo que me quede de vida." ❤️  
                <br /> "1 de 10"
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;


