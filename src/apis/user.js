import { http } from "@/utils";

export const reqLogin = (loginForm) => {
  return http({
    url: '/authorizations',
    method: 'POST',
    data: loginForm
  })
}

export const reqUserInfo = () => {
  return http({
    url: '/user/profile',
    method: "GET"
  })
}