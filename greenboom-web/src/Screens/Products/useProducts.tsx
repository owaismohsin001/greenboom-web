// import routes from '../../network/routes';
// import apiService from '../../network/apiServices';
// import { useNavigate } from "react-router-dom";
// import {showErrorToast, showSuccessToast } from "../../common/toast";
// import { useEffect, useState } from 'react';

// function useProducts (){
//     const [products,setProducts] = useState([]);

//     const getAllProducts = ()=>{
//         apiService.Get({
//             url: routes.products,

//             OnSuccess: res => {
//                 console.log("product data we got is : " + res.data);
//           },
//             OnError: error => {
//                 console.log("error occured" + error);
//              showErrorToast("Incorrect Credentials");

//             },
//           });
//     }

//     useEffect(()=>{
//         getAllProducts();
//     },[])

// }

// export default useProducts;

import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://jbp2e2pm2s.us-east-2.awsapprunner.com/api/v1/product"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log("API Response:", responseData); // Log the whole response

        // Access the products array from responseData
        if (
          responseData.success &&
          responseData.data &&
          Array.isArray(responseData.data.product)
        ) {
          setProducts(responseData.data.product); // Update to use responseData.data.product
        } else {
          setError("No products found.");
        }
      } catch (error) {
        setError("Failed to fetch products: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
