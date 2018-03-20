import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    stage: 1,
    // user: null,
    user: JSON.parse(localStorage.getItem('user')) || null
    // user: {
    //   "content": [
    //     {
    //     "id": "00648eaa-2cda-47df-a5db-b034e6446390",
    //     "xm": "杨铠鸣",
    //     "csrq": "20140510",
    //     "xb": {
    //       "name": "男",
    //       "value": "1",
    //       "key": "M"
    //     },
    //     "sfzlx": {
    //       "name": "居民身份证",
    //       "value": "1",
    //       "key": "JMSFZ"
    //     },
    //     "sfzjh": "310109201405100517",
    //     "zjyxq": null,
    //     "jzzlx": null,
    //     "jzzhm": null,
    //     "jzzyxq": null,
    //     "mz": {
    //       "name": "回族",
    //       "value": "3",
    //       "key": "HZ3"
    //     },
    //     "gjdq": {
    //       "name": "中国",
    //       "value": "156",
    //       "key": "ZG156"
    //     },
    //     "jkzk": {
    //       "name": "健康或良好",
    //       "value": "10",
    //       "key": "JKHLH"
    //     },
    //     "hjlb": null,
    //     "fnhklx": null,
    //     "hksf": {
    //       "name": "上海市",
    //       "value": "310000",
    //       "key": "C310000"
    //     },
    //     "hkqx": {
    //       "name": "虹口区",
    //       "value": "310109",
    //       "key": "C310109"
    //     },
    //     "hkrod": null,
    //     "hkz": null,
    //     "hkldh": null,
    //     "hks": null,
    //     "hkjz": null,
    //     "hkjwh": "09017041",
    //     "hjdjr": null,
    //     "hzgx": null,
    //     "sfrhyz": null,
    //     "xzzsf": {
    //       "name": "上海市",
    //       "value": "310000",
    //       "key": "C310000"
    //     },
    //     "xzzqx": {
    //       "name": "虹口区",
    //       "value": "310109",
    //       "key": "C310109"
    //     },
    //     "xzzrod": null,
    //     "xzzz": null,
    //     "xzzldh": null,
    //     "xzzs": null,
    //     "xzzjd": null,
    //     "xzzjw": "09017041",
    //     "xzzyzbm": "200080",
    //     "lxdh": null,
    //     "txdz": null,
    //     "txdzyzbm": null,
    //     "zfxz": {
    //       "name": "产权房",
    //       "value": "4",
    //       "key": "CQF"
    //     },
    //     "czbh": null,
    //     "cqfdz": null,
    //     "htbh": null,
    //     "qzrq": null,
    //     "zfqt": null,
    //     "gfrgx": {
    //       "name": "本人",
    //       "value": "1",
    //       "key": "BR"
    //     },
    //     "sffhjs": null,
    //     "sfnmgtzzn": null,
    //     "sflqcjz": null,
    //     "cjlb": null,
    //     "cjzbh": null,
    //     "cjzfzrq": null,
    //     "cjzfzjg": null,
    //     "addtime": "2017-05-15 13:29:47",
    //     "updatetime": null,
    //     "deleted": {
    //       "name": "否",
    //       "value": "0",
    //       "key": "N"
    //     },
    //     "deletedtime": null,
    //     "remark": null,
    //     "njdm": {
    //       "name": "小班",
    //       "value": "02",
    //       "key": "XB"
    //     },
    //     "ryyj": {
    //       "name": "本区户籍",
    //       "value": "101",
    //       "key": "BQHJ"
    //     },
    //     "ryyjlb": {
    //       "name": "人户一致",
    //       "value": "1010",
    //       "key": "RHYZ"
    //     },
    //     "syqk": null,
    //     "checkstatus": {
    //       "name": "已校验",
    //       "value": "1",
    //       "key": "YJY"
    //     },
    //     "hkcity": {
    //       "name": "市辖区",
    //       "value": "310100",
    //       "key": "C310100"
    //     },
    //     "wsshkdz": "海宁路570弄58号",
    //     "hkxz": {
    //       "name": "非农业家庭户口",
    //       "value": "1",
    //       "key": "FNYJTKK"
    //     },
    //     "sfdszv": {
    //       "name": "否",
    //       "value": "0",
    //       "key": "N"
    //     },
    //     "jzdz": "海宁路570弄58号",
    //     "xzzcity": {
    //       "name": "上海市",
    //       "value": "310000",
    //       "key": "C310000"
    //     },
    //     "hkszxq": null,
    //     "jzdszxq": null,
    //     "jg": null,
    //     "qrrq": null,
    //     "csd": null,
    //     "fileid": null,
    //     "xxcjlx": null,
    //     "fzgx": null
    //   }],
    //   "last": true,
    //   "totalPages": 1,
    //   "totalElements": 1,
    //   "size": 10,
    //   "number": 0,
    //   "first": true,
    //   "sort": null,
    //   "numberOfElements": 1
    // },
  },
  mutations: {
    saveUser(state, payload) {
      state.user = payload
      localStorage.setItem('user', JSON.stringify(payload))
    },
    moveStage(state) {
      state.stage++
    }
  }
})