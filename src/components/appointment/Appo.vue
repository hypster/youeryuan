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
          <v-flex xs5>
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
                          item-disabled="disabed"
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
                  <v-btn color="primary" small>确定预约</v-btn>
                </v-layout>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <dialog-modal :dialog="dialog" :title="title" :message="message"></dialog-modal>
  </v-container>
</template>

<script>
import dialogModal from '@/components/modal/dialogModal'
  export default {
    name: "children",
    data: () => ({
      dialog: false,
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
        if(this.$refs['nearbyVal'].validate(true)) {
          this.$emit('openModal', {
            messages: '错误'
          });
          this.$http.post('schoolyyconf/findSchoolyyconfInfoBySchoolCode', {parent: "-1"}).then(({body}) => {
            this.provinces = body.data;
          })
        }
      }
    },
    mounted() {
      // 初始化数据
      this.$http.post('schoolyyconf/findSchoolyyconfInfoBySchoolCode', {schoolcode: "-1"}).then(({body}) => {

      }).catch((e) => {
        this.dialog = true
        this.title = '错误信息'
        this.message = e.body.error
        this.$emit('openModal', {
          messages: e.body.error
        });
        console.log(e)
        console.log('请求发生错误')
      })
    },
    components: {
      dialogModal
    }
  };

</script>
<style lang="stylus">
.avatar img {
  max-width 100%
}
</style>
