<template>
  <component :is='layout'></component>
</template>

<script>
import AppLayout from './layouts/AppLayout.vue';

const defaultLayout = 'app-layout';

export default {
  name: 'App',
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout);
    },
  },
  components: {
    'app-layout': AppLayout,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
