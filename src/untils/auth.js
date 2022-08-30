import Cookies from 'js-cookie'

const TokenKey = 'token'

//获取token的方法
function getToken() {
  return Cookies.get(TokenKey)
}

//设置token
function setToken(token) {
  return Cookies.set(TokenKey, token)
}

//删除cookies里面的token
function removetoken(params) {
  Cookies.remove(TokenKey)
}

export { setToken, getToken }

//npm i js-cookie
