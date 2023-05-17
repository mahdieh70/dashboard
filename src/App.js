import React from "react";
import LogIn from "./components/logIn";
import { Route, Routes } from "react-router-dom";
import Register from "./components/register";
import SendingCode from "./components/sendingCode";
import VerificationOfPhoneNumber from "./components/verificationOfPhoneNumber";
import Dashboard from "./components/dashboard";
import LocationInfo from "./components/locationInfo";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="register" element={<Register />} />
      <Route path="sendingCode" element={<SendingCode />} />
      <Route
        path="verificationOfPhoneNumber"
        element={<VerificationOfPhoneNumber />}
      />
      <Route path="locationInfo" element={<LocationInfo />} />
    
    </Routes>
  );
};

export default App;
