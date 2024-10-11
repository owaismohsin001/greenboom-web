import apiService from "../../network/apiServices";
import { useState } from "react";
import routes from "../../network/routes";
import { useNavigate } from "react-router-dom";
import { successToast } from "../../common/toast";
import "react-toastify/dist/ReactToastify.css"; 
import { toast } from "react-toastify";


function useLogin(){
    const showSuccessToast = (message:string) => {
        toast.success(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      };
    
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");


  const handleSubmit = async () => {
   
    console.log("I am getting clicked");
    loginUserFun(email, password);

    
  };
  const loginUserFun = ( email:string, password:string ) => {
    apiService.Post({
        url: routes.signIn,
        body: {
          email,
          password,
        },
        OnSuccess: res => {
            console.log("user logged in successfully" + res.message);
            showSuccessToast("logged in sucesfully");
            
            navigate('/home');
        },
        OnError: error => {
          console.log(error);
         
        },
      });
  };


  return {email,setEmail,password,setPassword,handleSubmit};
 
}


export default useLogin;