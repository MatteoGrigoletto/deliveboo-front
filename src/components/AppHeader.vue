<template>
  <header>
    <section class="section__header">
      <NavbarHeader></NavbarHeader>
    </section>
    <section>
      <SliderRestaurant></SliderRestaurant>
    </section>
    <section>
      <KitchensCategory></KitchensCategory>
    </section>
  </header>
</template>

<script>
import NavbarHeader from "./others_components/header_components/NavbarHeader.vue";
import SliderRestaurant from "./others_components/header_components/SliderRestaurant.vue";
import KitchensCategory from "./others_components/header_components/KitchensCategory.vue";
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  components: {
    NavbarHeader,
    SliderRestaurant,
    KitchensCategory,
  },
};
</script>

<style lang="scss" scoped>
header{
  background-color: var(--header-bg-color);

}
</style>
