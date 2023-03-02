<template>
  <!-- MODALE CARRELLO CHE COMPARE CLICCANDO IL TASTO RELATIVO NEL COMPONENTE NavBarHeader.vue -->
  <!-- E' POSSIBILE RIMUOVERE I PRODOTTI E VIENE CALCOLATO IL TOTALE -->
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal-background" @click="$emit('close')"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h2>Il tuo Carrello</h2>
          <button class="close-button" @click="$emit('close')">X</button>
        </div>
        <div class="modal-body">
          <!-- controllo se il carrello e' vuoto -->
          <slot v-if="store.cart <= 0">
          <div>
              <h2>Il tuo carrello è vuoto! </h2>
              <button  @click="store.showModal = false">Ritorna ai Ristoranti</button>
            </div>
          </slot>
          <!-- se il carrello e' pieno -->
          <slot v-else> 
            <div class="container-item-cart">
              <div  v-for="item,index in store.cart">
                <div class="item-cart">
                  <div class="item-cart__image">
                    <img :src="item.image_url === null ? item.image : item.image_url" alt="">
                  </div>
                  <div class="item-cart__name">
                    <span>{{ item.name }}</span>
                  </div>
                  <div class="item-cart__info">
                    <div class="item-cart__info__btn">
                      <button @click="store.quantityDown(item,index)"> - </button>
                      <button @click="store.quantityUp(item,index)"> + </button>
                    </div>
                    <div>
                      <p>Quantita: {{ item.quantity }}</p>
                    </div>
                    <div>
                      <button @click="removeItemFromCart(item,index)">remove</button>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
            <div class="container-info-cart">
              <span>Totale: {{ totalPrice(store.cart) }} €</span>
              <button class="btn-pay"><router-link :to="{name: 'OrderCustomer'}" @click="store.showModal = false">Conferma</router-link></button>      
            </div>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {store} from '../../../store';
export default {
  name: 'ModalCard',
  data(){
    return{
      store, 
   }
  },
  props: {
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  methods:{
    // METODO PER ELIMINARE PRODOTTI DAL CARRELLO
    removeItemFromCart(item,index){
      if(index !== -1){
        this.store.cart.splice(index,1)
        localStorage.setItem('cartItems', JSON.stringify(this.store.cart));
      }
    },
    // METODO PER CALCOLARE IL VALORE TOTALE DEL CARRELLO
    totalPrice(arr){ 
     this.store.totalPriceCart = arr.map(elm => elm.quantity * elm.price).reduce((totale,singlePrice)=> totale += Number(singlePrice),0).toFixed(2);
     return this.store.totalPriceCart;
    },
  },

  // PERMETTE DI PRENDERE I DATI SALVATI NEL LOCALSTORAGE DI JS...LA LOGICA PER SALVARLI ALL'INTERNO DEL LOCALSTORAGE
  // E' PRESENTE NEL COMPONENTE SingleRestaurant.vue
  mounted(){
  const savedCartItems = localStorage.getItem('cartItems');
  if(savedCartItems){
    this.store.cart = JSON.parse(savedCartItems);
  }
  console.log(this.store.cart);
}
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 10, 7, 0.8);
  opacity: 1;
}

.modal-content {
  background-color: white;
  padding: 0px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(7, 7, 7, 0.5);
  width: 30%;
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-image: var(--cart-bg-color);
}

.modal-body {
  padding: 10px 10px;
}

.close-button {
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.container-item-cart {
  width: 100%;
  height: 400px;
  overflow-y: scroll;

  .item-cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(7, 7, 7, 0.5);

    &:hover {
      box-shadow: 0px 0px 15px rgba(7, 7, 7, 0.7);
      transition: all 0.2s ease-in-out;
    }

    &__image {
      width: 70px;
      height: 70px;
      overflow: hidden;
      border-radius: 5px;
      margin-right: 10px;
      img {
        object-fit: cover;
      }
    }

    &__info {
      display: flex;
      align-items: center;

      P{
        margin: 0;
      }
      button {
          border: none;
          background-color: transparent;
          font-size: 18px;
          cursor: pointer;
          margin: 0px 5px;
          // padding: 5px;
          border-radius: 5px;
          box-shadow: 0px 0px 5px rgba(7, 7, 7, 0.3);
          &:hover {
            background-color: #000000;
            color: #ffffff;
          }
        }
      }
      button {
        background-color: transparent;
        border: none;
        font-size: 16px;
        cursor: pointer;
        color: red;

        &:hover {
          color: #ffffff;
          background-color: #ff4500;
          border-radius: 5px;
          box-shadow: 0px 0px 5px rgba(7, 7, 7, 0.3);
          }
        }
      }
    }
  .container-info-cart{
    display: flex;
    flex-direction: column;
    align-items: center;


    button{
      margin: 10px 0px;
    }
  }

 /* nasconde la scrollbar in Chrome, Safari e Opera */
 .container-item-cart::-webkit-scrollbar {
    display: none;
  }

  /* nasconde la scrollbar in Firefox */
  .container-item-cart {
    scrollbar-width: none;
  }

  /* rimuove la scrollbar di Internet Explorer */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .container-item-cart::-ms-scrollbar {
      display: none;
    }
  }
  // media

@media screen and (max-width:600px){
  .modal-content {
    width: 100%;
  }
}
@media screen and (min-width:601px) and (max-width:960px){
  .modal-content {
    width: 80%;
  }
}
@media screen and (min-width:961px) and (max-width: 1300px){
  .modal-content {
    width: 70%;
  }
}
@media screen and (min-width:1301px) and (max-width: 1600px){
  .modal-content {
    width: 50%;
  }
}

</style>