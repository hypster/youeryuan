<template>
  <v-layout justify-center column>
    <v-container fluid>
      <h1 class="headline primary--text"><v-icon class="mr-1" color="primary" medium>child_care</v-icon>
      我的宝宝</h1>
    
    </v-container>
    <v-container style="position:relative" fluid grid-list-lg>
      <v-btn fixed right bottom style="transform:translateY(-50%)" :to="{name: 'add'}" dark fab color="secondary">
        <v-icon>add</v-icon>
      </v-btn>
      <v-layout row wrap>
        <v-flex xs4 v-for="(message, i) in messages" :key="i">
            <v-expansion-panel popout>
              <v-expansion-panel-content hide-actions>
                <v-layout align-center column mx-0 px-0 slot="header" >
                <v-container pa-0 fluid>
                  <v-system-bar window >
                    <v-spacer></v-spacer>
                      <v-icon>remove</v-icon>
                  </v-system-bar>
                </v-container>
                  <v-flex>
                    <v-avatar
                      size="140px"
                      slot="activator"
                    >
                      <img
                        :src="message.avatar"
                        alt=""
                        v-if="message.avatar"
                      >
                      <v-icon :color="primary" v-else>{{ message.icon }}</v-icon>
                    </v-avatar>
                  </v-flex>
                  
                  <v-flex class="text-center">
                    <v-chip outline color='primary' v-if='message.name'>
                            <v-avatar>
                              <v-icon color='primary'>account_circle</v-icon>
                            </v-avatar>
                      {{message.name}}
                    </v-chip>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex sm5 md3 hidden-xs-only>
                    <span class="grey--text" v-if="message.total">&nbsp;({{ message.total }})</span>
                  </v-flex>
                  <v-flex no-wrap xs5 sm3>
                    <v-chip
                      label
                      small
                      :color="`primary lighten-4`"
                      class="ml-0"
                      v-if="message.new"
                    >{{ message.new }} new</v-chip>
                    <strong v-html="message.title"/>
                  </v-flex>
                  <v-flex
                    class="grey--text"
                    ellipsis
                    hidden-sm-and-down
                    v-if="message.excerpt"
                  >
                    &mdash;
                    {{ message.excerpt }}
                  </v-flex>
                </v-layout>
                <v-card>
                  <v-tooltip bottom>
                      <v-btn icon href="" slot="activator">
                        <v-icon>pageview</v-icon>
                      </v-btn>
                      <span>查看</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <v-btn icon href="" slot="activator">
                        <v-icon>edit</v-icon>
                      </v-btn>
                      <span>修改</span>
                    </v-tooltip>
                  <!-- <v-toolbar class='elevation-0'>
                      <v-toolbar-title>Login form</v-toolbar-title>
                      
                    </v-toolbar> -->
                  <v-divider></v-divider>
                  <div class="text-md-center">
                      <v-btn color="success" text-color='dark' >报名</v-btn>
                      <v-btn color="error">预约</v-btn>
                      <v-btn color="info">下载</v-btn>
                  </div>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>
<script>
export default {
  name: "children",
  data: () => ({
    messages: []
  }),
  methods: {},
  mounted() {
    this.$http.get("https://randomuser.me/api/?results=4").then(({ body }) => {
      this.messages = body.results.map(c => {
        return {
          avatar: c.picture.large,
          name: `${c.name.first} ${c.name.last}`
        };
      });
    });
  }
};
</script>
<style lang="stylus">
.expansion-panel__header {
  padding: 0;
}
</style>

