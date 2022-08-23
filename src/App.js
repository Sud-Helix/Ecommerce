import React from "react";
import Home from "./Routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/navigation/Navigation";
import Authentication from "./Routes/authentication/authentication";
import Shop from "./Routes/Shop/Products";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
