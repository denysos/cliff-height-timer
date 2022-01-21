<template lang="">
    <div>
        <h2>{{$t("ajclient.titre")}}</h2>
        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-text-field
                    :label="$t('ajclient.prenom')"
                    required
                    v-model="client.prenom">
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field
                    :label="$t('ajclient.nom')"
                    required
                    v-model="client.nom">
                    </v-text-field>
                </v-row>
                <v-row>   
                    <v-text-field
                    :label="$t('ajclient.dateNaisance')"
                    required
                    type="date"
                    v-model="client.dateNaissance">
                    </v-text-field>
                </v-row>
                <v-row>
                    <h4>{{$t("ajclient.libel.adresse")}} :</h4>
                </v-row>
                <v-row>
                    <v-text-field
                    :label="$t('ajclient.numero')"
                    required
                    v-model="client.numero">
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field
                    :label="$t('ajclient.rue')"
                    required
                    v-model="client.rue">
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field
                    :label="$t('ajclient.codePostal')"
                    required
                    v-model="client.codePostal">
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field
                    :label="$t('ajclient.ville')"
                    required
                    v-model="client.ville">
                    </v-text-field>
                </v-row>
                <v-btn v-on:click="action">Enregistrer</v-btn>
               </v-container>           
        </v-form>
        
    </div>
</template>
<script>
import BQClient from "@/modele/BQClient";
import BQserviceClientsApi from "@/services/BQserviceClientsApi";
export default {
  name: "BQajoutClient",
  data: () => ({
    valid: false,
    client: new BQClient(),
    // dateDeNaissance: moment().format("YYYY-MM-DD"),
  }),
  methods: {
    action() {
      BQserviceClientsApi.create(this.client);
      console.log("nouveau client : " + this.client);
    },
  },
};
</script>
<style>
</style>