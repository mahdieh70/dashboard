import React from "react";
import LogIn from "./components/logIn";
import { Route, Routes } from "react-router-dom";
import { IdentityInfo } from "./components/register/identityInfo";
import { ConnectionInfo } from "./components/register/connectionInfo";
import VerificationOfPhoneNumber from "./components/verificationOfPhoneNumber";
import Dashboard from "./components/dashboard";
import { LocationInfo } from "./components/register/locationInfo";
import { Register } from "./components/register";

const App = () => {
  return (
    <div className="bg-[#E8F4FF]">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="register" element={<Register />} />
        <Route path="identityInfo" element={<IdentityInfo />} />
        <Route path="ConnectionInfo" element={<ConnectionInfo />} />
        <Route
          path="verificationOfPhoneNumber"
          element={<VerificationOfPhoneNumber />}
        />
        <Route path="locationInfo" element={<LocationInfo />} />
      </Routes>
    </div>
  );
};

export default App;
