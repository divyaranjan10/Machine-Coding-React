import { useState } from "react";
import ReviewDetails from "./steps/ReviewDetails";
import PersonalDetails from "./steps/PersonalDetails";
import AddressDetails from "./steps/AddressDetails";
import "./MultiStepper.css";

const MultiStepper = () => {
  const steps = [
    { label: "Personal", component: PersonalDetails },
    { label: "Address", component: AddressDetails },
    { label: "Review", component: ReviewDetails },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    currentStep !== steps.length - 1 && setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    currentStep !== 0 && setCurrentStep((prev) => prev - 1);
  };

  const ActiveComponent = steps[currentStep].component;

  return (
    <div>
      <div className="stepper">
        {steps.map((step, index) => (
          <div
            key={step.label}
            className={`stepper-container ${
              index < currentStep
                ? "completed"
                : index === currentStep
                  ? "active"
                  : "upcoming"
            }`}
          >
            <button>{index + 1}</button>
            <span>{step.label}</span>
          </div>
        ))}
      </div>
      <div className="stepper-content">
        <ActiveComponent nextStep={nextStep} prevStep={prevStep} />
      </div>
    </div>
  );
};

export default MultiStepper;
