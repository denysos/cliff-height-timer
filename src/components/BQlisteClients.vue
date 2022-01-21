<template lang="">
    <div>
        <h2>{{$t("listeclient.titre")}}</h2>
        <v-data-table :headers="headers" :items="clients">
          <template v-slot:item.adresse="{ item }">
      <v-chip dark>
        {{ item.adresse.numero+", rue "+item.adresse.rue }}
      </v-chip>
    </template>
        </v-data-table>
    </div>
</template>
<script>
import BQserviceClientsApi from "../services/BQserviceClientsApi";

export default {
  name: "BQlisteClients",
  data() {
    return {
      headers: [
        { text: "Nom", value: "nom" },
        { text: "Prenom", value: "prenom" },
        { text: "Date de naissance", value: "dateNaissance" },
        { text: "Adresse", value: "adresse" },
        { text: "Ville", value: "adresse.ville" },
        { text: "Code Postal", value: "adresse.codePostal" },
      ],
      clients: this.$store.getters.allClients,
    };
  },
  mounted() {
    //   this.refresh()
    this.$store.getters.getAllClients
  },
  methods: {
    getAdress() {
      return "toto";
      // return adresse.numero + ',rue ' + adresse.rue;
    },
    refresh() {
      BQserviceClientsApi.getAll()
        .then(
          (response) => {
            this.clients = response.data;
          },
          (error) => console.log(error),
          () => console.log("Finally")
        )
        .catch((errorgeneral) => console.log(errorgeneral));
    },
  },
};
</script>
<style>
</style>