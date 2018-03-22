<template>
  <v-layout justify-center column>
    <v-container fluid>
      <h1 class="headline primary--text">
        <v-icon class="mr-1" color="primary" medium>child_care</v-icon>
        我的宝贝</h1>
    </v-container>

    <v-container style="position:relative" fluid grid-list-lg>
      <v-container  fluid v-if="messages.length" grid-list-xs>
        <v-layout grid-list-sm row wrap fluid>
          <v-flex fill-height v-for="(message, i) in messages" :key="i">
            <steppers></steppers>
            <v-container text-xs-center fluid>
              <v-layout row wrap>
                <v-flex xs4>
                  <v-card fill-height>
                    <v-card-media src="/static/img/boy.png" style="min-height:150px" contain>
                      <!-- <v-container fill-height fluid>
                        <v-layout align-center justify-center fill-height>
                          <v-flex xs4>
                            <v-icon large>account_box</v-icon>
                          </v-flex>
                          <v-flex xs4>
                            <span class="headline" v-text="message.xm" />
                          </v-flex>
                        </v-layout>
                      </v-container> -->
                    </v-card-media>
                    <v-card-actions>
                      <v-layout row wrap justify-space-around>
                        <v-tooltip bottom>
                          <v-btn icon href="" slot="activator">
                            <v-icon color="info">pageview</v-icon>
                          </v-btn>
                          <span>查看</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                          <v-btn :to="getUrl(message)" icon href="" slot="activator">
                            <v-icon color='primary'>edit</v-icon>
                          </v-btn>
                          <span>修改</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                          <v-btn icon href="" slot="activator">
                            <v-icon color="error">delete</v-icon>
                          </v-btn>
                          <span>删除</span>
                        </v-tooltip>
                      </v-layout>
                    </v-card-actions>
                    <v-layout row wrap>
                      <v-flex xs12>
                        <h1 class="subheader pa-0 pl-2 primary white--text">基本信息</h1>
                      </v-flex>
                      <v-flex xs12>
                        <v-layout row wrap justify-center>
                          <v-flex xs5>
                            <span>姓名：</span>
                            <span class="deco">{{message.xm}}</span>
                          </v-flex>
                          <v-flex xs3 fixed>
                            <span>性别：</span>
                            <span class="deco">{{message.xb.name}}</span>
                          </v-flex>
                          <v-flex xs4>
                            <span>年龄：</span>
                            <span class="deco">{{getAge(message.csrq)}}岁</span>
                          </v-flex>
                          <v-flex xs12>
                            <p class="text-xs-center">
                            </p>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>
                <v-flex fill-height xs8>
                  <v-card>
                    <v-container grid-list-xs>
                      <v-layout row wrap>
                        <v-flex xs12>
                          <v-layout row wrap>
                            <v-flex xs12>
                              <h1 class="subheader pa-0 pl-2 primary white--text">报名信息</h1>
                              <v-btn color='primary' class="mt-4" outline>报名</v-btn>
                            </v-flex>
                          </v-layout>
                            <span class="subheading primary--text text-xs-center">暂无报名信息</span>    
                        </v-flex>
                        <v-flex xs12>
                          <v-layout row wrap>
                            <v-flex xs12>
                              <h1 class="subheader pa-0 pl-2 primary white--text">预约信息</h1>
                              <v-btn color='primary' class="mt-4" disabled outline>预约</v-btn>
                            </v-flex>
                          </v-layout>
                          <span class="text-xs-center subheading primary--text">
                            暂无预约信息
                          </span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
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
      </v-container>
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
  import {getAge} from '@/lib/util';

  export default {
    name: "children",
    data() {
      return {
        // messages: [],
        messages: [
          { xm: 'efefef', xxcjlx: {value: '1'}, id: '1', csrq: '19991130', xb: {name: '男'}}
          ]
      }
    },
    methods: {
      getAge,
      getUrl(message) {
        // debugger
        let urlObj;
        let type = Object.create(message.xxcjlx);
        if (type.value == "1") {
          urlObj = {
            name: 'editLocal',
            params: {
              id: message.id
            }
          }
        } else if (type.value == "2") {
          urlObj = {
            name: 'editProvince',
            params: {
              id: message.id
            }
          }
        } else if (type.value == "3") {
          urlObj = {
            name: 'editOthers',
            params: {
              id: message.id
            }
          }
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
        if(body.status == 'success')
          this.messages = body.data.content
        else
          this.$Message.error(body.message)
        // return {
        //   avatar: c.picture.large,
        //   name: `${c.name.first} ${c.name.last}`
        // };
      }).catch(e => {
        this.$Message.error(e.body)
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
  // .deco 
  //   text-decoration underline
</style>
