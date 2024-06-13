// import axios from "../config/axios.js";
// import { getAccessToken } from "../utils/local-storage";

// const authApi = {};

// authApi.register = (body) => axios.post("http://localhost:8884/auth/register", body);
// authApi.login = (body) => axios.post("/auth/login", body); // ไป update state authcontext
// authApi.getAuthUser = () =>
//   axios.get("/auth/me", {
//     headers: { Authorization: `Bearer ${getAccessToken()}` },
//   });

// export default authApi;

import axios from "../config/axios"

const authApi = {};

authApi.register = body => axios.post('/auth/register' , body)
authApi.login= body => axios.post('/auth/login' , body)

authApi.getAuthUser = () => axios.get('/auth/me')

export default authApi;
