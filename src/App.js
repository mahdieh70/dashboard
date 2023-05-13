import React from "react";
import LogIn from "./components/logIn";
import { Route, Routes } from "react-router-dom";
import Register from "./components/register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
