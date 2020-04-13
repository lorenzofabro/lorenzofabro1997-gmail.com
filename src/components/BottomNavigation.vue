<template>
  <v-bottom-navigation app dark grow class="d-flex d-md-none">
    <v-btn @click="$vuetify.goTo('#about')">
      <v-icon>mdi-account-multiple</v-icon>
    </v-btn>

    <v-btn @click="$vuetify.goTo('#features')">
      <v-icon>mdi-hammer-wrench</v-icon>
    </v-btn>

    <v-btn @click="$vuetify.goTo('#stats')">
      <v-icon>mdi-chart-line</v-icon>
    </v-btn>

    <v-btn @click="$vuetify.goTo('#blog')">
      <v-icon>mdi-laptop</v-icon>
    </v-btn>

    <v-btn @click="$vuetify.goTo('#contact')">
      <v-icon>mdi-email</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
