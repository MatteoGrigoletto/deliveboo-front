<template>
  <div class="home-page-main">
    <CardsRestaurants></CardsRestaurants>
  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
import CardsRestaurants from "../components/others_components/main_components/CardsRestaurants.vue";

export default {
  name: "HomePage",
  data() {
    return {
      store,
    };
  },
  components: {
    CardsRestaurants
},
  created() {
    axios.get("http://localhost:8000/api/restaurants").then((response) => {
      this.store.restaurants = response.data;
      console.log(store.restaurants);
     
    });
  },
  mounted(){
    console.log('arrivo?');
  }
};
</script>

<style lang="scss" scoped>
.home-page-main {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: absolute;
  top: 0%;
  right: 0%;
}


@media screen and (max-width:600px){
  .home-page-main{
    position: relative;
  }
}
</style>
