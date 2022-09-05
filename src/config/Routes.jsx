import React from "react";
import { Route, Routes } from "react-router-dom";

import SearchResults from "../pages/SearchResults/SearchResults";
import Home from "../pages/Home/Home";

const root = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/processResults/:id" element={<SearchResults />} />
  </Routes>
);

export default root;
