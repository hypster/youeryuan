<template>
  <v-container grid-list-md text-xs-center>
      <v-container fluid>
        <v-flex xs12 text-xs-left>
          <h1 class="headline primary--text">
            <v-icon class="mr-1" color="primary" medium>child_care</v-icon>
            预约面审</h1>
        </v-flex>
      </v-container>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs2>
            <v-card dark color="primary">
              <v-card-text>
                <div class="avatar">
                  <img src="/static/img/gril.png"/>
                </div>
                <p>
                  <label>张三</label>
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs5 v-if="nearbyItems.length > 0">
            <v-card>
              <v-card-text class="px-0">
                <v-container fluid>
                    <v-layout row>
                      <v-flex xs12 justify-center large>
                        上海市实验示范小学
                      </v-flex>
                    </v-layout>
                    <v-layout row>
                      <v-flex xs12>
                        <v-select
                          :items="nearbyItems"
                          v-model="nearbyVal"
                          ref="nearbyVal"
                          label="预约时间"
                          item-text="name"
                          item-value="value"
                          :rules="[() => !!nearbyVal || '请选择预约时间']"
                          item-disabled="disabled"
                          single-line
                          required
                        ></v-select>
                      </v-flex>
                    </v-layout>
                  </v-container>
              </v-card-text>
              <v-card-actions>
                <v-layout row wrap justify-end class="mb-1 mr-1">
                  <v-btn color="primary" small @click="saveSingUp('','','')">确定预约</v-btn>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs5>
            <v-card>
              <v-card-text class="px-0">示范园信息</v-card-text>
              <v-card-actions>
                <v-layout row wrap justify-end class="mb-1 mr-1">
                  <v-btn color="primary" small @click="saveSingUp('', '', '')">确定预约</v-btn>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </v-container>
</template>

<script>
  export default {
    name: "appo",
    data: () => ({
      dialog: true,
      message: '',
      title: '',
      nearbyVal: '',
      demoVal: '',
      nearbyItems: [],  //  对口园时间
      demoItems: [],  //  示范园时间选择
    }),
    computed: {
      form () {
        return {
          nearbyVal: this.nearbyVal
        }
      }
    },
    methods: {
      saveSingUp (childid, schooldid, start) {
        //  预约面审时间
        //  动态加载组件
        if(this.$refs['nearbyVal'].validate(true)) {
          //  参数组合
          let param = {
            studentid: '6640B5151C4C6195E050A8C0080F226F',
            schoolInfo: {
              "schoolcode": '3101041027'
            },
            schoolyyconfInfo: {
              "id": this.nearbyVal
            }
          }
          this.$http.post('userbmyy/addBmyy', param).then(({body}) => {
            console.log(body)
            if (body.status === 'success') {
              this.$Message.info(body['message'])
            } else {
              this.$Message.error(body['message'])
            }
          }).catch(e => {
            this.$Message.error(e.body)
          })
        }
      },
      group (ary) {
        let newAry = [];
        if (ary instanceof Array) {
          ary.forEach((item) => {
            let i = `${item.yykssj} 至 ${item.yyjssj} `
            let disabled = false
            if (item.yyrsxz && item.yyrsxz.value === 0) {
              i += `(可预约)`
              disabled = false 
            } else {
              if (item.yyrs > item.yyyrs) {
                i += `(可预约)`
                disabled = false
              } else {
                i += `(不可预约)`
                disabled = true
              }
            }
            newAry.push({
              name: i,
              value: item.id,
              disabled: disabled
            })
          })
        }
        return newAry;
      }
    },
    mounted() {
      // 初始化数据
      this.$http.post('schoolyyconf/findSchoolyyconfInfoBySchoolCode', {schoolcode: "3101041027"}).then(({body}) => {
        if (body.data) {
          this.nearbyItems = this.group(body.data)
        }
      }).catch((e) => {
        this.$Message.error('网络错误')
      })
    },
    components: {
    }
  };

</script>
<style lang="stylus">
.fr {
  float right;
  cursor pointer;
}
.avatar img {
  max-width 100%
}
</style>
