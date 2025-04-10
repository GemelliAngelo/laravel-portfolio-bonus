import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import ShowPage from "./pages/ShowPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="projects" element={<HomePage />} />
        <Route path="projects/:id" element={<ShowPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
