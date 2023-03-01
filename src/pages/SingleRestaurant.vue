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
      <div class="card-product" v-for="product in singleRestaurant.products" v-show="product.is_available === 1">
        <div class="card-product__image">
          <img :src="product.image_url === null ? product.image : product.image_url" alt="">
        </div>
        <div class="card-product__info">   
          <h5>{{ product.name }}</h5>
          <button class="card-product__info__btn">Info</button>
          <p>{{ product.price }} €</p>
          <button @click="pushProduct(product)"><i class="fa-solid fa-cart-shopping"></i></button>
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
   // Metodo per trasformare l'oggetto in stringa e memorizzarlo nel localStorage.
   // Nel componente ModalCard.vue il prodotto viene riconvertito in oggetto.
    pushProduct(obj){ 

     // Variabile che assume il valore dell'oggetto dentro all'array se presente.
    let check = this.store.cart.find(elm=> elm.id === obj.id)
     if(check){
      this.showPopup = true;
      console.log(check);
      check.quantity ++;
      localStorage.setItem('cartItems',JSON.stringify(this.store.cart));
    }
      else if(store.cart.length === 0){
        this.showPopup = true;
        obj.quantity = 1
        this.store.cart.push(obj);
        localStorage.setItem('cartItems',JSON.stringify(this.store.cart));
      }
      else if(store.cart[0].restaurant_id === obj.restaurant_id) {
        this.showPopup = true;
        obj.quantity = 1;
        this.store.cart.push(obj);
        localStorage.setItem('cartItems',JSON.stringify(this.store.cart));
      }
      else{ 
        // Alert se si prova ad aggiungere prodotti di ristoranti diversi.
        alert(`🍕🍕 Hai provato ad aggiungere prodotti di ristoranti diversi 🍕🍕`)
      }
      // FA COMPARIRE IL POP-UP PER 5 SECONDI
      setTimeout(() => {
        this.showPopup = false;
      },5000);
    },
    filterKitchens(restaurant){
      let final = new Set(restaurant.map(elm => elm.name))
      return [...final]
    }
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
    max-width: 150px;
    max-height: 150px;

    img{
      object-fit: cover;
    }
  }
  .card-product__info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    max-height: 150px;
    
    > *{
      margin-bottom: 3px;
    }

    span{
      font-weight: bold;
      
    }
    .card-product__info__btn{
      margin: 0px;
      padding: 2px;
    }
    .card-product__input{
      padding-right:5px;
    }
    button{
      border-radius: 5px;
      width: 50px;
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
  
  .single-restaurant{
  display: flex;
  .single-restaurant__image{
    width: 300px;
    height: 300px;
    
    img{
      border-radius: 10px;
    }
  }
  .single-restaurant__info{
    margin-left: 10px;

    > *:not(:first-child){
      margin: 10px 0px ;
      font-size: 0.9rem;
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
    width: calc(100% / 2 - 10px);
    margin: 5px;
    margin-left: 0;
    border-radius:5px;
  .card-product__image{
    
    img{
      object-fit: cover;
      width: 100px;
      height: 100px;
    
    }
  }
  .card-product__info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h5{
      font-size: 0.8rem;
    }
    &__btn{
      display: none;
    }
    p{
      font-size: 0.9rem;
    }
    button{
      margin: 0;
      max-width: 50px;


      }

    }
  }
}

}
@media screen and (min-width:601px) and (max-width:960px){
  .single-restaurant{
    display: flex;
    .single-restaurant__image{
      width: 400px;
      height: 300px;
    
      img{
        border-radius: 10px;
      }
    }
  .single-restaurant__info{
    margin-left: 40px;

    > *:not(:first-child){
      margin: 10px 0px ;
      font-size: 1rem;
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
      width: calc(100% / 2 - 10px);
      margin: 5px;
      margin-left: 0;
      border-radius:5px;
    .card-product__image{
      
      img{
        object-fit: cover;
        width: 100px;
        height: 100px;
      
      }
    }
    .card-product__info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h5{
        font-size: 0.8rem;
      }
      &__btn{
        display: none;
      }
      p{
        font-size: 0.9rem;
      }
      button{
        margin: 0;
        max-width: 50px;
      }
    }
  }
}
}
@media screen and (min-width:961px) and (max-width: 1300px){

  .single-restaurant{
    display: flex;
    .single-restaurant__image{
      width: 400px;
      height: 300px;
    
      img{
        border-radius: 10px;
      }
    }
  .single-restaurant__info{
    margin-left: 40px;

    > *:not(:first-child){
      margin: 10px 0px ;
      font-size: 1rem;
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
      width: calc(100% / 3 - 10px);
      margin: 5px;
      margin-left: 0;
      border-radius:5px;
    .card-product__image{
      
      img{
        object-fit: cover;
        width: 100px;
        height: 100px;
      
      }
    }
    .card-product__info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h5{
        font-size: 1rem;
      }
      &__btn{
        display: none;
      }
      p{
        font-size: 1rem;
      }
      button{
        margin: 0;
        max-width: 70px;
      }
    }
  }
}
 
}
@media screen and (min-width:1301px) and (max-width: 1600px){
  
  .single-restaurant{
    display: flex;
    .single-restaurant__image{
      width: 400px;
      height: 300px;
    
      img{
        border-radius: 10px;
      }
    }
  .single-restaurant__info{
    margin-left: 40px;

    > *:not(:first-child){
      margin: 10px 0px ;
      font-size: 1rem;
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
      width: calc(100% / 3 - 10px);
      margin: 5px;
      margin-left: 0;
      border-radius:5px;
    .card-product__image{
      
      img{
        object-fit: cover;
        width: 100px;
        height: 100px;
      
      }
    }
    .card-product__info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h5{
        font-size: 1rem;
      }
      &__btn{
        display: block;
      }
      p{
        font-size: 1rem;
      }
      button{
        margin: 0;
        max-width: 70px;
      }
    }
  }
}

}

</style>
