import axios from "axios";
import { hostURL } from "@/hostURL";

export const axiosInstance = axios.create({
  baseURL: `${hostURL}`,
});

export const customFetch = async (url, params = {}) => {
  const response = await axiosInstance.get(url, { params });
  return response.data;
};

export const customMutate = async (url, data) => {
  const response = await axiosInstance.post(url, data);
  return response.data;
};
