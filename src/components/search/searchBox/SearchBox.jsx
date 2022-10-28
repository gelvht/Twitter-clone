import { useState } from "react";

import { Search } from "@emotion-icons/bootstrap/Search";

import "./searchBox.css";
import { GetUserAPI, GetTweetAPI } from "../../../Api/Services";
import SearchResult from "../searchResult/SerachResult";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchOption, setSearchOption] = useState("user");
  const [error, setError] = useState("");
  const [result, setResult] = useState();

  const userSearch = async () => {
    try {
      await GetUserAPI(searchValue).then(
        (response) => {
          setResult({ username: searchValue, user: response.data });
        },
        (error) => {
          setError(error.response.data.message);
          setResult();
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const tweetSearch = async () => {
    try {
      await GetTweetAPI(searchValue).then(
        (response) => {
          console.log(response);
          setResult(response.data);
        },
        (error) => console.log(error)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const submitSearch = (e) => {
    if (e.keyCode == 13) {
      if (searchOption === "user") {
        userSearch();
      } else {
        tweetSearch();
      }
    }
  };

  return (
    <section className="searchbox">
      <div className="searchbox__input">
        <Search className="search__icon" />
        <input
          type="text"
          className="search__input"
          placeholder="Search Twitter"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          onKeyDown={submitSearch}
        />
      </div>
      <div className="searchbox__options">
        <label htmlFor="selectUser">Search for a user</label>
        <input
          type="radio"
          name="user"
          id="selectUser"
          value="user"
          checked={searchOption === "user"}
          onChange={(e) => setSearchOption(e.target.value)}
        />
        <label htmlFor="selectTweet">Search for a tweet</label>
        <input
          type="radio"
          name="user"
          id="selectTweet"
          value="tweet"
          checked={searchOption === "tweet"}
          onChange={(e) => setSearchOption(e.target.value)}
        />
      </div>
      {!result ? (
        <p className="search__error">{error}</p>
      ) : (
        <SearchResult username={result.username} user={result.user} />
      )}
    </section>
  );
};

export default SearchBox;
