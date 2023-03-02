<template>
  <header>
    <section class="section__header">
      <NavbarHeader></NavbarHeader>
    </section>
    <section>
      <SliderRestaurant></SliderRestaurant>
    </section>
  </header>
</template>

<script>
import NavbarHeader from "./others_components/header_components/NavbarHeader.vue";
import SliderRestaurant from "./others_components/header_components/SliderRestaurant.vue";

export default {
  name: "AppHeader",
  data() {
    return {};
  },
  components: {
    NavbarHeader,
    SliderRestaurant,
  },
};
</script>

<style lang="scss" scoped>
header{
  background-color: var(--header-bg-color);
  position: relative;
  overflow: hidden;
}
</style>
