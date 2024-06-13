import axios from "axios";
import { getAccessToken, removeAccessToken } from "../utils/local-storage";

axios.defaults.baseURL = import.meta.env.VITE_API_URL; // config base url


// ก่อน send request ขอ modify config  โดยการเช็ค accessToken ถ้า acctoen มีค่า ให้เพิ่มค่า headers Authorization และก่อนส่ง req ทุกครั้งจะมาเช็คก่อน ถ้ามี ก้ส่ง access token ออกไป
axios.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;  // modify ค่า header
    }
    return config;
  },
  (err) => Promise.reject(err)
);


axios.interceptors.response.use(
  (value) => Promise.resolve(value),
  (error) => {
    if (error.response.status === 401) {
      removeAccessToken();
      window.location.assign("/login");
      return
    }
    return Promise.reject(error)
  }
);

export default axios;


/* setค่า interceptor ก่อนจะ send request ไปที่ server แล้ว server ส่งกลับมา ก็ต้องถูกดักจับก่อนแล้วถึ
 รีเทินค่า ไปหา client
 interceptor สามารถ แก้ไขค่า header modifyค่า obj  */