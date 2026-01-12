import Header from "../../components/Header/Header";
import "./Home.css";
import SearchInput from "../../components/SearchInput/SearchInput";
import Footer from "../../components/Footer/Footer";
import BookCard from "../../components/BookCard/BookCard";
import books from "../../components/BookCard/BookData.js";

function Home() {

  const isMistery = true;
  const isHorror = true;
  const isSciFi = true;
  const isRomantic = true;
  const isAdventure = true;

  return (
      <main>
        <title>El rincón de Michi</title>
        <Header />
        <div className="categories" style={{marginBottom:"1em"}}>
          <SearchInput />
          <p>Elige una categoria</p>
          <button className="allButton">Todos</button>
        </div>
        <div className="buttons">
          {isMistery && <button className="buttons">Misterio</button>}
          {isHorror && <button className="buttons">Terror</button>}
          {isSciFi && <button className="buttons">Ciencia Ficcion</button>}
          {isRomantic && <button className="buttons">Romantico</button>}
          {isAdventure && <button className="buttons">Aventura</button>}
        </div>
        <div className="resent-added">
          <p>Agregados recientemente</p>
        </div>
        <section className="books-grid">
        {books.map((book) => (
          <BookCard
            key={book.id}
            imagen={book.imagen}
            titulo={book.titulo}
            descripcion={book.descripcion}
            genero={book.genero}
            paginas={book.paginas}
          />
        ))}
        </section>
        <Footer />
      </main>

  );
}

export default Home;
