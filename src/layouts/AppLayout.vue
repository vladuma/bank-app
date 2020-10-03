<template>
  <v-app>
    <!-- <navbar v-bind:drawer="drawer" v-bind:signedIn="signedIn" /> -->
    <v-app-bar
      app
      color="deep-purple"
      height="210px"
      rounded="b-xl"
      width="100%"
      elevation="12"
    >
      <Header />
    </v-app-bar>
    <v-main :class="'route-' + $route.name">
      <v-container grid-list-md text-xs-center>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer
      app
      padless
    >
      <BottomNav />
    </v-footer>
  </v-app>
</template>

<script>
import { components, AmplifyEventBus } from 'aws-amplify-vue';
import { Auth } from 'aws-amplify';
import Header from '../components/Header.vue';
import BottomNav from '../components/BottomNav.vue';

export default {
  name: 'App',
  components: {
    Header,
    BottomNav,
    ...components,
  },
  data() {
    return {
      drawer: true,
      signedIn: false,
      user: {},
    };
  },
  beforeCreate() {
    AmplifyEventBus.$on('authState', (info) => {
      if (info === 'signedIn') {
        this.signedIn = true;
        this.$router.push('/');
      }
      if (info === 'signedOut') {
        this.$router.push('/auth');
        this.signedIn = false;
      }
    });

    Auth.currentAuthenticatedUser()
      .then((user) => {
        this.user = user;
        this.signedIn = true;
      })
      .catch(() => { this.signedIn = false; });
  },
  created() {
    // this.$vuetify.theme.dark = true;
  },
  methods: {},
};
</script>
