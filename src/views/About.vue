<template>
  <v-container>
    <!-- <div class="about">
      <h1 @click="hello">This is an about page</h1>
    </div> -->
    
    <h1>{{ $t("about.title") }}</h1>
    <p>
      {{ $t("about.content") }} <br />
      {{ $t("about.inspire") }}
    </p>
    <div class="about">
      <h1 @click="hello">This is an about page</h1>
    </div>
   
  </v-container>
</template>
<script>
import { monMixin } from "../mixins";
export default {
  name: "about",
  mixins: [monMixin],
  methods: {
    hello: function () {
      console.log(this.messagemix);
    },
    created() {
      this.messagemix = "About message";
    },
  },
};
</script>