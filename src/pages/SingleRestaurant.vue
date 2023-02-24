<template>
  <div class="single-restaurant">
    <div class="single-restaurant__image">
      <img :src="singleRestaurant.image" alt="image-restaurant" />
    </div>
    <div class="single-restaurant__info">
      <h1>{{singleRestaurant.name}}</h1>
      <p>{{singleRestaurant.city}}</p>
      <p>{{singleRestaurant.street_address}}</p>
    </div>
  </div>
  <!-- prodotti del ristorante -->
  <h2>Prodotti del ristorante</h2>
  <div class="product-restaurant">
    <h3>Cibo</h3>

    <!-- card cibo prodotti -->
    <div class="product-restaurant__food">
      <div class="card-product" v-for="product in singleRestaurant.products" v-show="product.typology != 'bevanda' && product.is_available === 1">
        <div class="card-product__image">
          <img :src="product.image" alt="">
        </div>
        <div class="card-product__info">   
          <h3>{{ product.name }}</h3>
          <p>{{ hiddenText(product.ingredients) }}...</p>
          <p>{{ product.price }} €</p>
        </div>
      </div>
    </div>
    <h3>Bevande</h3>

    <!-- card bevande prodotti -->
    <div class="product-restaurant__drink">
      <div class="card-product" v-for="product in singleRestaurant.products" v-show="product.typology == 'bevanda' && product.is_available === 1">
        <div class="card-product__image">
          <img :src="product.image" alt="">
        </div>
        <div class="card-product__info">
          <h3>{{ product.name }}</h3>
            <p>{{ hiddenText(product.ingredients) }}...</p>
            <p>{{ product.price }} €</p>
        </div>
      </div>
    </div> 
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
      singleRestaurant: [],
    };
  },
  methods:{
    hiddenText(str){
     return str.slice(0,50)
    }
  },
  // chiamata axios che prende come parametro lo slag generato dal link della card presente
  // nel componente AppCard.vue
  created() {
    axios
      .get(
        `http://localhost:8000/api/restaurants/${this.$route.params.restaurant}`
      )
      .then((response) => {
        this.singleRestaurant = response.data;
      
        console.log(this.singleRestaurant);
      })
      .catch((err) => {
        console.log(err);
        this.$router.push({ name: "page-404" });
      });
  },
};
</script>

<style lang="scss" scoped>
.single-restaurant{
  display: flex;
  .single-restaurant__image{
    width: 700px;
    height: 400px;
  }
  .single-restaurant__info{
    margin-left: 50px;
  
  }
}

// products
.product-restaurant{

  .product-restaurant__food,.product-restaurant__drink {
    display: flex;
    flex-wrap: wrap;
  }
  .card-product{
    display: flex;
    background-color:var(--card-product-bg-color) ;
    width: calc(100% / 3 - 30px);
    margin: 15px;
    margin-left: 0;
  .card-product__image{
    max-width: 200px;
    min-width: 200px;
  }
}
}

// media

@media screen and (max-width:600px){

}
@media screen and (min-width:601px) and (max-width:960px){
  
  
}
@media screen and (min-width:961px) and (max-width: 1300px){
 
}
@media screen and (min-width:1301px) and (max-width: 1600px){
  
}

</style>
