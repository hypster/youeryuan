<template>
  <v-flex xs12 sm10>
  <v-form v-model="valid">
    <v-layout class="mb-5" row wrap justify-center>
      <h1 class="headline text-xs-center">上海市徐汇区2017年幼儿园登记表（本区户籍）</h1>
    </v-layout>
    <v-layout row wrap justify-start>
      <v-flex xs12 class="pa-0">
        <h1 class="subheader pa-0 pl-2 primary white--text">基本信息</h1>
        <v-divider></v-divider>
      </v-flex>
      <v-layout row wrap justify-start>
        <v-flex xs12 sm4>
          <v-text-field  label="姓名" v-model="submitObj.xm"  required :rules="[v=> !!v || '请填写姓名']"></v-text-field>
        </v-flex>
        <v-flex xs12 sm4>
          <v-select label="性别" v-model="submitObj.xb" item-text='name' item-value='value' :items="sexes" :rules="[v => !!v || '请填写性别']" required></v-select>
        </v-flex>
        <v-flex xs12 sm4>
          <v-select label="民族" v-model="submitObj.mz" item-text="name" item-value="value" :items="nationalities" :rules="[v => !!v || '请填写民族']" required></v-select>
        </v-flex>
        <v-flex xs12 sm4>
          <v-select label="籍贯" v-model="submitObj.jg" item-text="name" item-value="value" :items="provinces" :rules="[v => !!v || '请填写籍贯']" required></v-select>
        </v-flex>
        <v-flex xs12 sm4>
          <v-menu ref="menu" lazy :close-on-content-click="false" v-model="menu1" transition="scale-transition"       offset-y full-width :nudge-right="40" min-width="290px">
              <v-text-field slot="activator" label="出生日期" v-model="submitObj.csrq" prepend-icon="event" readonly></v-text-field>
              <v-date-picker locale="zh-cn" ref='picker' v-model="submitObj.csrq" no-title scrollable min="2000-01-01" :max="new Date().toISOString().substr(0, 10)">
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click='menu1=false'>取消</v-btn>
                <v-btn flat color="primary" @click ='$refs.menu.save(submitObj.csrq);menu1=false'>确定</v-btn>
              </v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs12 sm4>
          <v-text-field  label="幼儿证件号" v-model="submitObj.sfzjh"  required :rules="[v=> !!v || '请填写幼儿证件号，类型为身份证', testID]"></v-text-field>
        </v-flex>

      </v-layout>
    </v-layout>

      <v-layout row wrap justify-start>
        <v-flex xs12 class="pa-0">
          <h1 class="subheader pa-0 pl-2 primary white--text">户籍信息</h1>
          <v-divider></v-divider>
        </v-flex>
        <v-layout row wrap justify-start>
          <v-flex xs12 sm3>
            <v-select label="户主关系" v-model="submitObj.hzgx" item-text="name" item-value="value" :items="relationWithHosts" :rules="[v => !!v || '请填写户主关系']" required></v-select>
          </v-flex>
          <v-flex xs12 sm3>
            <v-select label="街道" autocomplete @input='changeJW(submitObj.hkjz, "jw1")' v-model="submitObj.hkjz" item-text="name" item-value="value" :items="zones" :rules="[v => !!v || '请填写街道']" required></v-select>
          </v-flex>
          <v-flex xs12 sm3>
            <v-select label="居委" autocomplete v-model="submitObj.hkjwh" item-text="jwmc" item-value="id" :items="jw1" :rules="[v => !!v || '请填写户主关系']" required></v-select>
          </v-flex>
          <v-flex xs12 sm3>
            <v-menu ref="menu" lazy :close-on-content-click="false" v-model="menu2" transition="scale-transition"       offset-y full-width :nudge-right="40" min-width="290px">
                <v-text-field slot="activator" label="迁入日期" v-model="submitObj.qrrq" prepend-icon="event" readonly></v-text-field>
                <v-date-picker locale="zh-cn" ref='picker' v-model="submitObj.qrrq" no-title scrollable :max="new Date().toISOString().substr(0, 10)">
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click='menu2=false'>取消</v-btn>
                  <v-btn flat color="primary" @click ='$refs.menu.save(submitObj.qrrq);menu2=false'>确定</v-btn>
                </v-date-picker>
            </v-menu>
          </v-flex>
          <v-flex xs2>
            <v-text-field  label="户籍地址" value='徐汇区' disabled required ></v-text-field>
          </v-flex>
          <v-flex xs10>
            <v-text-field  v-model='submitObj.wsshkdz' :rules="[v => !!v|| '请填写户籍地址']" required ></v-text-field>
          </v-flex>

        </v-layout>
      </v-layout>
      <v-layout row wrap justify-start>
        <v-flex xs12 class="pa-0">
          <h1 class="subheader pa-0 pl-2 primary white--text">居住信息</h1>
          <v-divider></v-divider>
        </v-flex>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <v-select label="房主关系" v-model="submitObj.fzgx" item-text="name" item-value="value" :items="relationWithHosts" :rules="[v => !!v || '请填写户主关系']" required></v-select>
          </v-flex>
          <v-flex xs12 sm4>
            <v-select label="街道" @input="changeJW(submitObj.xzzjd, 'jw2')" autocomplete v-model="submitObj.xzzjd" item-text="name" item-value="value" :items="zones" :rules="[v => !!v || '请填写街道']" required></v-select>
          </v-flex>
          <v-flex xs12 sm4>
            <v-select label="居委" autocomplete v-model="submitObj.xzzjw" item-text="jwmc" item-value="id" :items="jw2" :rules="[v => !!v || '请填写户主关系']" required></v-select>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="固定电话" v-model="submitObj.lxdh" :rules="[v => !!v || '请填写固定电话', testPhone]" required></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field  label="现住地址" v-model='submitObj.jzdz' :rules="[v => !!v|| '请填写户籍地址']" required ></v-text-field>
          </v-flex>
        </v-layout>
      </v-layout>
      <v-layout row wrap justify-start>
        <v-flex xs12 class="pa-0">
          <h1 class="subheader pa-0 pl-2 primary white--text">幼儿补充信息</h1>
          <v-divider></v-divider>
        </v-flex>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <!-- <v-select label="身体疾病情况" v-model='health' item-value='value' item-text='name' :items='healths'></v-select> -->
            <v-text-field label="身体疾病情况" v-model='submitObj.stjbqk'></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="饮食起居情况" v-model='submitObj.ysqjqk'></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="药物过敏史" v-model='submitObj.ywgms'></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="儿童日常接送人" v-model="submitObj.rcjsr"></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-select label="户主关系" v-model="submitObj.rcjsrgx" item-text="name" item-value="value" :items="relationWithHosts" :rules="[v => !!v || '请填写户主关系']"></v-select>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="联系电话" :rules=[testPhone] v-model="submitObj.rcjsrdh"></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="紧急情况通知人" v-model="submitObj.jjtzr"></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-select label="户主关系" v-model='submitObj.jjtzrgx' item-text="name" item-value="value" :items="relationWithHosts" :rules="[v => !!v || '请填写户主关系']"></v-select>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="联系电话" :rules=[testPhone] v-model="submitObj.jjtzrdh"></v-text-field>
          </v-flex>
        </v-layout>
      </v-layout>
      <v-layout row wrap justify-start>
        <v-flex xs12>
          <v-layout class="text-xs-left">
            <v-flex xs12 class="pa-0">
              <h1 class="subheader pa-0 pl-2 primary white--text">监护人信息
                <v-tooltip bottom>
                <v-btn slot="activator"  color='warning' flat fab small @click='pushGuardian' :disabled="submitObj.concatlist.length > 4">
                  <v-icon>add</v-icon>
                </v-btn>
                <span>最对填5个监护人信息</span>
              </v-tooltip></h1>
              <v-divider></v-divider>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-layout v-for='i in submitObj.concatlist.length' :key='i' row wrap align-center justify-start>
          <v-flex xs12 sm1>
            <v-btn color='dark' flat fab small style="transform: translateY(-10%)" @click='removeGuardian(i-1)'>
              <v-icon fixed small>clear</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 sm1>
            <v-select label="称谓" v-model="submitObj.concatlist[i-1].gx" item-text="name" item-value="value" :items='familyRelations'></v-select>
          </v-flex>
          <v-flex xs12 sm1>
            <v-text-field label="姓名" v-model="submitObj.concatlist[i-1].xm"></v-text-field>
          </v-flex>
          <v-flex xs12 sm1>
            <v-text-field label="年龄" v-model="submitObj.concatlist[i-1].nl"></v-text-field>
          </v-flex>
          <v-flex xs12 sm2>
            <v-select label="学历" v-model="submitObj.concatlist[i-1].xl" item-text='name' item-value="value" :items="educations"></v-select>
          </v-flex>
          <v-flex xs12 sm3>
            <v-text-field label="工作单位" v-model="submitObj.concatlist[i-1].gzdw"></v-text-field>
          </v-flex>
          <v-flex xs12 sm3>
            <v-text-field label="手机号码" :rules=[testMobile] v-model="submitObj.concatlist[i-1].dh"></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-btn color='primary' @click='submitForm'>提交</v-btn>
        </v-layout>
      </v-layout>  
  </v-form>
  <p style="margin-top:100px">
    {{submitObj}}
  </p>
  </v-flex>
</template>
<script>
import {studentRegisterBase} from '@/mixin/base'

export default {
  data() {
    return {
      
    };
  },
  mounted () {
    //证件类型默认身份证
    this.$http.post('public/eZjlx').then(({body}) => {
        this.submitObj.ezjlx = body.data.filter(d => d.key == 'JMSFZ')[0].value
    })
  },
  methods: {
    
  },
  watch: {
    menu1(val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  props: ['xxcjlx', "api", "childInfo"],
  mixins: [studentRegisterBase],
  mounted(){
    console.log(this.api)
  }
};
</script>
<style lang='stylus' scoped>

</style>

