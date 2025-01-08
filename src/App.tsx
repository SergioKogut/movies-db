//import { useState } from 'react'
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
