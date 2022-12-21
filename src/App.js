import React from 'react'
import { BrowserRouter, Link } from "react-router-dom"
import './App.css'
import { Routes } from './Routes'


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Link to="/">Recetas</Link>
          </header>

          <main>
            <Routes />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
