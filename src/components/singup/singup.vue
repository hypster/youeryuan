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
      <!-- 图片 -->
      <v-layout>
        <v-flex xs4>
          <div>
            <img src="/static/img/singup1-1.png?r=1"/>
          </div>
        </v-flex>
        <v-flex xs4>
          <div>
            <img src="/static/img/singup2-1.png?r=1"/>
          </div>
        </v-flex>
        <v-flex xs4>
          <div>
            <img src="/static/img/singup3-1.png?r=1"/>
          </div>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs2>
          <v-card color="gay">
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
        <v-flex xs10>
          <v-card>
            <v-card-text class="px-0">
              <v-container fluid>
                  <v-layout row>
                    <v-flex xs4>
                      <v-select
                        label="区内人户分离"
                        single-line
                        required
                      ></v-select>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs4>
                      <v-select
                        label="对口园(就近登记园)"
                        single-line
                        required
                      ></v-select>
                    </v-flex>
                    <v-flex xs4>
                      <v-alert type="info" color="primary" :value="true">
                        提醒: 就近登记园存在被调配的可能
                      </v-alert>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs4>
                      <v-checkbox
                        color="primary"
                        label="放弃报名该对口幼儿园"
                        v-model="checkbox"
                      ></v-checkbox>
                    </v-flex>
                  </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
              <v-layout row wrap justify-center class="mb-1 mr-1">
                <v-btn color="primary" small @click="saveSingUp('','','')">确定预约</v-btn>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    data () {
      return  {
        checkbox: false
      }
    }
  }
</script>