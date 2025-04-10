import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import ShowPage from "./pages/ShowPage";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="projects" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":id" element={<ShowPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
