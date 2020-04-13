<template>
  <v-app-bar app dark>
    <div class="d-flex align-center">
      <v-img
        alt="Nexos Logo"
        class="shrink mr-2"
        contain
        src="../assets/nexos.png"
        transition="scale-transition"
        width="40"
      />
      <v-toolbar-title class="text-uppercase font-weight-bold yellow--text">
        Nexos <span class="font-weight-light">Marketing digital</span>
      </v-toolbar-title>
    </div>

    <v-spacer></v-spacer>

    <v-toolbar-items class="d-none d-md-flex">
      <v-btn flat @click="$vuetify.goTo('#about')">Sobre Nosotros</v-btn>
      <v-btn flat @click="$vuetify.goTo('#features')">Nuestros Servicios</v-btn>
      <v-btn flat @click="$vuetify.goTo('#stats')">Estadísticas</v-btn>
      <v-btn flat @click="$vuetify.goTo('#blog')">Blog</v-btn>
      <v-btn flat @click="$vuetify.goTo('#contact')">Contáctanos</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {};
</script>
