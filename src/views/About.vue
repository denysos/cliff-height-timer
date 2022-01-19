<template>
  <v-container> 
      <h1> {{$t("about.title")}} </h1>
      <p>
      {{ $t("about.content") }} <br> {{ $t("about.inspire")}}
      </p> </v-container>
</template>
<script>
export default {
  name: "about",
};
</script>