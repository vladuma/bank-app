<template>
  <v-bottom-navigation v-model="value">
    <v-btn value="dashboard">
      <v-icon>mdi-format-list-bulleted</v-icon>
    </v-btn>

    <v-btn value="loan">
      <v-icon>mdi-currency-usd-off</v-icon>
    </v-btn>

    <v-btn value="repay">
      <v-icon>mdi-currency-usd</v-icon>
    </v-btn>

    <v-btn value="stats">
      <v-icon>mdi-poll</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({ value: 'recent' }),
  methods: {
    handleNavClick(e) {
      this.value = e.target.value;
    },
  },
};
</script>
