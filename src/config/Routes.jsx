import React from "react";
import { Route, Routes } from "react-router-dom";

import SearchResults from "../components/SearchResults/SearchResults";
import Home from "../components/Home/Home";

const root = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/processResults/:id" element={<SearchResults />} />
  </Routes>
);

export default root;
