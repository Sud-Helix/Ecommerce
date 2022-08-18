import React from "react";
import Home from "./Routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/navigation/Navigation";
import SignIn from "./Routes/Sign-in/Sign-in";

const Shop = () => {
  return <div>Hello World Its Shop Page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
