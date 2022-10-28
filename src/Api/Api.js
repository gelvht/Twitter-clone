import axios from "axios";

const api = "http://82.115.16.153:4000/api";

export const LoginAPI = (username, password) =>
  axios
    .post(`${api}/login/`, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response;
    });

export const SignUpAPI = (email, username, password) =>
  axios
    .post(`${api}/signup/`, {
      email,
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response;
    });

export const Logout = () => {
  localStorage.removeItem("user");
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
