<template>
  <v-container id="header" padding="30">
      <v-row>
        <h1>{{accountBalance}}</h1>
      </v-row>
      <v-row>
        <h2>+{{nextPayment}} <span>on {{paymentDate}}</span></h2>
      </v-row>
      <v-row>
        <h2>Target limit {{targetLimit}}</h2>
      </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      limit: 100000,
      balance: 75000,
      payment: 7999,
      paymentDate: '31.09.2020',
    };
  },
  computed: {
    targetLimit() {
      return this.formatNumber(this.limit);
    },
    accountBalance() {
      return this.formatNumber(this.balance);
    },
    nextPayment() {
      return this.formatNumber(this.payment);
    },
  },
  methods: {
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    },
  },
};
</script>

<style lang="scss">
#header {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px 15px;

    h1 {
        text-align: left;
        color: white;
        font-size: 48px;
    }
    h2 {
        text-align: left;
        color: white;
        font-size: 24px;

        span {
            font-size: 18px;
        }
    }
}
</style>
