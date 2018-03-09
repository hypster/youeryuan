let regExp = require('@/lib/regExp');
const verifyBase = {
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
    getSMSCode(type=1) {
      if(!regExp.mobile.test(this.mobile)) {
        return this.$emit('openModal', {messages: ['请先输入准确的手机号']});
      }
      this.$http.post('public/SMSSend', {
        mobile: this.mobile,
        type: type
      }).then(r => {
        console.log(r)
      })
      this.waiting = true;
      let _countdown = this.countdown
      let timer = setInterval(() => {
        this.countdown--;
        if(this.countdown == 0) {
          this.waiting = false;
          this.countdown = _countdown;
          clearInterval(timer);
        }
      }, 1000);
    },
    register (api) {
      if (this.mobile.trim() == '') {
        this.errors.push('请输入手机号码');
      }
      else if(!regExp.mobile.test(this.mobile)) {
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
        }).then(this.cb);
      } else {
        this.$emit('openModal', {messages: this.errors.slice()});
        this.errors = []
      }
    },
    cb({body}) {
        this.$emit('openModal', {messages: [body.message]});
    }
  }
}

module.exports = {
  verifyBase
}