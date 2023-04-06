import React, { useEffect, useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ todos, setTodos }) => {
  const [searchInp, setSearchInp] = useState("");

  useEffect(() => {
    if (searchInp) {
      const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchInp.toLowerCase())
      );
      setTodos(filteredTodos);
    }
  }, [searchInp]);

  const searchHandler = (e) => {
    setSearchInp(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        name="search"
        placeholder="Search.."
        className="search"
        onChange={searchHandler}
        value={searchInp}
      />
    </>
  );
};

export default SearchBar;
