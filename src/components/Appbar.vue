<template>
  <v-app-bar app dark>
    <div class="d-flex align-center">
      <v-img
        alt="Logo"
        class="shrink mr-2"
        contain
        src="../assets/brackets.png"
        transition="scale-transition"
        width="40"
      />
      <v-toolbar-title class="text-uppercase font-weight-bold yellow--text">
        Lorenzo<span class="font-weight-light">'s SPA</span>
      </v-toolbar-title>
    </div>

    <v-spacer></v-spacer>

    <v-toolbar-items class="d-none d-md-flex">
      <v-btn @click="$vuetify.goTo('#about')">About</v-btn>
      <v-btn @click="$vuetify.goTo('#features')">Services</v-btn>
      <v-btn @click="$vuetify.goTo('#stats')">Stats</v-btn>
      <v-btn @click="$vuetify.goTo('#blog')">Blog</v-btn>
      <v-btn @click="$vuetify.goTo('#contact')">Contact us</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {};
</script>
