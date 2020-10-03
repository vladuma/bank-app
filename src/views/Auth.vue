<template>
  <div class="auth">
    <amplify-authenticator :authConfig="{ signInConfig: { isSignUpDisplayed: true } }" />
  </div>
</template>

<script>

export default {
  name: 'auth',
};
</script>

<style lang="scss">
.auth {
  width: auto;
  margin: 0 auto;
  div > div {
    min-width: 100%;
  }
}
</style>
