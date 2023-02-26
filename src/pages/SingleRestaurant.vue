<template>
  <section>
  <div class="single-restaurant">
    <div class="single-restaurant__image">
      <!-- CONTROLLO IMMAGINE -->
      <img :src="singleRestaurant.image_url === null ? singleRestaurant.image : singleRestaurant.image_url" alt="">
    </div>
    <div class="single-restaurant__info">
      <h1>{{singleRestaurant.name}}</h1>
      <p>{{singleRestaurant.city}}</p>
      <p>{{singleRestaurant.street_address}}</p>
    </div>
  </div>

  <!-- PRODOTTI DEL RISTORANTE -->
  <h2>Prodotti del ristorante</h2>
  <div class="product-restaurant">

<!-- ************************************************************************** -->
<!-- POSSIBILITA' CREARE UN COMPONENTE PRODUCT PER ELIMINARE CODICE RINDONDANTE -->
<!-- ************************************************************************** -->

    <!-- CARD CIBO PRODOTTI -->
    <h3>Cibo</h3>
    <div class="product-restaurant__food">
      <div class="card-product" v-for="product in singleRestaurant.products" v-show="product.typology != 'bevande' && product.is_available === 1">
        <div class="card-product__image">
          <img :src="product.image_url === null ? product.image : product.image_url" alt="">
        </div>
        <div class="card-product__info">   
          <h3>{{ product.name }}</h3>
          <p>{{ hiddenText(product.ingredients) }}...</p>
          <span>{{ product.price }} €</span>
          <button @click="pushStorage(product)"><i class="fa-solid fa-cart-shopping"></i> Carrello</button>
        </div>
      </div>
    </div>

    <!-- CARD BEVANDE PRODOTTI -->
    <h3>Bevande</h3>
    <div class="product-restaurant__drink">
      <div class="card-product" v-for="product in singleRestaurant.products" v-show="product.typology == 'bevande' && product.is_available === 1">
        <div class="card-product__image">
          <img :src="product.image_url === null ? product.image : product.image_url" alt="">
        </div>
        <div class="card-product__info">
          <h3>{{ product.name }}</h3>
            <p>{{ hiddenText(product.ingredients) }}...</p>
            <span>{{ product.price }} €</span>    
            <button @click="pushStorage(product)"><i class="fa-solid fa-cart-shopping"></i> Carrello</button>
        </div>
      </div>
    </div> 
  </div>
</section>
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
  components:{
  },
  methods:{
    hiddenText(str){
     return str.slice(0,50)
    },
    // METODO PER TRASFORMARE L'OGGETTO IN STRINGA E MEMORIZZARLO NEL LOCALSTORAGE
    // NEL COMPONENTE ModalCard.vue IL PRODOTTO VIENE RICONVERITO IN OGGETTO 
    pushStorage(obj){ 
      if(store.cart.length === 0){
       
        window.localStorage.setItem(`${this.store.count}`,JSON.stringify(obj))
        this.store.cart.push(obj)
        this.store.count++;

      }else if(store.cart[0].restaurant_id === obj.restaurant_id){

        window.localStorage.setItem(`${this.store.count}`,JSON.stringify(obj))
        this.store.cart.push(obj)
        this.store.count++

      }else{
        // ALERT SE PROVI A COMPRARE DA DUE RISTORATORI
        alert(`🍕🍕 Hai provato ad aggiungere prodotti di ristoranti diversi 🍕🍕`)
      }
    }
  },

  // CHIAMATA AXIOS CHE PRENDE COME PARAMETRO LO SLAG GENERATO DAL LINK DELLA CARD PRESENTE
  // NEL COMPONENTE AppCard.vue
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
section{
  position: absolute;
  width: 100%;
  top: 0%;
  right: 0%;
}
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
    background-color:var(--card-bg-color) ;
    width: calc(100% / 3 - 30px);
    margin: 15px;
    margin-left: 0;
    border: 2px solid rgb(70, 154, 210);
    border-radius:5px;
  .card-product__image{
    max-width: 200px;
    min-width: 200px;
  }
  .card-product__info{
    margin-left: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > *{
      margin: 5px;
    }
    span{
      font-weight: bold;
    }
    button{
      width: 100px;
      border-radius: 5px;
      }
    }
  }
}

// media

@media screen and (max-width:600px){
  section{
    position: relative;
  }
}
@media screen and (min-width:601px) and (max-width:960px){
  
  
}
@media screen and (min-width:961px) and (max-width: 1300px){
 
}
@media screen and (min-width:1301px) and (max-width: 1600px){
  
}

</style>
