<template>
  <v-sheet id="contact" color="#333333" dark tag="section" tile>
    <div class="py-12"></div>

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">
        Contáctanos 📬
      </h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-theme-provider light>
        <v-row>
          <v-col cols="12">
            <v-text-field flat label="Nombre" solo></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field flat label="E-mail" solo></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field flat label="Asunto" solo></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea flat label="Mensaje" solo></v-textarea>
          </v-col>

          <v-col class="mx-auto" cols="auto">
            <v-btn color="accent" x-large>
              Enviar
            </v-btn>
          </v-col>
        </v-row>
      </v-theme-provider>
    </v-container>

    <div class="py-12"></div>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    nameRules: [v => !!v || "El nombre es un campo requerido"],
    emailRules: [
      v => !!v || "El e-mail es un campo requerido",
      v => /.+@.+\..+/.test(v) || "El e-mail debe ser válido"
    ],
    subjectRules: [v => !!v || "El asunto es un campo requerido"],
    messageRules: [v => !!v || "El mensaje es un campo requerido"]
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    }
  }
};
</script>
