<template>
  <div class="card" v-for="restaurant in store.restaurants">
    {{ restaurant.name }}
    <div>
      <router-link
        :to="{ name: 'ProductsRestaurant', params: { slug: restaurant.slug } }"
        >Prodotti</router-link
      >
    </div>
  </div>
</template>

<script>
import { store } from "../../store";
export default {
  name: "AppCard",
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 300px;
  height: 200px;
  background-color: black;
  color: white;
}
</style>
