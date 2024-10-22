import apiService from "../../network/apiServices";
import { useState } from "react";
import routes from "../../network/routes";
import { useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../common/toast";

function useLogin() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // fixed regex typo
  // console.log(emailRegex.test(email)); // Should return true for valid email.

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // added setLoading state

  const handleSubmit = async () => {
    console.log("I am getting clicked");
    console.log("email", email);
    console.log("password", password);
    console.log("Email validation result:", emailRegex.test(email));
    console.log("Password validation result:", passwordRegex.test(password));
    if (emailRegex.test(email) && passwordRegex.test(password)) {
      console.log("Validation Passed");
      loginUserFun(email, password);
      setError("");
    } else {
      console.log("Validation failed");
      setError("Invalid Email or Password");
    }
  };

  const loginUserFun = (email: string, password: string) => {
    setLoading(true); // trigger loading state
    apiService.Post({
      url: routes.signIn,
      body: {
        email,
        password,
      },
      setLoading: (val: boolean) => setLoading(val), // correctly pass setLoading function
      OnSuccess: (res) => {
        if (res.status === 200) {
          console.log("User logged in successfully: " + res.message);
          showSuccessToast("Logged in successfully");
          navigate("/");
        } else {
          showErrorToast("Incorrect Credentials");
        }
        setLoading(false); // stop loading when done
      },
      OnError: (error) => {
        console.log("Error:", error);
        if (error.status === 200) {
          console.log("User logged in successfully: " + error.message);
          showSuccessToast("Logged in successfully");
          navigate("/");
        } else {
          showErrorToast("Incorrect Credentials");
        }
        setLoading(false); // stop loading on error
      },
    });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    error,
    setError,
    loading,
  };
}

export default useLogin;
