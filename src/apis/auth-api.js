// import axios from "../config/axios.js";
import { getAdminAccessToken} from "../utils/admin-storage";

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
const token = getAdminAccessToken()

authApi.register = body => axios.post('/auth/register' , body)
authApi.login= body => axios.post('/auth/login' , body)

authApi.loginAdmin = body => axios.post('/auth/login-admin' , body)

authApi.getAuthUser = () => axios.get('/auth/me')
authApi.getAuthAdmin = () => axios.get('/auth/admin',{ headers: {
    'Authorization': `Bearer ${token}`
}})

export default authApi;
