<template>
  <v-bottom-navigation v-model="value">
    <v-btn value="" @click="handleNavClick">
        <v-icon>mdi-format-list-bulleted</v-icon>
    </v-btn>

    <v-btn value="loan" @click="handleNavClick">
        <v-icon>mdi-currency-usd-off</v-icon>
    </v-btn>

    <v-btn value="repay" @click="handleNavClick">
        <v-icon>mdi-currency-usd</v-icon>
    </v-btn>

    <v-btn value="stats" @click="handleNavClick">
        <v-icon>mdi-poll</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({ value: '' }),
  methods: {
    handleNavClick(e) {
      this.$router.push(`/${e.currentTarget.value}`);
    },
  },
};
</script>
