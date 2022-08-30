import axios from 'axios'

const http = axios.create({
  baseURL: '/' //待定
})

//请求拦截
http.interceptors.request.use((config) => {
  return config
})
