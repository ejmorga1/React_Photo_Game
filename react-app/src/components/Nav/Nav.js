import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar sticky-top navbar-dark bg-dark">
        <a className="navbar-brand text-light">React Photo Game</a>
        <span className="navbar-text">
            Score: {props.score} | Top Score: {props.top}
        </span>
    </nav>
);

export default Nav;

