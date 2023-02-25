<template>
  <div v-if="store.input.length > 0" class="card" v-for="restaurant in store.restaurants" v-show="restaurant.name.toLowerCase().includes(store.input.toLowerCase()) " >
   <SingleCardRestaurant 
    :restaurant = "restaurant"
   ></SingleCardRestaurant>
  </div>
  
  <div v-else-if="store.inputKitchens.length > 0" class="card" v-for="restaurant in store.restaurants" v-show="restaurant.kitchens[0].name == store.inputKitchens " >
    <SingleCardRestaurant 
    :restaurant = "restaurant"
   ></SingleCardRestaurant>
  </div>

  <div v-else class="card" v-for="restaurant in store.restaurants" >
    <SingleCardRestaurant 
    :restaurant = "restaurant"
   ></SingleCardRestaurant>
  </div>

</template>

<script>
import { store } from "../../../store";
import SingleCardRestaurant from "./SingleCardRestaurant.vue";
export default {
  name: "AppCard",
  data() {
    return {
      store,
    };
  },
 components:{
  SingleCardRestaurant,
}
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
  background-color: var(--card-bg-color);

  .card__img{
    height: 70%;
  }
  .card__info{
    padding-top: 5px;
    text-align: center;
  

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
  
  a{
    padding: 5px 10px;
    border-radius: 5px;
    text-decoration: none;
    background-color: rgb(160, 166, 166);
    color: black;
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
