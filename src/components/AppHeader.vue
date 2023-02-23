<template>
  <header>
    <section class="section__header">
      <NavbarHeader></NavbarHeader>
    </section>
    <section>
      <KitchensCategory></KitchensCategory>
    </section>
  </header>
</template>

<script>
import KitchensCategory from "./others_components/header_components/KitchensCategory.vue";
import NavbarHeader from "./others_components/header_components/NavbarHeader.vue";
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  components: {
    KitchensCategory,
    NavbarHeader,
  },
};
</script>

<style lang="scss" scoped>
header{
  background-color: var(--header-bg-color);
}
</style>
