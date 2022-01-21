<template>
    <div>
        <v-toolbar class="deep-purple"/>
            <v-list dense>
            <template v-for="(client, i) in listeclient">
                <v-list-item  :key="i">
                <v-list-item-content>
                <v-list-item-title >{{ client.nom }} </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </template>
            </v-list>
    </div>
</template>

<script>
    export default {
        name:"FicheClient",
        data()  {
            return {
                listeclient : this.$store.state.listeclient
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>