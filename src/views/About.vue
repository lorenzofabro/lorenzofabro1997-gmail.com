<template>
  <section id="about">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">ABOUT US 🙋</h2>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
        Strongly inspired in
        <a
          href="https://vuetifyjs.com/themes/parallax-starter/?ref=vuetifyjs.com"
          >this example</a
        >
        and adapted to my needs. This is a great template for a SPA with Vue.
        I'm deploying this on Firebase 🔥. Here we can explain our visitors who
        we are and why they should contact us. Also, it's fully responsive (with
        a beautiful bottom navigation bar 😍). If you want to clone the repo,
        <a href="https://github.com/lorenzofabro/vue-spa">here</a> it is.
      </v-responsive>

      <v-avatar class="elevation-12 mb-12" size="128">
        <v-img src="../assets/picture.jpeg"></v-img>
      </v-avatar>

      <div></div>

      <v-btn
        color="grey"
        href="https://github.com/lorenzofabro"
        outlined
        large
        class="mr-2"
        target="blank"
      >
        <v-icon>mdi-github</v-icon>
        <span class="grey--text text--darken-1 font-weight-bold ml-1">
          GitHub Profile
        </span>
      </v-btn>
      <v-btn
        color="grey"
        href="https://twitter.com/lorenzofabro"
        outlined
        large
        target="blank"
      >
        <v-icon>mdi-twitter</v-icon>
        <span class="grey--text text--darken-1 font-weight-bold ml-1">
          Twitter
        </span>
      </v-btn>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>
