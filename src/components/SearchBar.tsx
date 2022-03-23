import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../_globals/global.scss";
function SearchBar(props: any) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      navigate("/search/" + search);
      props.setLoading(true);
    }
  };
  return (
    <div className="search big">
      <input
        id="search"
        placeholder={props.placeholder}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        onKeyPress={handleKeyPress}
      ></input>
      <div
        className="next flex"
        onClick={() => {
          navigate("/search/" + search);
          props.setLoading(true);
        }}
      >
        Go
      </div>
    </div>
  );
}

export default SearchBar;
