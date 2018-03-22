<template>
  <transition name="modal">
    <v-dialog v-model="show" :max-width="width">
      <v-card>
        <v-alert :color="color" :type="type" value="true">
          {{ title.content || '提示' }}
          <v-icon dark class="fr" flat title="关闭" @click="dismiss">close</v-icon>
        </v-alert>
        <v-card-text>
          {{ message.content }}
        </v-card-text>
        <v-card-actions v-if="buttons.length > 0">
          <v-spacer></v-spacer>
          <template v-for="item in buttons">
                        <v-btn :color="color"
                            :class="item.cssClass"
                            :style="item.style" 
                            @click.native="item.action">
                            {{item.label}}
                        </v-btn>
          </template>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        width: '420',
        autoClose: true,
        interval: 1500,
        type: 'info', //  值为: success, info, warning, error
        color: 'primary', // 主题颜色: primary, secondary, accent, error, warning, info, success
        title: {
          content: '',
          cssClass: '',
          style: {}
        },
        message: {
          content: '',
          cssClass: '',
          style: {}
        },
        buttons: []
      }
    },
    methods: {
      dismiss(event) {
        this.show = false;
      }
    },
    mounted () {
      if (this.autoClose) {
        setTimeout(function () {
          this.dismiss()
        }.bind(this), this.interval)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.fr {
    float right;
    cursor pointer;
}
</style>