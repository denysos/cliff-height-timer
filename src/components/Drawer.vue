<template>
  <div>
    <v-toolbar class="deep-purple" />
    <v-list dense>
      <template v-for="(item, i) in items">
        <v-divider dark v-if="item.divider" :key="item.icon"></v-divider>
        <v-list-item ripple :to="item.action" :key="i" v-else>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="body-2">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Drawer",
  data: function () {
    return {
      items: [
        { icon: "mdi-home", text: this.$t("drawer.home"), action: "/" },
        {
          icon: "mdi-history",
          text: this.$t("drawer.history"),
          action: "/history",
        },
        {
          icon: "mdi-plus",
          text: "ajout histo",
          action: "/saisiehisto",
        },
        { icon: "mdi-help", text: this.$t("drawer.about"), action: "/about" },
        { icon: "mdi-store", text: "Vue Client Store", action: "/VueClient" },
         { icon: "mdi-bank", text: "Vue Banque", action: "/banque" },
      ],
    };
  },
};
</script>