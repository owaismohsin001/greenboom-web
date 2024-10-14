import apiService from "../../network/apiServices";
import { useState } from "react";
import routes from "../../network/routes";
import { useNavigate } from "react-router-dom";
import {showErrorToast, showSuccessToast } from "../../common/toast";


function useLogin(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error,setError] = useState('');


  const handleSubmit = async () => {
   
    console.log("I am getting clicked");
    if(emailRegex.test(email) && passwordRegex.test(password)){
      loginUserFun(email, password);
      setError('');

    }
    else{
      setError("Invalid Email or Password");
    }
    

    
  };
  const loginUserFun = ( email:string, password:string ) => {
    apiService.Post({
        url: routes.signIn,
        body: {
          email,
          password,
        },
        OnSuccess: res => {
          if(res.status === 200){
            console.log("user logged in successfully" + res.message);
            showSuccessToast("logged in sucesfully");
            navigate('/');
          }
          else{
            showErrorToast("Incorrect Credentials");

          }
            
        },
        //error in api for time being we have added conditions.
        OnError: error => {
          console.log("error",error);
          if(error.status === 200){
            console.log("user logged in successfully" + error.message);
            showSuccessToast("logged in sucesfully");
            navigate('/');
          }else{
            showErrorToast("Incorrect Credentials");

          }
          
         
        },
      });
  };


  return {email,setEmail,password,setPassword,handleSubmit,error,setError};
 
}


export default useLogin;