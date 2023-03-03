<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <div>
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style lang="scss">
@import "./style/global.scss";
/* Seleziona la scrollbar */
::-webkit-scrollbar {
  width: 10px;
  height: 4px;
  border-radius: 3px;
  background-color: black;
}

/* Seleziona la parte colorata della scrollbar */
::-webkit-scrollbar-thumb {
  background-color: #8c8b8b;
  border-radius: 3px;
}

/* Seleziona la parte grigia della scrollbar */
::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 3px;
}
</style>
