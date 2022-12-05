<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-owlie">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" />
        <q-toolbar-title>
          Owlie Todolist
        </q-toolbar-title>
        <q-btn flat dense round icon="notifications"/>
        <q-btn flat dense round icon="share"/>
        <q-btn flat dense round icon="search"/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
.bg-owlie {
  background: #12384E !important
}
</style>


<script lang="ts">
</script>
