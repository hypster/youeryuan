<template>
  <v-layout justify-center column>
    <v-container fluid>
      <h1 class="headline primary--text">
        <v-icon class="mr-1" color="primary" medium>child_care</v-icon>
        我的宝贝</h1>
    </v-container>
    <v-container style="position:relative" fluid grid-list-lg>
      <v-layout v-if="messages.length" grid-list-sm row wrap fluid>
        <v-flex xs12>
          <steppers></steppers>          
        </v-flex>
        
        <v-flex xs12 v-if='messages.length' v-for="(message, i) in messages" :key="i">
          <v-container text-xs-center fluid>
            <v-layout row wrap>
            <v-flex xs4>
              <v-card>
                <v-card-media style="height:150px">
                  <v-container fill-height fluid>
                    <v-layout align-center justify-center fill-height>
                      <v-flex  xs4>
                        <v-icon large>account_box</v-icon>
                      </v-flex>
                      <v-flex xs4>
                        <span class="headline" v-text="message.xm"/>
                      </v-flex>
                  </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions>
                  <v-layout row wrap justify-space-around>
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
                  </v-layout>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs8>
              <v-container grid-list-xs>
                <v-layout row wrap>
                  <v-flex xs12>
                    <span class="title">基本信息</span>
                    <table>
                      <thead>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>年龄</th>
                      </thead>
                      <tr>
                      <td>{{message.xm}}</td>
                      <td>{{message.xb.name}}</td>
                      <td>{{message.csrq}}</td>
                      </tr>
                    </table>
                  </v-flex>
                  <v-flex xs6>
                    <span class="subheader">暂无报名信息</span>
                  </v-flex>
                  <v-flex xs6>
                    <span class="subheader">
                      暂无预约信息
                    </span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
            </v-layout>
          </v-container>
          <!-- <v-layout align-start column mx-0 px-0>
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
              
              <v-btn color="success" text-color='dark'>报名</v-btn>
              <v-btn color="error">预约</v-btn>
              <v-btn color="info">下载</v-btn>
            
            </v-flex>
            <v-spacer></v-spacer>
          </v-layout> -->
        </v-flex>
      </v-layout>
      <v-layout row wrap v-else>
        <v-flex>
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
