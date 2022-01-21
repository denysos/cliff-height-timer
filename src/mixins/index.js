export const monMixin = {
    created: function () {
        console.log(`Création du composant ${this.$options.name}`)
    },
    mounted() {
        console.log(`composant monté ${this.$options.name}`)
    },
    destroyed() {
        console.log(`composant Démonté ${this.$options.name}`)
    },
    beforeDestroy() {
        console.log(`Netoyage avant démontage du composant ${this.$options.name}`)
    },
    data() {
        return {
            messagemix: this.$store.state.monState
        }
    },
    methods: {
        hello: function () {
            alert(this.messagemix)
        }
    }
}