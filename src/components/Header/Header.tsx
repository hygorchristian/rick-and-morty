import React from "react";
import { FaSearch } from "react-icons/fa";
import "./style.scss";

function Header() {
  return (
    <header>
      <nav>
        <h1>Rick and Morty</h1>
        <div className="input">
          <FaSearch size={20} />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=73a9df4b7bd1b330db1e903e08575ec1"
          alt=""
          className="avatar"
        />
      </nav>
    </header>
  );
}

export default Header;
