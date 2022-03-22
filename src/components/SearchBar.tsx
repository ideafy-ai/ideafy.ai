import "../_globals/global.scss";
import blue from "../assets/blue.png";
function SearchBar(props : any) {
  if (props.style === "big")
    return <div className="search">
        <input id="search" placeholder="Search"></input>
        <div className="next"></div>
    </div>;
  else
    return (
      <div className="btn btn-secondary ml-10 mr-10">{props.text}</div>
    );
}

export default SearchBar;
