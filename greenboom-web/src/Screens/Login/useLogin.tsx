import apiService from "../../network/apiServices";
import { useState } from "react";
import routes from "../../network/routes";
import { useNavigate } from "react-router-dom";
import {showSuccessToast } from "../../common/toast";


function useLogin(){

    
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
            
            navigate('/');
        },
        OnError: error => {
          console.log(error);
         
        },
      });
  };


  return {email,setEmail,password,setPassword,handleSubmit};
 
}


export default useLogin;