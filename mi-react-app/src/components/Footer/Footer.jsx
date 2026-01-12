import "./Footer.css";
import books from "../../components/BookCard/BookData.js";

function Footer() {
  return (
    <footer>
        <div className="footerData">
            <p>© 2026 El rincón de Michi. Todos los derechos reservados.</p>
            <p className="last-added">Agregados recientemente:<span className="marquee-wrapper"><span className="marquee">{books[0].titulo}, {books[1].titulo}, {books[2].titulo}</span></span></p>
        </div> 
    </footer>
  );
}

export default Footer;