import { BASE_URL } from "@/src/store/config";
import axios from "axios";

export const loginOrSignup = async (phone: string, address: string) => {
  try {
    const res = await axios.post(`${BASE_URL}/users`, {
      phone,
      address,
    });
    // console.log("Login or Signup Response:", res.data);
    return res.data.user;
  } catch (error) {
    console.error("Login or Signup Error:", error);
    return null;
  }
};
export const getOrderByUserId = async (userId: string) => {
  try {
    // console.info("Fetching orders for User ID:", userId);
    const res = await axios.get(`${BASE_URL}/order/${userId}`);
    console.log("Orders fetched:", res.data.orders);
    return res.data.orders;
  } catch (error) {
    console.warn("Order detail error", error);
    return [];
  }
};
