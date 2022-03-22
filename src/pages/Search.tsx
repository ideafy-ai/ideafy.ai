import "../_globals/global.scss";
import blue from "../assets/blue.png";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
function Search() {
  return (
    <div className="container flex-12 flex h-100 wrap column">
        <h1 className="title">
            Search using Repository Name
        </h1>
        <SearchBar style={"big"} placeholder={"Type the repository's name"}/>
        <div className="card-container">
            <Card />
        </div>
    </div>
  );
}

export default Search;
