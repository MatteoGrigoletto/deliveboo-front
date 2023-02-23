<template>

  <div class="card" v-for="restaurant in store.restaurants" v-show="restaurant.name.toLowerCase().includes(store.input.toLowerCase())" >
    <div class="card__img">
      <img :src="restaurant.image" alt="">
    </div>
    <div class="card__info">
      <h2>{{ restaurant.name }}</h2>
      <ul>
        <li>{{ restaurant.street_address }}</li>
        <li>{{ restaurant.city }}</li>
        <li><router-link :to="{name: 'SingleRestaurant',params: { restaurant: restaurant.slug }}">Prodotti</router-link></li>
      </ul>
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
  methods:{  
  }
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  border: 2px solid black;
  width: calc(100% / 3 - 10px);
  margin: 5px;
  height: 400px;
  color: rgb(27, 27, 28);
  position: relative;

  .card__img{
    height: 70%;
  }
  .card__info{
    padding-top: 20px;
    text-align: center; 
    background-color: white;
  

    h2{
    position: absolute;
    top: 3%;
    right: 50%;
    transform: translate(50%);
    background-color:rgba(138, 129, 129, 0.5);
    border-radius: 5px;
    color: white;
    padding: 0px 5px 5px 5px;
  }
  }
}
</style>
