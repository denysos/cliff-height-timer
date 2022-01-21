<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <Drawer />
    </v-navigation-drawer>
    <v-app-bar dark color="deep-purple" clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <!--
      <v-toolbar-title @click="goHome" class="white--text">
        {{ $t("title") }}
      </v-toolbar-title>
      -->
      <div>
        <v-container>
          <v-row>
            <v-col md="8">
              <v-toolbar-title @click="goHome" class="white--text">
                {{ $t("title") }}
              </v-toolbar-title>
            </v-col>
            <v-col md="4">
              <button @click="changelang('en')">Anglais</button>
              <button @click="changelang('fr')">Français</button>
            </v-col>
            <!--
            <v-col cols="3">
              <button @click="changelang('fr')">Français</button>
            </v-col>
            -->
          </v-row>
        </v-container>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
// import { default as myContentDrawer } from "@/components/Drawer.vue"  // attention, il faut utiliser default !!!
import Drawer from "@/components/Drawer.vue";
import i18n from "../i18n";
export default {
  name: "myToolbar",
  //   components: { myContentDrawer },
  components: { Drawer },
  data: function () {
    return {
      drawer: false,
    };
  },
  methods: {
    changelang(langue) {
      i18n.locale = langue;
    },
    goHome() {
      this.$router.replace("/");
    },
  },
};
</script>
