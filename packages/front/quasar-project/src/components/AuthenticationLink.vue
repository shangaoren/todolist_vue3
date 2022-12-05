<template>
<div>
  <p>Afin d'accèder à votre todolist, merci de bien vouloir vous authentifier</p>
  <q-btn clickable label="M'authentifier" class="btn-owlie" @click="$router.push('/authentication')"/>
</div>
</template>

<script>


export default {
  name: "AuthenticationLink"
}
</script>

<style>
.btn-owlie {
  background: #03DAC5 !important;
  color: white;
}
</style>
