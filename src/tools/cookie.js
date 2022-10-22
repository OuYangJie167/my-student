function getCookie(key) {
  const cookie = document.cookie.trim().split("; ")
  const cookieObj = {};
  for(let i = 0; i < cookie.length; i++) {
    let arr = cookie[i].split("=");
    cookieObj[arr[0]] = arr[1];
  }
  return cookieObj;
}

function setCookie(key, value, time) {
  const expires = new Date(new Date().getTime() + time);
  document.cookie = key + "=" + value + "; expires=" + expires.toGMTString();
}

function removeCookie(key) {
  setCokkie(key, "", -1)
}

export default {
  getCookie,
  setCookie,
  removeCookie,
}
