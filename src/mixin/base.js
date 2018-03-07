let regExp = require('@/lib/regExp');
const verifyBase = {
  methods: {
    getSMSCode() {
      this.waiting = true;
      let timer = setInterval(() => {
        this.countdown--;
        if(this.countdown == 0) {
          this.waiting = false;
          this.countdown = 60;
          clearInterval(timer);
        }
      }, 1000);
    },
    register () {
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
        // this.$http.post('/familyUser/register', {
        //   ename: ,
        //   ciphertext: 
        //   mobile,
        //   realname
        // }).then(res => {
        //   console.log(res);
        // })
      } else {
        this.$emit('openModal', this.errors.slice());
        console.log(this.errors)
        this.errors = []
        console.log(this.errors)
      }
    },
  }
}

module.exports = {
  verifyBase
}