import "../_globals/global.scss";
import blue from "../assets/blue.png";
import SearchBar from "../components/SearchBar";
function Search() {
  return (
    <div className="container flex-12 flex h-100 wrap column">
        <h1 className="title">
            Search using Repository Name
        </h1>
        <SearchBar style={"big"}/>
    </div>
  );
}

export default Search;
