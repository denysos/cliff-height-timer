<template>
  <div>
    <v-text-field v-model="nom" label="Nom à saisir" />
    <v-btn @click="()=>{this.$store.getters.addListeClient({ nom: nom });nom = '';}">Ajouter</v-btn>
    <div class="about">
      <h1 @click="hello">This is a Client page</h1>
    </div>
    <ExplSlot01 :url="'https://vuetifyjs.com/en/components/icons/#semantic-font-icons'">
      <FicheClient />
    </ExplSlot01>
  </div>
</template>

<script>
import FicheClient from "../components/FicheClient.vue";
import ExplSlot01 from "../components/ExplSlot01.vue";
import {monMixin} from '../mixins'

export default {
  name: "VueClient",
  mixins: [monMixin],
  data() {
    return {
      nom: "à saisir",
    };
  },
  components: {
    FicheClient,
    ExplSlot01,
  },
};
</script>


<style lang="scss" scoped>
</style>