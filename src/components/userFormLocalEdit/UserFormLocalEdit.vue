<template>
<v-container fill-height fluid grid-list-xl>
  <v-layout class="step1" flex align-center justify-center>
  <user-form-local :submitObj="submitObj" :api="api"></user-form-local>
  </v-layout>
  <code>{{submitObj}}</code>
</v-container>
</template>
<script>
import UserFormLocal from '@/components/userFormLocal/UserFormLocal'
  export default {
    data() {
      return {
        api: 'http://10.4.4.3:8080/yeyzsxjxh/register/modifyRegister',
        childInfo: null
      }
    },
    components: {
      UserFormLocal
    },
    created() {
      this.$http.post('student/show', {id: this.$route.params.id}).then(({body}) => {
        console.log(body)
        this.childInfo = body.data
        // this.submitObj.concatlist = this.submitObj.stuJhrInfos
      })
    }
  }
</script>
