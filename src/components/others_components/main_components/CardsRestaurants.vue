<template>
  <!-- QUATTRO COMPONENTI IDENTICI CHE VENGONO VISUALIZZATI NEL COMPONENTE HomePage.vue  -->
  <!-- IN BASE ALLA CONDIZIONE -->

  <!-- RICERCA TRAMITE NavBarHeader INPUT -->
  <div v-if="store.input.length > 0" class="card" v-for="restaurant in store.restaurants" v-show="restaurant.name.toLowerCase().includes(store.input.toLowerCase()) " >
   <SingleCardRestaurant 
    :restaurant = "restaurant"
   ></SingleCardRestaurant>
  </div>
  
  <!-- RICERCA TRAMITE CATEGORIE  -->
  <div v-else-if="store.inputKitchens.length > 0" class="card" v-for="restaurant in store.restaurants" v-show="restaurant.kitchens[0].name == store.inputKitchens " >
    <SingleCardRestaurant 
    :restaurant = "restaurant"
   ></SingleCardRestaurant>
  </div>

  <!-- RICERCA TRAMITE COMPONENTE FiltetSide -->
  <div v-else-if="store.checkbox.length > 0" class="card" v-for="restaurant in store.restaurants" v-show="filterCheckbox(restaurant)" >
    <SingleCardRestaurant 
    :restaurant = "restaurant"
   ></SingleCardRestaurant>
  </div>

  <!-- SE NON VIENE IMPOSTATA UNA RICERCA -->
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
},
methods:{
    filterCheckbox(restaurant){   
     let arr = restaurant.kitchens.map(elm => elm.name)
     return this.store.checkbox.every(elm => arr.includes(elm)) 

    }
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
