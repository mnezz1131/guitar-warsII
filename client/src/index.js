import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import GuitarWars from "../src/Screens/GuitarWars/GuitarWars.jsx"
import GuitarSearch from "../src/Screens/GuitarResearch/GuitarResearch.jsx";
import GuitarVids from "../src/Screens/GuitarsVids/GuitarVids.jsx";
import GuitarList from "../src/Screens/GuitarList/GuitarList.jsx"


import Home from "../src/Screens/Home/Home.jsx";

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
         <Route path="home" element={<Home />} />
         <Route path="guitar-wars" element={<GuitarWars />} />
         <Route path="guitar-wiki" element={<GuitarSearch />} />
        <Route path="guitar-vids" element={<GuitarVids />} />
        <Route path="guitar-list" element={<GuitarList />} />
        
          
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
