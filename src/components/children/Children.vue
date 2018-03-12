<template>
  <v-layout justify-center column>
    <v-subheader>我的宝宝</v-subheader>
    <v-container fluid grid-list-lg>
      <v-btn dark fab color="secondary">
        <v-icon>add</v-icon>
      </v-btn>
      <v-layout row wrap>
        <v-flex xs4 v-for="(message, i) in messages" :key="i">
            <v-expansion-panel popout>
              <v-expansion-panel-content
                hide-actions
              >
                <v-layout align-center column spacer slot="header">
                  <v-flex md6>
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
    messages: [],
    lorem:
      "Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum."
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
