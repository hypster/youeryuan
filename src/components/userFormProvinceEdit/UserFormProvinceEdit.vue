<template>
<v-container fill-height fluid grid-list-xl>
  <v-layout class="step1" flex align-center justify-center>
  <user-form-province :api="api"></user-form-province>
  </v-layout>
</v-container>
</template>
<script>
import UserFormProvince from '@/components/userFormProvince/UserFormProvince'
  export default {
    data() {
      return {
        api: 'http://10.4.4.3:8080/register/modifyRegister'
      }
    },
    components: {
      UserFormProvince
    }
  }
</script>
