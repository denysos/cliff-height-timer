<template>
  <v-container fluid fill-height class="d-flex deep-purple lighten-1">
    <div class="home">
      <h4>Welcome to Your Vue.js App</h4>
      <h1>{{ time }} s</h1>
      <h3>{{ m }} m</h3>
      <h3>{{ ft }} ft</h3>
    </div>
    <v-btn
      v-on:click="action"
      v-bind:class="state_class"
      dark
      fixed
      bottom
      right
      fab
    >
      <v-icon>{{ state_icon }}</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
// import i18n from "../i18n";
import { monMixin } from "../mixins";

export default {
  name: "home",
  mixins: [monMixin],
  data: () => {
    return {
      running: false,
      time: 0,
      m: "0",
      ft: "0",
    };
  },
  computed: {
    state_icon() {
      // Retourne l’icone pour le FAB
      if (this.running) {
        return "mdi-stop";
      } else {
        return "mdi-play";
      }
    },
    state_class() {
      // Retourne la class pour le FAB
      if (this.running) {
        return "red";
      } else {
        return "green";
      }
    },
  },
  methods: {
    // changelang(langue) {
    //   i18n.locale = langue;
    // },
    action() {
      // Gestion du start / stop
      this.start = new Date().getTime();
      if (!this.running) {
        this.running = true;
        this.timerId = setInterval(() => {
          this.compute();
        }, 10);
      } else {
        this.running = false;
        clearInterval(this.timerId);
        this.saveHistory({ time: this.time, m: this.m, ft: this.ft });
      }
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
    compute() {
      let fallTime = new Date().getTime() - this.start;
      let height = 16 * Math.pow(fallTime / 1000, 2);
      let numberDigits = 1;
      if (height < 1) {
        numberDigits = 2;
      }
      this.time = (fallTime / 1000).toFixed(2);
      this.ft = height.toFixed(numberDigits);
      this.m = (height / 3.2808).toFixed(numberDigits);
    },
  },
};
</script>
<style scoped>
.home {
  margin: auto;
  text-align: center;
}
.home > h1,
.home > h2,
.home > h3 {
  color: white;
}
</style>
