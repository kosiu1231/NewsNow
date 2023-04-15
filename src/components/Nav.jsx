import React from "react";
import "../App.css";

const Nav = () => {
    return (
        <div className="navContainer">
            <nav>
                <div className="header">
                    <img className="logo" src="/logo-globe.png" alt="logo" />
                    <h1 className="headerName">
                        <strong>News</strong>Now
                    </h1>
                </div>
                <div className="search">searchbox</div>
                <div className="categories">
                    <h2>Categories</h2>
                    <ul>
                        <li>Element 1</li>
                        <li>Element 2</li>
                        <li>Element 3</li>
                    </ul>
                </div>
                <footer>
                    <p>
                        Made by <a href="https://github.com/kosiu1231">Kosiu</a>{" "}
                        using <a href="https://newsapi.org/">NewsApi</a>
                    </p>
                </footer>
            </nav>
        </div>
    );
};

export default Nav;
