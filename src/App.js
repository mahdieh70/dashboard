import React from "react";
import LogIn from "./components/logIn";
import { Route, Routes } from "react-router-dom";
import Register from "./components/register";
import SendingCode from "./components/sendingCode";
import VerificationCode from "./components/verificationCode";
import VerificationOfPhoneNumber from "./components/verificationOfPhoneNumber";
import Dashboard from "./components/dashboard";

const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="register" element={<Register />} />
        <Route path="sendingCode" element={<SendingCode />} />
        <Route path="verificationCode" element={<VerificationCode />} />
        <Route
          path="verificationOfPhoneNumber"
          element={<VerificationOfPhoneNumber />}
        />
      </Routes>
   
  );
};

export default App;
