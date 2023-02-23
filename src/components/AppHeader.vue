<template>
  <header>
    <section class="section__header">
      <NavbarHeader></NavbarHeader>
    </section>
    <section>
      <SliderKitchens></SliderKitchens>
    </section>
  </header>
</template>

<script>
import SliderKitchens from "./others_components/header_components/SliderKitchens.vue";
import NavbarHeader from "./others_components/header_components/NavbarHeader.vue";
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  components: {
    SliderKitchens,
    NavbarHeader,
  },
};
</script>

<style lang="scss" scoped>
header{
  background-color: var(--header-bg-color);
}
</style>
