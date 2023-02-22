<template>
  <section class="section__header">
    <NavbarHeader></NavbarHeader>
  </section>
</template>

<script>
import NavbarHeader from "./others_components/header_components/NavbarHeader.vue";
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  components: {
    NavbarHeader,
  },
};
</script>

<style lang="scss" scoped></style>
