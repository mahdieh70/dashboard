import React, { useState } from "react";

//components
import ProgressBar from "../progressBar";
import { IdentityInfo } from "./identityInfo";
import { ConnectionInfo } from "./connectionInfo";
import { LocationInfo } from "./locationInfo";

//context
import { RegisterContext } from "./context";

function Register() {
  const [step, setStep] = useState(1);

  const increaseStepHandler = () => {
    setStep(step + 1);
  };

  const decreaseStepHandler = () => {
    setStep(step - 1);
  };
  return (
    <div className="w-full h-screen bg-[#E8F4FF] flex">
      <div className="w-full mx-8 my-8">
        <div className="flex w-full h-full">
          <ProgressBar active={step} />
          <div className="bg-white w-[75%] h-full rounded-tl-lg rounded-bl-lg ">
            <div className="h-full pt-8 px-8">
              {step === 1 ? (
                <IdentityInfo
                  increaseStepHandler={increaseStepHandler}
                  decreaseStepHandler={decreaseStepHandler}
                />
              ) : step === 2 ? (
                <ConnectionInfo
                  increaseStepHandler={increaseStepHandler}
                  decreaseStepHandler={decreaseStepHandler}
                />
              ) : step === 3 ? (
                <LocationInfo
                  decreaseStepHandler={decreaseStepHandler}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Provider = () => {
  const [userData, setUserData] = useState(undefined);
  const getData = () => {
    setUserData();
  };

  //api call haminja anjam bedam
  //data har form bayad dar state userData save shavad
  //in data ha bayad iz tarigh getData gerefteh shavad

  return (
    <RegisterContext.Provider value={{ userData, getData }}>
      <Register />
    </RegisterContext.Provider>
  );
};

export { Provider as Register };
