import React, { useState } from "react";
import ProgressBar from "../progressBar";
import { IdentityInfo } from "./identityInfo";
import { ConnectionInfo } from "./connectionInfo";
import { LocationInfo } from "./locationInfo";

function Register() {
  const [step, setStep] = useState(1);

  const increaseStepHandler = () => {
    setStep(step + 1);
  };

  const decreaseStepHandler = () => {
    setStep(step - 1);
  };
  return (
    <div className="w-full h-screen bg-[#E8F4FF] py-8 px-8 flex">
      <div className="flex w-full h-full">
        <ProgressBar active={step} />
        <div className="bg-white w-[75%] h-full rounded-tl-lg rounded-bl-lg py-8 px-20">
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
              increaseStepHandler={increaseStepHandler}
              decreaseStepHandler={decreaseStepHandler}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export { Register };
