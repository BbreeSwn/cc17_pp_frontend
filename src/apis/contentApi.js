import axios from "../config/axios"

const contentApi = {};

contentApi.createNews = body =>  axios.post('/admin/content',body)
contentApi.createKidsProgram = body =>  axios.post('/admin/kidsprogramcontent',body)
contentApi.getContentById = id =>  axios.get(`/admin/content/${id}`)
contentApi.deleteContentById = id =>  axios.delete(`/admin/content/${id}`)
contentApi.getKidsProgramContent= id =>  axios.get(`/content/getAllKidsProgram`)

contentApi.updateStory = ( id,body) => axios.patch(`/news/${id}`, body);
contentApi.getNewsContentById = id => axios.get(`/news/${id}`)
contentApi.getContentById = id => axios.get(`/news/${id}`)


export default contentApi