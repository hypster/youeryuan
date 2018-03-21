let regExp = require('@/lib/regExp');
import {
  $axios
} from '@/lib/util'

import {
  mobile
} from '@/lib/regExp'
import {
  IDNum
} from "@/lib/regExp";

import Bus from '@/components/bus/Bus'

export const verifyBase = {
  data() {
    return {
      mobile: '',
      username: '',
      pass: '',
      confirmPass: '',
      verificationCode: '',
      textCode: '',

      errors: [],

      showModal: false,
      waiting: false,
      //定时
      countdown: 5,
      imgUrl: '',
      disable: false
    }
  },
  methods: {
    getSMSCode(type = 1) {
      if (!regExp.mobile.test(this.mobile)) {
        return this.$emit('openModal', {
          messages: ['请先输入准确的手机号']
        });
      }
      // this.$http.post('public/SMSSend', {
      //   mobile: this.mobile,
      //   type: type
      // }).then(r => {
      //   console.log(r)
      // })
      $axios.post('/public/SMSSend', {
        mobile: this.mobile,
        type: type
      }).then(r => console.log(r)).catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      })
      this.waiting = true;
      let _countdown = this.countdown
      let timer = setInterval(() => {
        this.countdown--;
        if (this.countdown == 0) {
          this.waiting = false;
          this.countdown = _countdown;
          clearInterval(timer);
        }
      }, 1000);
    },
    register(api) {
      if (this.mobile.trim() == '') {
        this.errors.push('请输入手机号码');
      } else if (!regExp.mobile.test(this.mobile)) {
        this.errors.push('请输入正确格式的手机号码');
      }

      if (!regExp.pass.test(this.pass)) {
        this.errors.push('请输入8-20位密码，且必须包含一个小写字母、一个大写字母和一个数字');
      }
      if (this.confirmPass != this.pass) {
        this.errors.push('两次输入密码不一致');
      }
      // debugger
      if (this.textCode.trim() == '') {
        this.errors.push('请输入短信验证码');
      } else if (!regExp.smsCode.test(this.textCode)) {
        this.errors.push('短信验证码必须为4位');
      }
      if (!this.errors.length) {
        console.log('校验通过');

        this.$http.post(api, {
          smsCode: this.textCode,
          ciphertext: this.pass,
          mobile: this.mobile
        }).then(this.cb).catch(e => {
          console.log(`you got an error ${e.message}`)
        });
      } else {
        this.$emit('openModal', {
          messages: this.errors.slice()
        });
        this.errors = []
      }
    },
    cb({
      body
    }) {
      this.$emit('openModal', {
        messages: [body.message]
      });
    }
  }
}

export const studentRegisterBase = {
  data() {
    return {
      sexes: [],
      nationalities: [],
      provinces: [],
      zones: [],
      relationWithHosts: [],
      healths: [],
      educations: [],
      familyRelations: [],
      IDTypes: [],
      jw1: [],
      jw2: [],
      numOfGuardian: 1,
      submitObj: {
        concatlist: [{}]

      },
      nationality: "",
      province: "",
      birth: "",
      IDNum: "",
      zone1: "",
      health: "",
      relationWithHost: "",
      moveDate: "",
      hostAddress: "",
      zone2: "",
      relationWithOwner: "",
      currentAddress: "",
      telephone: "",
      guardians: [{
        relation: '',
        name: '',
        age: '',
        education: '',
        workplace: '',
        mobile: ''
      }],
      menu1: false,
      menu2: false,
      valid: false
    }
  },
  // props: ['api'],
  mounted() {
    this.submitObj.xxcjlx = this.xxcjlx

    this.submitObj.jzid = this.$store.state.user.id

    this.$http.post('public/eZjlx').then(({
      body
    }) => {
      this.IDTypes = body.data;
    })

    this.$http.post('public/eXb').then(({
      body
    }) => {
      this.sexes = body.data;
    })

    this.$http.post("public/eMz").then(({
      body
    }) => {
      this.nationalities = body.data;
    });
    this.$http.post("public/eJd").then(({
      body
    }) => {
      this.zones = body.data.sort(({
        name: a
      }, {
        name: b
      }) => {
        return a.localeCompare(b, "zh-Hans-CN", {
          sensitivity: "accent"
        });
      });
    });
    this.$http.post("public/eJtgx").then(({
      body
    }) => {
      this.relationWithHost = body.data
    })
    // this.$http.post('public/eJkzk').then(({body}) => {
    //   this.healths = body.data;
    // })
    this.$http.post('public/eHzgx').then(({
      body
    }) => {
      this.relationWithHosts = body.data;
    })

    this.$http.post('public/eCity', {
      parent: "-1"
    }).then(({
      body
    }) => {
      this.provinces = body.data;
    })
    // this.neighbours = [{name: '建新小区', value: 1}, {name: '李园院村', value: 2}]
    // this.$http.post('jw/findJwByJddm',
    //  {jddm: this.submitObj.xzzjd.length == 5? this.submitObj.xzzjd: '0'+ this.submitObj.xzzjd})
    //  .then(({body}) => {
    //   this.neighbours = body.data
    // })

    this.$http.post('public/eXl').then(({
      body
    }) => {
      this.educations = body.data
    })
    // this.$http.post('public/hkjwh').then(({body}) => {
    //   this.neighbours = body.data
    // })
    this.$http.post('public/eJtgx').then(({
      body
    }) => {
      this.familyRelations = body.data
    })
  },
  methods: {
    testID(v) {
      return IDNum.test(v) || "身份证号格式不正确";
    },
    save(date) {
      this.$refs.menu.save(date);
    },
    pushGuardian() {
      if (this.submitObj.concatlist.length < 5) {
        this.submitObj.concatlist.push({
          relation: '',
          name: '',
          age: '',
          education: '',
          workplace: '',
          mobile: ''
        })
      }
    },
    removeGuardian(i) {
      if (i >= 0)
        this.submitObj.concatlist.splice(i, 1)
    },
    testPhone(v) {
      return /[^\d]/.test(v) ? '请输入数字' : true
    },
    testMobile(v) {
      return mobile.test(v) || '请输入有效号码'
    },
    changeJW(id, jw) {
      this.$http.post('jw/findJwByJddm', {
          jddm: id.length == 5 ? id : '0' + id
        })
        .then(({
          body
        }) => {
          this[jw] = body.data
        })
    },

    submitForm() {
      // debugger
      if(!this.$refs.form.validate()) {
        return
      }
      this.$http.post(this.api,
        // JSON.stringify({
        //   "concatlist": [{
        //     "gx": "52",
        //     "xm": "歌",
        //     "nl": "22",
        //     "xl": "20",
        //     "gzdw": "果然果然个",
        //     "dh": "13611454546"
        //   }],
        //   "xxcjlx": "1",
        //   "jzid": "cae678e1-2034-4e98-b47b-b9f2d8bdec30",
        //   "ezjlx": "1",
        //   "xm": "huang",
        //   "xb": "2",
        //   "mz": "2",
        //   "jg": "120000",
        //   "csrq": "2017-02-09",
        //   "sfzjh": "310114199911300008",
        //   "hzgx": "2",
        //   "hkjz": "04016",
        //   "hkjwh": "df2fa75d-5874-4ccb-a0fc-41d3b5fefa31",
        //   "qrrq": "2018-03-06",
        //   "wsshkdz": "果然果然个个人",
        //   "fzgx": "5",
        //   "xzzjd": "04016",
        //   "xzzjw": "df2fa75d-5874-4ccb-a0fc-41d3b5fefa31",
        //   "lxdh": "54545454",
        //   "jzdz": "更丰富更广泛"
        // }),
        // JSON.stringify({
        //   "jzid": "cae678e1-2034-4e98-b47b-b9f2d8bdec30",
        //   "concatlist": [{
        //     "gx": "51",
        //     "xm": "方法",
        //     "nl": "12",
        //     "xl": "20",
        //     "gzdw": "飞飞飞",
        //     "dh": "13611633333"
        //   }],
        //   "xxcjlx": "1",
        //   "ezjlx": "1",
        //   "xm": "长",
        //   "xb": "1",
        //   "mz": "1",
        //   "jg": "110000",
        //   "csrq": "2018-02-01",
        //   "sfzjh": "310114191103031111",
        //   "hzgx": "1",
        //   "hkjz": "04016",
        //   "hkjwh": "df2fa75d-5874-4ccb-a0fc-41d3b5fefa31",
        //   "qrrq": "2018-03-01",
        //   "wsshkdz": "润肤乳反反复复",
        //   "fzgx": "1",
        //   "xzzjd": "04016",
        //   "xzzjw": "df2fa75d-5874-4ccb-a0fc-41d3b5fefa31",
        //   "lxdh": "3222222222",
        //   "jzdz": "32233"
        // }),
         JSON.stringify(this.submitObj), 
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        }).then(({
        body
      }) => {
        Bus.$emit('openDialog', {
          messages: [body.message],
          directTo: {
            name: 'admin'
          }
        })
        // if (body.status == 'error') {
        //   this.$router.push({name: 'admin'})
        // }
        // this.$emit('openModal', {
        //   messages: [body.message]
        // });
        this.$store.commit('moveStage');
      }).catch(e => console.log(e.message))
    }
  }
}
