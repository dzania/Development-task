import axios from "axios";
import { User, Report } from "./types";

const API_URL = "/api";

export const fetchUser = async () => {
  const response = await axios.get(`${API_URL}/user/fetch_user`);
  return response.data as User;
};

export const setDisplayedPhoto = async (uid: string) => {
  const response = await axios.post(`${API_URL}/user/set_displayed_photo/`, {
    uid: uid,
  });
  return response.data;
};

export const fetchReport = async () => {
  const response = await axios.get(`${API_URL}/user/report`);
  return response.data as Report;
};
