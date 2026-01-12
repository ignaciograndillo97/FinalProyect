import { useState } from "react";
import "./BookCard.css";

function BookCard({ imagen, titulo, descripcion, genero, paginas }) {
  const [expandido, setExpandido] = useState(false);

  return (
    <div className="card">
      <img src={imagen} alt={titulo} />

      <div className="card-content">
        <h3>{titulo}</h3>

        <p className={`descripcion ${expandido ? "expandida" : ""}`}>
          {descripcion}
        </p>

        <button className="ver-mas-btn"
          onClick={() => setExpandido(!expandido)}
        >
          {expandido ? "Ver menos" : "Ver más"}
        </button>

        <div className="inside-card">
          <p>Género: {genero}</p>
          <p>Páginas: {paginas}</p>
        </div>
      </div>
    </div>
  );
}
  
export default BookCard;
