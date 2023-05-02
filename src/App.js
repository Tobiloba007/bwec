import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Donate from "./pages/Donate";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/programs' element={<Programs />} />
      <Route path='/events' element={<Events />} />
      <Route path='/donate' element={<Donate />} />
    </Routes>
  );
}

export default App;
