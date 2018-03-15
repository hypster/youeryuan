<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout class="step1" v-if='current == ""' flex align-center justify-center>
      <v-flex @click='onclick(o)' class="text-xs-center" xs4 v-for='o in options' :key='o'>
        <v-card>
          <v-card-text>
            <p class="text-xs-center">{{o}}</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout class="step1" v-else flex align-center justify-center>
      <user-form></user-form>
    </v-layout>
    
    </v-container>
</template>
<script>
import UserForm from '@/components/userForm/UserForm'
  export default {
    data() {
      return {
        current: '',
        options: [
          '本区', '外省市', '其他'
        ]
      }
    },
    methods: {
      onclick(o) {
        this.current = o;
        console.log(o)
      }
    },
    components: {
      UserForm
    }
  }
</script>
