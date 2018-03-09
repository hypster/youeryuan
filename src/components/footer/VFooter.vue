<template>
  <footer>
    <div class="logo"><img src="./logo.png" alt=""></div>
    <div class="map">
      <table>
        <thead>
          <th><a href="">信息公告</a></th>
          <th><a href="">网站服务</a></th>
          <th><a href="">常用功能</a></th>
        </thead>
        <tbody>
          <tr>
            <td><a href="">政策信息</a></td>
            <td><a href="">疑难解答</a></td>
            <td><a href="">注册登录</a></td>
          </tr>
          <tr>
            <td><a href="">新闻公告</a></td>
            <td><a href="">网站协议</a></td>
            <td><a href="">免费注册</a></td>
          </tr>
          <tr>
            <td><a href="">热门新闻</a></td>
            <td><a href="">法律声明</a></td>
            <td><a href="">找回密码</a></td>
          </tr>

        </tbody>
      </table>
    </div>
    <div class="contact">
      <ul>
        <li>客服：334-4343-3443</li>
        <li>工作日（9:00 - 17:30）</li>
        <li>沪工网安备31032042u923号</li>
        <li>沪ICP备3232也293号</li>
      </ul>
    </div>
  </footer>
</template>
<script>
  export default {
    name: 'vfooter'
  }
</script>
<style lang="stylus" scoped>
footer 
  display flex
  justify-content space-between
  padding-top 34px
  border-top 1px solid #ccc
  margin-top 30px
  .logo
    margin-left 10px
  .map
    flex 1
    margin-left 20px
    table
      text-align center
      color #666
      a
        text-decoration none
        color #666
      th
        font-size 14px
        line-height 200%
      td 
        width 100px
        font-size 12px
        line-height 200%
  .contact
    font-size 12px
    color #666
    line-height 200%
    text-align right 
    margin-right 10px
</style>

