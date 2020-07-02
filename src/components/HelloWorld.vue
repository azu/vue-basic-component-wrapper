<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <new-link href="https://cli.vuejs.org" aria-current="true">vue-cli documentation</new-link>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><new-link href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel">babel</new-link></li>
      <li><new-link href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint">eslint</new-link></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><new-link href="https://vuejs.org">Core Docs</new-link></li>
      <li><new-link href="https://forum.vuejs.org">Forum</new-link></li>
      <li><new-link href="https://chat.vuejs.org">Community Chat</new-link></li>
      <li><new-link href="https://twitter.com/vuejs">Twitter</new-link></li>
      <li><new-link href="https://news.vuejs.org">News</new-link></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><new-link href="https://router.vuejs.org">vue-router</new-link></li>
      <li><new-link href="https://vuex.vuejs.org">vuex</new-link></li>
      <li><new-link href="https://github.com/vuejs/vue-devtools#vue-devtools">vue-devtools</new-link></li>
      <li><new-link href="https://vue-loader.vuejs.org">vue-loader</new-link></li>
      <li><new-link href="https://github.com/vuejs/awesome-vue" aria->awesome-vue</new-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
