import AWS from "aws-sdk";
import { Buffer } from "buffer";
import { store } from "../redux/store";
import { BASE_URL } from "./routes";
export const callAPI = async (
  endpoint,
  method = "GET",
  body = null,
  headers = {}
) => {
  let token = null;
  // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGFlMGYyODg2N2RlZWU1ZjdlNmFmMSIsImlhdCI6MTcxMDE1ODI5MiwiZXhwIjoxNzI3NDM4MjkyfQ.33BGaKIJ9-FnPn53hdoZR4p4iHgFdtUSwNknYHufGcQ"
  if (token) {
    headers["Authorization"] = token;
  }
  try {
    const response = await fetch(BASE_URL + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};

export const IMAGE_UPLOAD = async (file) => {
  const fileName = new Date().getTime().toString();
  const myHeaders = new Headers();
  let token = localStorage.getItem("accessToken");
  myHeaders.append("Authorization", token);

  const formdata = new FormData();
  formdata.append("file", file); // No need to add .png here; we'll handle it with the query params

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  console.log("requestOptions", requestOptions);
  console.log(BASE_URL + "/upload?name=" + fileName + "&extension=png");

  const response = await fetch(
    BASE_URL + "/upload?name=" + fileName + "&extension=png", // Pass extension as query param
    //@ts-ignore
    requestOptions
  );
  const jsonResponse = await response.json();
  console.log("jsonResponse", jsonResponse);
  return jsonResponse?.data?.Location;
};

export const uploadImage = async (file) => {
  const fileName = new Date().getTime().toString();
  const myHeaders = new Headers();
  let token = localStorage.getItem("accessToken");
  myHeaders.append("Authorization", token);

  const formdata = new FormData();
  formdata.append("file", file, fileName + ".png");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  console.log("requestOptions", requestOptions);
  console.log(BASE_URL + "/upload?name=" + fileName + "&extension=png");

  const reponse = await fetch(
    BASE_URL + "upload?name=" + fileName + "&extension=png",
    //@ts-ignore
    requestOptions
  );
  const jsonResponse = await reponse.json();
  console.log("jsonResponse", jsonResponse);
  return jsonResponse?.data?.Location;
  // .catch((error) => console.error(error));
  // return BASE_URL + "/findFile?name=" + fileName + ".png";
};

export const uploadPdf = async (file) => {
  const fileName = new Date().getTime().toString();
  const myHeaders = new Headers();
  let token = localStorage.getItem("accessToken");
  myHeaders.append("Authorization", token);

  const formdata = new FormData();
  formdata.append("file", file, fileName + ".pdf");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  console.log("requestOptions", requestOptions);
  console.log(BASE_URL + "/upload?name=" + fileName + "&extension=pdf");

  const reponse = await fetch(
    BASE_URL + "/upload?name=" + fileName + "&extension=pdf",
    //@ts-ignore
    requestOptions
  );
  const jsonResponse = await reponse.json();
  console.log("jsonResponse", jsonResponse);
  return jsonResponse?.data?.Location;
  // .catch((error) => console.error(error));
  // return BASE_URL + "/findFile?name=" + fileName + ".pdf";
};
