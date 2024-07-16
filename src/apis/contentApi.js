import axios from "../config/axios"

const contentApi = {};

contentApi.create = body =>  axios.post('/admin/content',body)
contentApi.getContentById = id =>  axios.get(`/admin/content/${id}`)


export default contentApi