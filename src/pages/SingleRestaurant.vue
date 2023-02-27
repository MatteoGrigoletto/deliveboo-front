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
      <span>Tipilogia di cucina: </span>
      <span class="badge text-bg-light fs-6 me-1 rounded-pill" v-for="tipology in filterKitchens(singleRestaurant.kitchens)">{{ tipology}}</span>
    </div>
  </div>

  <!-- PRODOTTI DEL RISTORANTE -->
  
  <!-- ************************************************************************** -->
  <!-- POSSIBILITA' CREARE UN COMPONENTE PRODUCT PER ELIMINARE CODICE RINDONDANTE -->
  <!-- ************************************************************************** -->
  
  <div class="product-restaurant">
    <h3 >Numero di prodotti del ristorante: {{ singleRestaurant.products.length }}</h3>
    <!-- CARD CIBO PRODOTTI -->
    <h3>Cibo</h3>
    <div class="product-restaurant__food">
      <div class="card-product" v-for="product in singleRestaurant.products" v-show="product.is_available === 1">
        <div class="card-product__image">
          <img :src="product.image_url === null ? product.image : product.image_url" alt="">
        </div>
        <div class="card-product__info">   
          <h5>{{ product.name }}</h5>
          <button class="card-product__btn-info">Informazioni</button>
          <p>{{ product.price }} €</p>
          <input class="card-product__input" type="number" name="quantity" :id="`${product.id}-quantity`" min="1" max="5">
          <button @click="pushProduct(product)"><i class="fa-solid fa-cart-shopping"></i> </button>
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
    pushProduct(obj){ 
    this.store.productQuantity =  document.getElementById(`${obj.id}-quantity`).value
     obj.quantity = Number(this.store.productQuantity)
      if(store.cart.length === 0 && obj.quantity > 0){
         this.store.cart.push(obj)
         localStorage.setItem('cartItems',JSON.stringify(this.store.cart))
     
      }else if(store.cart[0].restaurant_id === obj.restaurant_id && obj.quantity > 0){
        this.store.cart.push(obj)
        localStorage.setItem('cartItems',JSON.stringify(this.store.cart))
        
      }else if(obj.quantity <= 0){
        // ALERT SE PROVI A INSERIRE UN VALORE NEL INPUT CARRELLO NEGATIVO 
        alert(`Inserisci nel carrello un quantitativo positivo`)
      }else{
        // ALERT SE PROVI A COMPRARE DA DUE RISTORATORI
        alert(`🍕🍕 Hai provato ad aggiungere prodotti di ristoranti diversi 🍕🍕`)
      }
    },
    filterKitchens(restaurant){
      let final = new Set(restaurant.map(elm => elm.name))
      console.log([...final]);
      return [...final]

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
  color: var(--restaurant-text-color);
}
.single-restaurant{
  display: flex;
  .single-restaurant__image{
    width: 700px;
    height: 400px;
    border: 1px solid white;
  }
  .single-restaurant__info{
    margin-left: 50px;

    p,span{
    font-size: 1.3rem;
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
    max-width: 150px;
    max-height: 150px;

    img{
      object-fit: cover;
    }
  }
  .card-product__info{
    margin-left: 10px;
    max-height: 150px;
    
    > *{
      margin-bottom: 3px;
    }

    span{
      font-weight: bold;
      
    }
    .card-product__btn-info{
      margin: 0px;
      padding: 2px;
    }
    .card-product__input{
      padding-right:5px;
    }
    button{
      margin-left: 10px;
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
