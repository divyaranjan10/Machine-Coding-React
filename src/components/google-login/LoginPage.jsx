import { useState } from "react";
import Input from "./Input";

const LoginPage = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const validateEmail = () => {
    if (!email.trim()) {
      return "Email is required";
    }

    if (!email.includes("@") || !email.includes(".")) {
      return "Invalid Email";
    }

    return "";
  };

  const handleNext = () => {
    const message = validateEmail();

    setError((prev) => ({
      ...prev,
      email: message,
    }));

    if (message) return;

    setStep(2);
  };

  const validatePassword = () => {
    if (!password.trim()) {
      return "Password required";
    }

    return "";
  };

  const handleLogin = () => {
    const message = validatePassword();

    setError((prev) => ({
      ...prev,
      password: message,
    }));

    if (message) return;

    console.log("Successful");
  };

  const handleBack = () => {
    setError((prev) => ({
      ...prev,
      password: "",
    }));

    setStep(1);
  };

  return (
    <div>
      <h3>Sign In</h3>
      <h6>Use your account to continue</h6>

      <h5>
        Step {step} of 2 - {step === 1 ? "Email address" : "Password"}
      </h5>

      <h6>
        Enter your {step === 1 ? "email address" : "password"} to continue
      </h6>

      <Input
        type={step === 1 ? "email" : "password"}
        placeholder={step === 1 ? "Email Address" : "Enter your password"}
        value={step === 1 ? email : password}
        setterFunc={step === 1 ? setEmail : setPassword}
      />
      <h6 className="text-red-400">
        {step === 1 ? error.email : error.password}
      </h6>
      <button onClick={step === 1 ? handleNext : handleBack}>
        {step === 1 ? "Next" : "Back"}
      </button>
      {step === 2 && <button onClick={handleLogin}>Sign In</button>}
    </div>
  );
};

export default LoginPage;
