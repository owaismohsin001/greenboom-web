import routes from '../../network/routes';
import apiService from '../../network/apiServices';
import { useNavigate } from "react-router-dom";
import {showErrorToast, showSuccessToast } from "../../common/toast";
import { useEffect, useState } from 'react';


const useProducts= ()=>{
    const [products,setProducts] = useState([]);

    const getAllProducts = ()=>{
        apiService.Get({
            url: routes.products,
            
            OnSuccess: res => {
                console.log("product data we got is : " + res.data);
          },
            OnError: error => {
                console.log("error occured" + error);
             showErrorToast("Incorrect Credentials");
    
              
             
            },
          });
    }


    useEffect(()=>{
        getAllProducts();
    },[])


}

export default useProducts;