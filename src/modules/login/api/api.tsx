import { BASE_URL } from "@/src/store/config";
import { useAppSelector } from "@/src/store/reduxHook";
import axios from "axios";

// call the api for user login
export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    if (!response.data.success) {
      return [];
    }

    return response.data;
  } catch (error) {
    console.error("login API : ",error);
    return null;
  }
};

// call the api for user logout
export const logout = async (accessToken: string) => {
  try {
    const response = await axios.delete(`${BASE_URL}/auth/logout`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    if (!response.data.success) {
      return [];
    }

    return response.data;
  } catch (error) {
    console.error("logout API :",error);
    return null;
  }
};


// call the api for google sign in
export const googleBackendAPI = async (idToken: string) => {
  console.info("google sgin api check idToken : ",idToken)
  try {
    const response = await axios.post(`${BASE_URL}/auth/google-signin`,{
      idToken
    });
    if (!response.data.success) {
      return response.data.message;
    }
    return response.data;
  } catch (error) {
    console.error("googleBackendAPI : ",error);
    return null;
  }
}