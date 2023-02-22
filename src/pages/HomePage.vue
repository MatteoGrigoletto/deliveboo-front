<template>
  <div class="home-page-main">
    <AppCard></AppCard>
  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
import AppCard from "../components/others_components/AppCard.vue";
export default {
  name: "HomePage",
  data() {
    return {
      store,
    };
  },
  components: {
    AppCard,
  },
  created() {
    axios.get("http://localhost:8000/api/restaurants").then((response) => {
      this.store.restaurants = response.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.home-page-main {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
}
</style>
