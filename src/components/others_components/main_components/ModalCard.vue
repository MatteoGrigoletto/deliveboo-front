<template>
    <div class="modal" v-if="show">
      <div class="modal-background" @click="$emit('close')"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h2>Aggiungi</h2>
          <button class="close-button" @click="$emit('close')">X</button>
        </div>
        <div class="modal-body">
          <slot>
            <div v-for="item,index in store.cart">     
              <div  class="item-cart">
                <div class="item-cart__image">
                  <img :src="item.image_url" alt="">
                </div >
                <div class="item-cart__info">
                  <span>{{ item.name }}</span>
                </div>
                <div class="item-cart__btn">
                  <button @click="removeItemFromCart(index)">remove</button>
                </div>
              </div>
            </div>
          </slot>
        </div>
      </div>
    </div>
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
    removeItemFromCart(item){
      this.store.cart.splice(item,1)
    },
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
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 50%;
  height: 80%;
  overflow: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.close-button {
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}





// modale carrello
.item-cart{
    display: flex;
    align-items: center;
    margin: 10px 0px;
    border-radius: 5px;
    background-color: var(--header-bg-color);
  
    > div {
      width: 33%;

      button{
      margin: 3px;
      border: 2px solid black;
      }
    }
  }
</style>