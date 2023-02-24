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
import { store } from "../../../store";
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
  border-radius: 10px;
  border: 2px solid black;
  width: calc(100% / 4 - 10px);
  margin: 5px;
  height: 400px;
  color: rgb(27, 27, 28);
  position: relative;

  .card__img{
    height: 70%;
  }
  .card__info{
    padding-top: 5px;
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
    text-align: center;
  }
  }
}

// media

@media screen and (max-width:600px){
  .card{
    width: 100%;
  }
}
@media screen and (min-width:601px) and (max-width:960px){
  
  .card{
    width: calc(100% / 2 - 10px);
  }
}
@media screen and (min-width:961px) and (max-width: 1300px){
  .card{
    width: calc(100% / 3 - 10px);
  }
}
@media screen and (min-width:1301px) and (max-width: 1600px){
  .card{
    width: calc(100% / 3 - 10px);
  }
}
</style>
