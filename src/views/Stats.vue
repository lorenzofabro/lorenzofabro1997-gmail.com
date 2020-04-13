<template>
  <section id="stats">
    <v-parallax
      :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
      src="../assets/landscape.jpg"
    >
      <v-container fill-height>
        <v-row class="mx-auto">
          <v-col v-for="[value, title] of stats" :key="title" cols="12" md="3">
            <div class="text-center">
              <div
                class="display-3 font-weight-black mb-4"
                v-text="value"
              ></div>

              <div
                class="title font-weight-regular text-uppercase"
                v-text="title"
              ></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        ["44m", "Argentina's Population"],
        ["88", "Piano Keys"],
        ["30+", "Downloads/mo"],
        ["97k", "Total Downloads"]
      ]
    };
  }
};
</script>
