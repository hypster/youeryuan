<template>
<v-container fill-height fluid grid-list-xl>
  <v-layout class="step1" flex align-center justify-center>
  <user-form-others :api="api"></user-form-others>
  </v-layout>
</v-container>
</template>
<script>
import UserFormOthers from '@/components/userFormOthers/UserFormOthers'
  export default {
    data() {
      return {
        api: 'http://10.4.4.3:8080/register/modifyRegister'
      }
    },
    components: {
      UserFormOthers
    }
  }
</script>
