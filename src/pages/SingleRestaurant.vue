<template>
  <section>
  <div class="single-restaurant">
    <div class="single-restaurant__image">
     <!-- Controllo immagine -->
      <img :src="singleRestaurant.image_url === null ? singleRestaurant.image : singleRestaurant.image_url" alt="">
    </div>
    <div class="single-restaurant__info">
      <h2>{{singleRestaurant.name}}</h2>
      <p>{{singleRestaurant.city}}</p>
      <p>{{singleRestaurant.street_address}}</p>
      <span>Tipologia di cucina: </span>
      <span class="badge text-bg-light fs-6 me-1 rounded-pill" v-for="tipology in filterKitchens(singleRestaurant.kitchens)">{{ tipology}}</span>
      <div>
        <button><router-link :to="{ name: 'HomePage' }"> Ritorna ai Ristoranti</router-link></button>
      </div>
    </div>
  </div>
  
 <!-- Prodotti del ristorante -->
 <!-- Possibilità di creare un componente "Product" per eliminare codice ridondante -->
  
  <div class="product-restaurant">
    <h3>Prodotti</h3>
    <!-- Card cibo prodotti -->
    <div class="product-restaurant__food">
      <div class="card-product" v-for="product, index in singleRestaurant.products">
        <div class="card-product__image">
          <img :src="product.image_url === null ? product.image : product.image_url" alt="">
        </div>
        <div class="card-product__info">   
          <h5>{{ product.name }}</h5>
          <p>{{ product.price }} €</p>
          <button v-if="!store.cart.find(elm=> elm.id === product.id)" @click="pushProduct(product)"><i class="fa-solid fa-cart-shopping"></i></button>
          
          <!-- Se il prodotto viene aggiunto al carrello escono dei bottono con la quale poter trovare il prodotto -->
          <!-- dentro al carrello e modificarne la quantita' -->
          <div v-else class="card-product__quantity">
            <button @click="store.quantityDown(findProduct(product))"> - </button>
            <span> {{ findProduct(product).quantity }} </span>
            <button @click="store.quantityUp(findProduct(product))"> + </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- evento notifica aggiunta prodotto al carrello -->
  <div v-if="showPopup" class="popup">
      Prodotto aggiunto al carrello!
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
      showPopup: false,
    };
  },
  components:{
  },
  methods:{
    hiddenText(str){
     return str.slice(0,50)
    },
    // Funzione per trovare il prodotto alla quale aumentare la quantita'
    findProduct(product){
     return this.store.cart.find((elm)=> elm.id === product.id)
    },

   // Metodo per trasformare l'oggetto in stringa e memorizzarlo nel localStorage.
   // Nel componente ModalCard.vue il prodotto viene riconvertito in oggetto.
    pushProduct(obj){ 

     // Variabile che assume il valore dell'oggetto dentro all'array se presente.
      let check = this.store.cart.find(elm=> elm.id === obj.id)
    
        if(store.cart.length === 0){
        this.showPopup = true;
        obj.quantity = 1
        this.store.cart.push(obj);
        localStorage.setItem('cartItems',JSON.stringify(this.store.cart));
        this.hiddenBtnCart = true
      }
      else if(store.cart[0].restaurant_id === obj.restaurant_id && !check) {
        this.showPopup = true;
        obj.quantity = 1;
        this.store.cart.push(obj);
        localStorage.setItem('cartItems',JSON.stringify(this.store.cart));
        this.hiddenBtnCart = true
      }
      else{ 
        // Alert se si prova ad aggiungere prodotti di ristoranti diversi.
        alert(`🍕🍕 Hai provato ad aggiungere prodotti di ristoranti diversi 🍕🍕`)
      }
      // FA COMPARIRE IL POP-UP PER 5 SECONDI
      setTimeout(() => {
        this.showPopup = false;
      },3000);
    },
    filterKitchens(restaurant){
      let final = new Set(restaurant.map(elm => elm.name))
      return [...final]
    },


  },
  //Chiamata axios che prende come parametro lo slag generato dal liink della card presente
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
    border: 1px solid white;
    border-radius: 10px ;
    border: 2px solid orange;
    
    img{
      border-radius: 10px;
    }
  }

  .single-restaurant__info{
    margin-left: 50px;

    > *:not(:first-child){
      margin: 20px 0px ;
      font-size: 1.3rem;
    }
    .badge{
      background-image: var(--badge-bg-color);
    }
  }
}

// products
.product-restaurant{
  margin-top: 30px;
  .product-restaurant__food,.product-restaurant__drink {
    display: flex;
    flex-wrap: wrap;
  }
  .card-product{
    display: flex;
    background-image:var(--product-bg-color) ;
    width: calc(100% / 4 - 30px);
    margin: 15px;
    margin-left: 0;
    padding: 10px;
    border: 1px solid white;
    border-radius:5px;
  .card-product__image{
    width: 50%;

    img{
      height: 150px;
      object-fit: cover;
    }
  }
  .card-product__info{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5px;
    .card-product__info__btn{
      padding: 2px;
    }
    button{
      border-radius: 5px;
      width: 50px;
      }
      .card-product__quantity{
        text-align: center;
        button{
          padding: 0px;
          margin: 0px 10px;
        }
      }
    }
  }
}

// POP-UP NOTIFICA AGGIUNTO PRODOTTO AL CARRELLO
.popup {
  position: fixed;
  bottom: 20px;
  right: 0%;
  background-color: #3ef541;
  color: rgb(8, 8, 8);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
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
