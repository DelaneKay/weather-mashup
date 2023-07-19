import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from "./components/components/NavigationBar";
import Code from "./components/components/Code";
import GitRepo from "./components/components/GitRepo";
import About from "./components/components/About";
import WeatherMashUp from "./components/components/WeatherMashUP";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<WeatherMashUp/>} />
          <Route path="/code" element={<Code />} />
          <Route path="/git-repo" element={<GitRepo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
