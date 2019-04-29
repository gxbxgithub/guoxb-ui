<template>
  <div class="hello">
   <g-button :round="true" type="normal">按钮</g-button>
  </div>
</template>

<script>
import Vue from 'vue';
// import GuoUI from '@/plugin/index.js';
import GuoUI from '../../dist/guoxb-ui.js';
Vue.use(GuoUI);

export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
