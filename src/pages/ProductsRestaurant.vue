<template>
  <!--ciclo per la visione dei prodotti -->
  <div v-for="product in store.singleRestaurant.products">
    <h1></h1>
    <img :src="product.image" alt="" />
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "SingleRestaurant",
  data() {
    return {
      store,
    };
  },
  // chiamata axios che prende come parametro lo slag generato dal link della card presente
  // nel componente AppCard.vue
  created() {
    axios
      .get(`http://localhost:8000/api/restaurants/${this.$route.params.slug}`)
      .then((response) => {
        this.store.singleRestaurant = response.data;
        console.log(this.store.singleRestaurant);
      })
      .catch((err) => {
        console.log(err);
        this.$router.push({ name: "page-404" });
      });
  },
};
</script>

<style lang="scss" scoped></style>
