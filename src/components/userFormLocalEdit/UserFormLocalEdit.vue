<template>
<v-container fill-height fluid grid-list-xl>
  <v-layout class="step1" flex align-center justify-center>
  <user-form-local :api="api"></user-form-local>
  </v-layout>
</v-container>
</template>
<script>
import UserFormLocal from '@/components/userFormLocal/UserFormLocal'
  export default {
    data() {
      return {
        api: 'http://10.4.4.3:8080/register/modifyRegister'
      }
    },
    components: {
      UserFormLocal
    }
  }
</script>
