import { createSlice } from '@reduxjs/toolkit'
import { clearToken, getToken, setToken } from '@/utils'

import { reqLogin, reqUserInfo } from "@/apis/user";

const userStore = createSlice({
  name: 'user',
  // 資料
  initialState: {
    token: getToken() || '',
    userInfo: {}
  },
  // 同步修改方法
  reducers: {
    setUserToken(state, action) {
      state.token = action.payload
      // 存入本地
      setToken(state.token)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo(state) {
      state.token = ''
      state.userInfo = {}
      clearToken()
    }
  }
})

// 解構出actionCreater
const {setUserToken, setUserInfo, clearUserInfo} = userStore.actions

// 取得reducer函數
const userReducer = userStore.reducer

// 封裝一個函數 在函數中return一個新函數 在新函數中封裝異步
// 得到資料之後透過dispatch函數 觸發修改
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await reqLogin(loginForm)
    dispatch(setUserToken(res.data.token))
  }
}


const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await reqUserInfo()
    dispatch(setUserInfo(res.data))
  }
}

export { fetchLogin, fetchUserInfo, clearUserInfo }

export default userReducer