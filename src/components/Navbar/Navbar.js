import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

const Navbar = ({ todos, setTodos }) => {
  return (
    <nav className="navbar">
      <h1>Our Application</h1>
      <SearchBar todos={todos} setTodos={setTodos} />
      <ul className="menu-list">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;

//Semantic html elements - header or we use nav, footer, main
