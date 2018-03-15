<template>
  <v-flex xs12 sm10>
  <v-form v-model="valid">
    <v-layout class="mb-5" row wrap justify-center>
      <h1 class="headline text-xs-center">上海市徐汇区2017年幼儿园登记表（本区户籍）</h1>
    </v-layout>
    <v-layout row wrap justify-start>
      <v-flex xs12 class="pa-0">
        <h1 class="subheader pa-0">基本信息</h1>
      </v-flex>
      <v-layout row wrap justify-start>
        <v-flex xs12 sm4>
          <v-text-field  label="姓名" v-model="name"  required :rules="[v=> !!v || '请填写姓名']"></v-text-field>
        </v-flex>
        <v-flex xs12 sm4>
          <v-select label="性别" v-model="sex" item-text='name' item-value='value' :items="sexes" :rules="[v => !!v || '请填写性别']" required></v-select>
        </v-flex>
        <v-flex xs12 sm4>
          <v-select label="民族" v-model="nationality" item-text="name" item-value="value" :items="nationalities" :rules="[v => !!v || '请填写民族']" required></v-select>
        </v-flex>
        <v-flex xs12 sm4>
          <v-select label="籍贯" v-model="nationality" item-text="name" item-value="value" :items="nationalities" :rules="[v => !!v || '请填写籍贯']" required></v-select>
        </v-flex>
        <v-flex xs12 sm4>
          <v-menu ref="menu" lazy :close-on-content-click="false" v-model="menu1" transition="scale-transition"       offset-y full-width :nudge-right="40" min-width="290px">
              <v-text-field slot="activator" label="出生日期" v-model="birth" prepend-icon="event" readonly></v-text-field>
              <v-date-picker locale="zh-cn" ref='picker' v-model="birth" no-title scrollable min="2000-01-01" :max="new Date().toISOString().substr(0, 10)">
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click='menu1=false'>取消</v-btn>
                <v-btn flat color="primary" @click ='$refs.menu.save(birth)'>确定</v-btn>
              </v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs12 sm4>
          <v-text-field  label="幼儿证件号" v-model="IDNum"  required :rules="[v=> !!v || '请填写幼儿证件号', testID]"></v-text-field>
        </v-flex>

      </v-layout>
    </v-layout>

      <v-layout row wrap justify-start>
        <v-flex xs12 class="pa-0">
          <h1 class="subheader pa-0">户籍信息</h1>
        </v-flex>
        <v-layout row wrap justify-start>
          <v-flex xs12 sm3>
            <v-select label="街道" v-model="zone1" item-text="name" item-value="value" :items="zones" :rules="[v => !!v || '请填写街道']" required></v-select>
          </v-flex>
          <v-flex xs12 sm3>
            <v-select label="户主关系" v-model="relationWithHost" item-text="name" item-value="value" :items="relationWithHosts" :rules="[v => !!v || '请填写户主关系']" required></v-select>
          </v-flex>
          <v-flex xs12 sm3>
            <v-select label="居委" v-model="nationality" item-text="name" item-value="value" :items="nationalities" :rules="[v => !!v || '请填写户主关系']" required></v-select>
          </v-flex>
          <v-flex xs12 sm3>
            <v-menu ref="menu" lazy :close-on-content-click="false" v-model="menu2" transition="scale-transition"       offset-y full-width :nudge-right="40" min-width="290px">
                <v-text-field slot="activator" label="迁入日期" v-model="moveDate" prepend-icon="event" readonly></v-text-field>
                <v-date-picker locale="zh-cn" ref='picker' v-model="moveDate" no-title scrollable :max="new Date().toISOString().substr(0, 10)">
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click='menu2=false'>取消</v-btn>
                  <v-btn flat color="primary" @click ='$refs.menu.save(birth)'>确定</v-btn>
                </v-date-picker>
            </v-menu>
          </v-flex>
          <v-flex xs2>
            <v-text-field  label="户籍地址" value='徐汇区' disabled required ></v-text-field>
          </v-flex>
          <v-flex xs10>
            <v-text-field  v-model='hostAddress' :rules="[v => !!v|| '请填写户籍地址']" required ></v-text-field>
          </v-flex>

        </v-layout>
      </v-layout>
      <v-layout row wrap justify-start>
        <v-flex xs12 class="pa-0">
          <h1 class="subheader pa-0">居住信息</h1>
        </v-flex>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <v-select label="街道" v-model="zone2" item-text="name" item-value="value" :items="zones" :rules="[v => !!v || '请填写街道']" required></v-select>
          </v-flex>
          <v-flex xs12 sm4>
            <v-select label="户主关系" v-model="relationWithOwner" item-text="name" item-value="value" :items="relationWithHosts" :rules="[v => !!v || '请填写户主关系']" required></v-select>
          </v-flex>
          <v-flex xs12 sm4>
            <v-select label="居委" v-model="nationality" item-text="name" item-value="value" :items="nationalities" :rules="[v => !!v || '请填写户主关系']" required></v-select>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="固定电话" v-model="telephone" :rules="[v => !!v || '请填写固定电话']" required></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field  label="现住地址" v-model='currentAddress' :rules="[v => !!v|| '请填写户籍地址']" required ></v-text-field>
          </v-flex>
        </v-layout>
      </v-layout>
      <v-layout row wrap justify-start>
        <v-flex xs12 class="pa-0">
          <h1 class="subheader pa-0">幼儿补充信息</h1>
        </v-flex>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <v-select label="身体疾病情况" v-model='health' item-value='value' item-text='name' :items='healths'></v-select>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="饮食起居情况"></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="药物过敏史"></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="儿童日常接送人"></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="关系"></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="联系电话"></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="紧急情况通知人"></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="关系"></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="联系电话"></v-text-field>
          </v-flex>
        </v-layout>
      </v-layout>
      <v-layout row wrap justify-start>
        <v-flex xs12>
          <v-layout>
            <h1 class="subheader pa-0">监护人信息</h1>
            <v-btn  color='primary' flat fab small @click='pushGuardian'>
              <v-icon>add</v-icon>
            </v-btn>
          </v-layout>
        </v-flex>
        <v-layout v-for='i in guardians.length' :key='i' row wrap align-center justify-start>
          <v-btn color='dark' flat fab small style="transform: translateY(-10%)" @click='removeGuardian(i-1)'>
            <v-icon fixed small>clear</v-icon>
          </v-btn>
          <v-flex xs12 sm1>
            <v-text-field label="称谓"></v-text-field>
          </v-flex>
          <v-flex xs12 sm1>
            <v-text-field label="姓名"></v-text-field>
          </v-flex>
          <v-flex xs12 sm1>
            <v-text-field label="年龄"></v-text-field>
          </v-flex>
          <v-flex xs12 sm1>
            <v-text-field label="学历"></v-text-field>
          </v-flex>
          <v-flex xs12 sm4>
            <v-text-field label="工作单位"></v-text-field>
          </v-flex>
          <v-flex xs12 sm3>
            <v-text-field label="手机号码"></v-text-field>
          </v-flex>
        </v-layout>
      </v-layout>  
  </v-form>
  </v-flex>
</template>
<script>
import { IDNum } from "@/lib/regExp";
export default {
  data() {
    return {
      sexes: [{
        name: "男", value:1,
      }, {
         name: "女", value:2
      }],
      nationalities: [],
      zones: [],
      relationWithHosts: [],
      healths: [],
      numOfGuardian: 1,
      name: "",
      sex: null,
      nationality: "",
      province: "",
      birth: "",
      IDNum: "",
      zone1: "",
      health: "",
      relationWithHost: "",
      moveDate: "",
      hostAddress: "",
      zone2: "",
      relationWithOwner: "",
      currentAddress: "",
      telephone: "",
      guardians: [{
        relation: '',
        name: '',
        age: '',
        education: '',
        workplace: '',
        mobile: ''
      }],
      menu1: false,
      menu2: false,
      valid: false
    };
  },
  mounted() {
    this.$http.get("public/eMz").then(({ body }) => {
      this.nationalities = body.data;
    });
    this.$http.get("public/eJd").then(({ body }) => {
      this.zones = body.data.sort(({ name: a }, { name: b }) => {
        return a.localeCompare(b, "zh-Hans-CN", { sensitivity: "accent" });
      });
    });
    this.$http.post('public/eJkzk').then(({body}) => {
      this.healths = body.data;
    })
    this.$http.post('public/eHzgx').then(({body}) => {
      this.relationWithHosts = body.data;
    })
  },
  methods: {
    testID(v) {
      return IDNum.test(v) || "身份证号格式不正确";
    },
    save(date) {
      this.$refs.menu.save(date);
    },
    pushGuardian(){
      this.guardians.push({
        relation: '',
        name: '',
        age: '',
        education: '',
        workplace: '',
        mobile: ''
      })
    },
    removeGuardian(i) {
      if(i >= 0)
        this.guardians.splice(i, 1)
    }
  },
  watch: {
    menu1(val) {
      val && this.$nextTick(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  computed: {}
};
</script>
<style lang='stylus' scoped>

</style>

