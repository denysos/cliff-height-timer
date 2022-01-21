<template>
  <div>
    <a v-bind:href="url" class="nav-link" target="_blank">
      <slot></slot>
    </a>
  </div>
</template>

<script>
/**
 * <ExplSlot01>Data</ExplSlot01>
 * Data va se retrouver entre les balises <slot></slot>
 */


export default {
  name: "ExplSlot01",
  props: {
    url: String,
  },
};
</script>

<style lang="scss" scoped>
</style>