import "./SearchInput.css";

function SearchInput({ placeholder = "Buscar..." }) {
  return (
    <div style={{marginTop: "1em"}}>
    <input
      type="text"
      className="search-input"
      placeholder={placeholder}
    />
    </div>
  );
}

export default SearchInput;
