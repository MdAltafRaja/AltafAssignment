import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import Gallery from "./Gallery";
import Posts from "./Posts";
import Todo from "./Todo";
function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage/:id" element={<HomePage />} />
        <Route path="/gallery/:id" element={<Gallery />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
