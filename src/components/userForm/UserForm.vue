<template>
  <v-flex>
  <v-form v-model="valid">
    <v-text-field label="姓名" v-model="name"  required :rules="[v=> !!v || '请填写姓名']"></v-text-field>
    <v-select label="性别" v-model="sex" :items="sexes" :rules="[v => !!v || '请填写性别']" required></v-select>
    <v-select label="民族" v-model="nationality" item-text="name" item-value="value" :items="nationalities" :rules="[v => !!v || '请填写民族']" required></v-select>
    <v-menu ref="menu" lazy :close-on-content-click="false" v-model="menu" transition="scale-transition"       offset-y full-width :nudge-right="40" min-width="290px">
        <v-text-field slot="activator" label="出生日期" v-model="birth" prepend-icon="event" readonly></v-text-field>
        <v-date-picker ref='picker' v-model="birth" no-title scrollable min="2000-01-01" :max="new Date().toISOString().substr(0, 10)">
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click='menu=false'>Cancel</v-btn>
          <v-btn flat color="primary" @click ='$refs.menu.save(birth)'>OK</v-btn>
        </v-date-picker>
      </v-menu>
  </v-form>
  </v-flex>
</template>
<script>
  export default {
    data() {
      return {
        sexes: ['男','女'],
        nationalities: [],
        name: '',
        sex: null,
        nationality: '',
        province: '',
        birth: '',
        email: '',
        menu: false,
        valid: false

      }
    },
    mounted() {
      this.$http.get('public/eMz').then(({body}) => {
        console.log(body.data)
        this.nationalities = body.data
      })
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      }
    },
    watch: {
      menu (val) {
        val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
    },
    computed: {
      
    }
  }
</script>
