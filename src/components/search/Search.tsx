import React, { useState } from "react";
import "./search.scss";

interface ISearch {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}
const Search: React.FC<ISearch> = (props) => {
  const { setKeyword } = props;
  const [text, setText] = useState("");

  const onHandleSubmit = (event: any) => {
    event.preventDefault();
    setKeyword(text);
  };
  return (
    <form className="search" onSubmit={onHandleSubmit}>
      <div className="search__input">
        <input
          type="text"
          placeholder="Search your product"
          onChange={(event) => setText(event.target.value)}
        />
        <i className="fas fa-search" onClick={onHandleSubmit}></i>
      </div>
    </form>
  );
};

export default Search;
