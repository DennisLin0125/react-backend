import axios from 'axios'
import { clearToken, getToken } from './token'
// import router from '@/router'
const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0/',
  timeout: 5000
})

// 新增請求攔截器
// 新增請求攔截器
http.interceptors.request.use(config => {
  // if not login add token
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 新增回應攔截器
http.interceptors.response.use((response) => {
  // 2xx 範圍內的狀態碼都會觸發函數。
  // 對回應資料做點什麼
  return response.data
}, (error) => {
  // 超出 2xx 範圍的狀態碼都會觸發函數。
  // 對回應錯誤做點什麼
  
  console.dir(error)
  if (error.response.status === 401) {
    clearToken()
    // router.navigate('/login')
  }
  
  return Promise.reject(error)
})

export { http }