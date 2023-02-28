<template>
  <!-- MODALE CARRELLO CHE COMPARE CLICCANDO IL TASTO RELATIVO NEL COMPONENTE NavBarHeader.vue -->
  <!-- E' POSSIBILE RIMUOVERE I PRODOTTI E VIENE CALCOLATO IL TOTALE -->
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal-background" @click="$emit('close')"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h2>Aggiungi</h2>
          <button class="close-button" @click="$emit('close')">X</button>
        </div>
        <div class="modal-body">
          <slot>
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
                      <button @click="quantityDown(item,index)"> - </button>
                      <button @click="quantityUp(item,index)"> + </button>
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
    quantityUp(product,index){
      product.quantity++
      localStorage.setItem('cartItems', JSON.stringify(this.store.cart));
    },
    quantityDown(product,index){
      product.quantity--
      if( product.quantity <= 0){
        this.store.cart.splice(index,1)   
      }
      localStorage.setItem('cartItems', JSON.stringify(this.store.cart));
    }
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
  width: 50%;
  height: 80%;
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.modal-body{
padding: 10px 2px;
}
.close-button {
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
// modale carrello
.container-item-cart{
  width: 102%;
  height: 400px;
  overflow-y: scroll; 
  .item-cart{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0px;
    border-radius: 5px;
    // background-color: var(--header-bg-color);

    .item-cart__image{
      width: 30%;
    }
    .item-cart__info{
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content:center;

      p{
        margin: 5px 0px;
      }
      .item-cart__info__btn{
        
        button{
          margin: 0px 10px;
        }
      }
    }
  } 
}
.container-info-cart{
  display: flex;
  flex-direction: column;
  align-items: center;

  >*{
    width: 200px;
    margin-top: 30px;
  }
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>