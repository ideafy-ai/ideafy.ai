import "../_globals/global.scss";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import GithubService from "../services/Github.service";
import { useEffect, useState } from "react";
function Search() {
  const [repos, setRepos] = useState([""]);
  const [loading, setLoading] = useState(true);
  const match = { params: useParams() };
  useEffect(() => {
    GithubService.getRepositories(match.params.user!).then((res) => {
      setRepos(res);
      console.log(repos);
      setLoading(false);
    });
  }, [loading]);
  if (match.params.user && repos) {
    return (
      <div className="container flex-12 flex h-auto wrap column">
        <h1 className="title">Search using Repository Name</h1>
        <SearchBar type="big" placeholder="Type the repository's name" />
        <div className="card-container">
          {(() => {
            const cards = [];

            for (let i = 0; i <= repos.length; i++) {
              cards.push(<Card />);
            }
            return cards;
          })()}
        </div>
      </div>
    );
  }
  return (
    <div className="container flex-12 flex h-100 wrap column">
      <h1 className="title">Type in github username</h1>
      <SearchBar type="big" placeholder="Type the github username" />
    </div>
  );
}

export default Search;