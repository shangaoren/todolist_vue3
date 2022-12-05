<template>
  <q-page class="row items-center justify-evenly">
    <authentication-link
    ></authentication-link>
  </q-page>
</template>

<script lang="ts">
import AuthenticationLink from "components/AuthenticationLink.vue";
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { AuthenticationLink },
  /*setup() {
  }*/
});
</script>
