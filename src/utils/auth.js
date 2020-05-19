import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const UserInfoKey = 'UserInfoData'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUserInfo() {
  let userInfo = sessionStorage.getItem(UserInfoKey)
  if(typeof userInfo == 'string'){
    userInfo = JSON.parse(userInfo)
  }
  return userInfo
}

export function setUserInfo(userInfo) {
  if(typeof userInfo == 'object'){
    userInfo = JSON.stringify(userInfo)
  }
  return sessionStorage.setItem(UserInfoKey, userInfo)
}

export function removeUserInfo() {
  return sessionStorage.removeItem(UserInfoKey)
}

