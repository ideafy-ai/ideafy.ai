import "../_globals/global.scss";
function SearchBar(props: any) {
  return (
    <div className="search big">
      <input id="search" placeholder={props.placeholder}></input>
      <div className="next flex">Go</div>
    </div>
  );
}

export default SearchBar;
