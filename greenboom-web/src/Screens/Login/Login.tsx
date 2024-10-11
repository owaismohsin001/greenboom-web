import logo from "../../assets/Greenboom.png";
import useLogin from "./useLogin";
import DefaultLayout from "../../layout/DefaultLayout";


function Login() {
  const {setEmail,setPassword,handleSubmit} = useLogin();
  
  
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
