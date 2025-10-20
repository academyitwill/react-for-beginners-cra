
import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie" element={<Detail/>}/>
    </Routes>
  </Router>;
}

export default App;
