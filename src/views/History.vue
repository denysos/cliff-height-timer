<template lang="">
    <div>
        <table>
            <thead>
                <tr>
                    <th> {{$t("history.tb.temps")}}</th>
                    <th>{{$t("history.tb.hauteurm")}}</th>
                    <th>{{$t("history.tb.hauteurft")}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="enreg in histo" :key="enreg.time">
                    <td> {{enreg.time}} </td>
                    <td> {{enreg.m}} </td>
                    <td> {{enreg.ft}} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  name: "history",
  data: () => {
    return {
      histo: [], // charger plutôt en tant que prop en venant du menu ?
      // ou déclenché par un computed sur un booleen ?
    };
  },
  created: function () {
    this.histo = JSON.parse(localStorage.getItem("history"));
  },
};
</script>
<style>
</style>