<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <drawer />
    </v-navigation-drawer>
    <v-app-bar dark color="deep-purple" clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title @click="goHome" class="white--text">
        {{ $t("title") }}
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>
<script>
// import { default as myContentDrawer } from "@/components/Drawer.vue"  // attention, il faut utiliser default !!!
import drawer from "@/components/Drawer.vue"
export default {
  name: "myToolbar",
//   components: { myContentDrawer },
components: { drawer },
  data: function () {
    return {
      drawer: false,
    };
  },
  methods: {
    goHome() {
      this.$router.replace("/");
    },
  },
};
</script>
