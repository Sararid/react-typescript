import React, { useRef } from "react";
//style
import "./App.css";
//navigation 
import { Routes, Route } from "react-router-dom";
//components
import Favorites from "./pages/Favorites";
import Home from "./pages/layout/Home/Home";
import NoPage from "./pages/NoPage";
import Layout from "./pages/layout/Layout";

function App() {
 
  //useref es un hook donde guardo un valor que se va a guardar grardado entre renderizados pero que no va a provocar un renderizado

  const divRef = useRef<HTMLDivElement>(null)

 
  return (
    <>  <div className="App" ref={divRef}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes> 
    </div> 
     
    </>
  );
   
   
}

export default App;
