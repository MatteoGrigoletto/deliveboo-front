<template>
  <div class="nav-bar">
    <div class="nav_bar__logo"></div>
    <div class="nav_bar__input">
      <input type="text" v-model="store.input" />
    </div>
    <div class="nav_bar__links"></div>
  </div>
</template>

<script>
import { store } from "../../../store.js";
export default {
  name: "NavbarHeader",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
}
</style>
