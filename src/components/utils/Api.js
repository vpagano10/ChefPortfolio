import axios from "axios";

export function getToken() {
  return localStorage.getItem("token");
}

export default function api() {
  return axios.create({
    baseURL: "https://lambda-chef-portfolio.herokuapp.com/",
    headers: {
      Authorization: getToken(),
    },
  });
}
