export function setCookie(cname, cvalue, exdays=7) {
  let d = new Date(); 
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = `${cname}=${escape(cvalue)};${expires}`
}
export function getCookie(cname) {
  let cookies = document.cookie.split(';').map(p => {
    return p.split('=');
  })
  let index = cookies.findIndex(c => c[0] == cname);
  return index != -1 ? cookies[index][1]: ''
}

import axios from 'axios'
import {baseUrl} from '@/lib/config'
export let $axios = axios.create({
  baseURL: baseUrl,
  withCredentials: true
})

export let getAge = function (csrq) {
  return new Date().getFullYear() - csrq.slice(0, 4)
}

export default {
  setCookie,
  getCookie,
  $axios,
  getAge
}
