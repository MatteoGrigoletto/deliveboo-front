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
      <div class="badge-container">
        <span class="badge text-bg-light fs-6 me-1 rounded-pill" v-for="tipology in filterKitchens(singleRestaurant.kitchens)">{{ tipology}}</span>
      </div>
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
     <!-- ciclo l'array riempito dalla API -->
     <div class="card-product" v-for="product, index in singleRestaurant.products">
      <div class="card-product__image">
        <img :src="product.image_url === null ? product.image : product.image_url" alt="">
      </div>
      <div class="card-product__info">
        <div class="card-product__info__title">
          <h5>{{ product.name }}</h5>
        </div>   
        <div class="card-product__info__price">
          <span>{{ product.price }} €</span>
          <button @click="infoProducts(product)">info</button>
          <!-- Componente per visualizzare la descrizione del prodotto -->
          <InfoProduct :show="store.modalProduct" title="Titolo della modale" @close="store.modalProduct = false"></InfoProduct>
        </div>
        <div v-if="!store.cart.find(elm=> elm.id === product.id)" class="card-product__quantity" >
          <button @click="pushProduct(product)"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
        
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
<!-- <InfoProduct  :show="store.modalProduct" :products="infoProdut" title="info-product" @close="store.modalProduct = false" > </InfoProduct> -->
  <!-- evento notifica aggiunta prodotto al carrello -->
  <div v-if="showPopupAddProduct" class="add-popup">
      Prodotto aggiunto al carrello!
  </div>
  <!-- evento notifica prodotti di due ristoranti diversi -->
  <div v-if="showPopupDoubleRestorant" class="add-popup">
    <p>Prodotti di due ristoranti diversi,</p>
     <p>svuota il carrello per aggiungere questo prodotto</p> 
     <button @click="store.showModal = true">Per aprire il carrello</button>
  </div>
</section>
</template>

<script>
import axios from "axios";
import { store } from "../store";
import InfoProduct from "../components/others_components/main_components/InfoProduct.vue";
export default {
  name: "SingleRestaurant",
  data() {
    return {
      store,
      singleRestaurant: [],
      showPopupAddProduct: false,
      showPopupDoubleRestorant: false,
    };
  },
  components:{
    InfoProduct  
  },
  
  methods:{
    infoProducts(product){
      this.store.modalProduct = true
      
      this.store.infoProduct = product
      
    },
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
        this.showPopupAddProduct = true;
        obj.quantity = 1
        this.store.cart.push(obj);
        localStorage.setItem('cartItems',JSON.stringify(this.store.cart));
        this.hiddenBtnCart = true
      }
      else if(store.cart[0].restaurant_id === obj.restaurant_id && !check) {
        this.showPopupAddProduct = true;
        obj.quantity = 1;
        this.store.cart.push(obj);
        localStorage.setItem('cartItems',JSON.stringify(this.store.cart));
        this.hiddenBtnCart = true
      }
      else{ 
        // Alert se si prova ad aggiungere prodotti di ristoranti diversi.
        this.showPopupDoubleRestorant = true
      }
      // FA COMPARIRE IL POP-UP PER 3 SECONDI
      setTimeout(() => {
        this.showPopupAddProduct = false;
      },3000);
      setTimeout(() => {
        this.showPopupDoubleRestorant = false;
      },7000);
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
    width: 50%;
    height: 400px;
    border: 1px solid white;
    border-radius: 10px ;
    border: 2px solid orange;
    
    img{
      border-radius: 10px;
    }
  }

  .single-restaurant__info{
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > *:not(:first-child){
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
    border: 1px solid rgb(68, 67, 67);
    border-radius:5px;
  .card-product__image{
    width: 40%;

    img{
      height: 150px;
      object-fit: cover;
    }
  }
  .card-product__info{
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5px;
    
    h5{
      font-size: 1.1rem;
      font-weight: bold;  
    }
    .card-product__info__price{
      span{
        font-size: 1.2rem;

      }
      font-weight: bold;  
      display: flex;
      justify-content: space-between;

      button{
        background-color: rgb(207, 204, 204);
        color: black;
        border: 1px solid black;
        padding: 0px 4px;
      }   
    }
    .card-product__quantity{
      text-align: center;
      button{
          width: 25%;
          padding: 0px;
          margin: 0px 10px;
        }
      }
    }
  }
}

// POP-UP NOTIFICA AGGIUNTO PRODOTTO AL CARRELLO
.add-popup {
  position: fixed;
  bottom: 20px;
  right: 0%;
  background-color: #e8dfd6;
  color: rgb(8, 8, 8);
  padding: 10px;
  margin: 10px;
  border: 2px solid rgb(245, 121, 13);
  border-radius: 5px;
}

// media

@media screen and (max-width:600px){
  
  .single-restaurant{
  .single-restaurant__image{
    width: 50%;
  }

  .single-restaurant__info{

    > *:not(:first-child){
      font-size: 1rem;
    }
  }
}

// products
.product-restaurant{
 
  .card-product{
   
    width: 100%;
  .card-product__image{
    width: 30%;

  }
  .card-product__info{

    width: 70%;
    margin-left: 5px;
    padding: 5px; 
    }
  }
}

}
@media screen and (min-width:601px) and (max-width:960px){

  single-restaurant{
  .single-restaurant__image{
    width: 50%;
  }

  .single-restaurant__info{

    > *:not(:first-child){
      font-size: 1.1rem;
    }
  }
}

// products
.product-restaurant{
 
  .card-product{
   
    width: calc(100% / 2 - 10px);
    margin: 5px;
  .card-product__image{
    width: 30%;
  }
  .card-product__info{

    width: 70%;
    margin-left: 5px;
    padding: 5px;

    h5{
      font-size: 1rem;
    }
    }
  }
}
 
}
@media screen and (min-width:961px) and (max-width: 1300px){

  .single-restaurant{
  .single-restaurant__image{
    width: 50%;
  }

  .single-restaurant__info{

    > *:not(:first-child){
      font-size: 1.1rem;
    }
  }
}

// products
.product-restaurant{
 
  .card-product{
   
    width: calc(100% / 2 - 10px);
    margin: 5px;
  .card-product__image{
    width: 40%;
  }
  .card-product__info{

    width: 60%;
    margin-left: 5px;
    padding: 5px;
    }
  }
}
 
}

@media screen and (min-width:1301px) and (max-width: 1600px){
  
  .single-restaurant{
  .single-restaurant__image{
    width: 50%;
  }

  .single-restaurant__info{

    > *:not(:first-child){
      font-size: 1.1rem;
    }
  }
}

// products
.product-restaurant{
 
  .card-product{
   
    width: calc(100% / 3 - 20px);
    margin: 10px;
  .card-product__image{
    width: 40%;
  }
  .card-product__info{

    width: 60%;
    margin-left: 5px;
    padding: 5px;

    }
  }
}
}

</style>
