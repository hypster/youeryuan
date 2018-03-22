<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout class="step1" v-if='xxcjlx == ""' flex align-center justify-center row wrap>
      <v-flex xs12>
        <h1 class="text-sm-center">请选择信息采集类型</h1>
      </v-flex>
      <v-flex @click='onclick(o)' class="chooseType text-xs-center" xs4 v-for='o in options' :key='o.value'>
        <v-card>
          <v-card-text>
            <p class="text-xs-center">{{o.name}}</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- -if='xxcjlx.value == "1"' -->
    <v-layout class="step1" v-else-if="xxcjlx == 1" flex align-center justify-center>
      <user-form-local api="http://61.151.214.92:8082/yeyzsxjxh/register/addRegisterJz" :xxcjlx="xxcjlx"></user-form-local>
    </v-layout>
    <v-layout class="step1" v-else-if="xxcjlx == 2" flex align-center justify-center>
      <user-form-province api="http://61.151.214.92:8082/yeyzsxjxh/register/addRegisterJz" :xxcjlx="xxcjlx"></user-form-province>
    </v-layout>
    <v-layout class="step1" v-else flex align-center justify-center>
      <user-form-others api="http://61.151.214.92:8082/yeyzsxjxh/register/addRegisterJz" :xxcjlx="xxcjlx"></user-form-others>
      <!-- http://10.4.4.3:8080 -->
    </v-layout>
    
  </v-container>
</template>
<script>
import UserFormLocal from '@/components/userFormLocal/UserFormLocal'
import UserFormProvince from '@/components/userFormProvince/UserFormProvince'
import UserFormOthers from '@/components/userFormOthers/UserFormOthers'
  export default {
    data() {
      return {
        xxcjlx: '',
        options: []
      }
    },
    methods: {
      onclick(o) {
        this.xxcjlx = o.value;
      }
    },
    components: {
      UserFormLocal, UserFormProvince, UserFormOthers
    },
    mounted (){
      this.$http.post('public/eYyxxcjlx').then(({body}) => {
        this.options = body.data.filter(d => d.name != '全部')
      })
    }
  }
</script>
<style lang="stylus" scoped>
.chooseType:hover
  cursor pointer
</style>

