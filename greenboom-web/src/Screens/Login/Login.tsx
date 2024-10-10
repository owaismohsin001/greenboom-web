import logo from "../../assets/Greenboom.png";
import { apiService } from "../../network";
import { useNavigate } from "react-router-dom";
import routes from "../../network/routes";
import { useState } from "react";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    // const email = formData.get("email") as string;
    // const password = formData.get("password") as string;
    loginUserFun({ email, password });

    // try {
    //   const response = await callAPI("/login", "POST", {
    //     email,
    //     password,
    //   });
    //   if (response && response.success) {
    //     console.log("Login successful");
    //     navigate("/home");
    //   } else {
    //     console.log("Invalid credentials");
    //   }
    // } catch (error) {
    //   console.log("Error during login", error);
    // }
  };
  //   const loginUserFun = ({ email, password }) => {
  //     apiService.Post({
  //       url: routes.signIn,
  //       body: {
  //         email,
  //         password,
  //       },
  //       OnSuccess: (res) => {
  //         console.log("Logged in Successful: ", res.status);
  //         console.log("The status is" + res.status);
  //         if (res.status === 200) {
  //           navigate("/home");
  //         }
  //       },
  //       OnError: (error) => {
  //         console.log(error);
  //       },
  //     });
  //   };

  const loginUserFun = ({ email, password }) => {
    apiService.Post({
      url: routes.signIn,
      body: {
        email,
        password,
      },
      OnSuccess: (res) => {
        console.log(res.status); // Log the entire response object

        // Safeguard to check if `res.status` exists
        if (res && res.status === 200) {
          console.log("Logged in Successful: ", res.status);
          console.log("Navigating to /home...");
          navigate("/home");
        } else {
          console.log("Unexpected response structure or status: ", res);
        }
      },
      OnError: (error) => {
        console.log("Error during login: ", error);
      },
    });
  };

  return (
    <div className="bg-bg h-screen flex justify-center items-center">
      <div className="bg-white w-[416px] h-[83%]">
        <img src={logo} width={200} className="pt-12 mx-auto" />
        <div className="p-12 pt-7">
          <h2 className="text-primary font-semibold text-lg">
            Hello! Let's get started
          </h2>
          <p className="font-light pb-5">Log in to continue.</p>
          <input
            name="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border h-9 mb-6 w-full p-3  placeholder:font-normal placeholder:text-grey-700 focus:border-blue-500 focus:outline-none"
            placeholder="Username"
            required
          />
          <input
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent border h-9 w-full p-3 placeholder:font-normal placeholder:text-grey-700 focus:border-blue-500 focus:outline-none "
            placeholder="Password"
            required
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-primary w-full mt-5 p-2 h-12 rounded-md text-white text-md font-bold hover:bg-transparent hover:text-primary border border-primary"
          >
            Log in
          </button>
          <button className="bg-transparent w-full mt-5 p-2 h-12 font-bold rounded-md text-primary text-sm font-bold hover:bg-primary hover:text-white border border-primary">
            Forgot Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
