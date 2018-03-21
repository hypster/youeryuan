<template>
  <v-layout justify-center column>
    <v-container fluid>
      <h1 class="headline primary--text">
        <v-icon class="mr-1" color="primary" medium>child_care</v-icon>
        我的宝贝</h1>
    </v-container>
    <v-container style="position:relative" fluid grid-list-lg>
      <v-layout row wrap>
        <div v-if="messages.length">
          <steppers ></steppers>
          <v-flex xs12 v-if='messages.length' v-for="(message, i) in messages" :key="i">
            <v-layout align-start column mx-0 px-0>
              <v-flex class="text-center">
                <v-chip color='primary' v-if='message.xm'>
                  <v-avatar>
                    <v-icon>face</v-icon>
                  </v-avatar>
                  {{message.xm}}
                </v-chip>
                <v-chip  color='primary' v-if='message.csrq'>
                  <v-avatar>
                    <v-icon >cake</v-icon>
                  </v-avatar>
                  <span>{{getAge(message.csrq)}}</span>
                  
                </v-chip>
                <v-tooltip bottom>
                  <v-btn icon href="" slot="activator">
                    <v-icon>pageview</v-icon>
                  </v-btn>
                  <span>查看</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <v-btn :to="getUrl(message)" icon href="" slot="activator">
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <span>修改</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <v-btn icon href="" slot="activator">
                    <v-icon>delete</v-icon>
                  </v-btn>
                  <span>删除</span>
                </v-tooltip>
                <v-btn color="success" text-color='dark'>报名</v-btn>
                <v-btn color="error">预约</v-btn>
                <v-btn color="info">下载</v-btn>
              
              </v-flex>
              <v-spacer></v-spacer>
            </v-layout>
          </v-flex>
        </div>
        <v-flex v-else>
          <steppers></steppers>
          <h1 class="subheader">当前还没有任何宝贝信息, 请先至左侧菜单栏添加您的宝贝</h1>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>
<script>
import steppers from '@/components/steppers/Steppers'
import {getAge} from '@/lib/util'
  export default {
    name: "children",
    data: () => ({
      messages: []
    }),
    methods: {
      getAge,
      getUrl(message) {
        // debugger
        let urlObj;
        let type = Object.create(message.xxcjlx);
        if(type.value == "1") {
          urlObj = {name: 'editLocal', params: {id: message.id}}
        } else if(type.value == "2") {
          urlObj = {name: 'editProvince', params: {id: message.id}}
        } else if(type.value == "3") {
          urlObj = {name: 'editOthers', params: {id: message.id}}
        }
        // console.log(urlObj)
        return urlObj;
      }
    },
    mounted() {
      // this.$http.get('public/getFamilyUserSession').then(({body}) => {
      //   console.log(body)
      // })
      this.$http.post("student/list", {}).then(({
        body
      }) => {

        console.log(body)
        this.messages = body.data.content
        // return {
        //   avatar: c.picture.large,
        //   name: `${c.name.first} ${c.name.last}`
        // };
      });
    },
    components: {
      steppers
    }
  };

</script>
<style lang="stylus">
  .expansion-panel__header {
    padding: 0;
  }

</style>
