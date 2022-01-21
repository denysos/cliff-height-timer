<template lang="">
    <div>
    <v-form v-model="valid">
        <v-container>
            <v-row cols="3">
                <v-col>
                    <v-text-field v-model="time"
                    :rules="timeRules"
                    :label="$t('saisie.temps')"
                    required
                    @input="compute"> </v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="m"
                    :label="$t('saisie.hauteurm')" disabled>
                       </v-text-field>
                </v-col>
                 <v-col>
                    <v-text-field v-model="ft"
                    :label="$t('saisie.hauteurft')" disabled>
                    </v-text-field>
                </v-col>
            </v-row>
        </v-container>
        </v-form>  
        <v-btn v-on:click="action">Enregistrer</v-btn>  
    </div>
</template>
<script>
export default {
  name: "saisiehisto",
  data: () => ({
    valid: false,
    time: 0,
    timeRules: [
      (v) => !!v || "le temps est obligatoire",
      (v) => parseFloat(v) || "le temps doit être un décimal",
    ],
    m: "0",
    ft: "0",
  }),
  computed: {
    afficher_m() {
      if (this.time > 0) {
        return this.m;
      }
      return "0";
    },
    afficher_ft() {
      if (this.time > 0) {
        return this.ft;
      }
      return "0";
    },
  },

  methods: {
    action() {
      this.saveHistory({ time: this.time, m: this.m, ft: this.ft });
    },
    compute() {
      let fallTime = this.time * 1000;
      let height = 16 * Math.pow(fallTime / 1000, 2);
      let numberDigits = 2;
      // this.time = (fallTime / 1000).toFixed(2);
      this.ft = height.toFixed(numberDigits);
      this.m = (height / 3.2808).toFixed(numberDigits);
    },
    saveHistory(item) {
      // Sauvegarde dans l’historique
      let history = JSON.parse(localStorage.getItem("history"));
      if (!Array.isArray(history)) {
        history = [];
      }
      history.unshift(item);
      localStorage.setItem("history", JSON.stringify(history));
    },
  },
};
</script>
<style>
</style>