<template lang="">
    <div>
        <div>
        <BQlisteClients/>
        </div>
        <div>
        <BQajoutClient/>
        </div>
    </div>
</template>
<script>
import BQlisteClients from "../components/BQlisteClients.vue";
import BQajoutClient from "../components/BQajoutClient.vue";
export default {
  name: "Banque",
  components: {
    BQlisteClients,
    BQajoutClient,
  },
};
</script>
<style>
</style>