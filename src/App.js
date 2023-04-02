import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Programs from "./pages/Programs";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/programs' element={<Programs />} />
      <Route path='/events' element={<Events />} />
      <Route path='/join-us' element={<Join />} />
    </Routes>
  );
}

export default App;
