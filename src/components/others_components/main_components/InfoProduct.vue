<template>
   <div class="modal" v-if="show">
      <div class="modal-background" @click="$emit('close')"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h2>{{ store.infoProduct.name }}</h2>
          <img :src="store.infoProduct.image_url === null ? store.infoProduct.image : store.infoProduct.image_url" alt="">
          <button class="close-button" @click="$emit('close')">X</button>
        </div>
        <div class="modal-body">
          <slot class="modal-body__content" >
            <div class="modal-body__content__info">
                <h3>Descrizione:</h3>
                <p>{{store.infoProduct.description}}</p>
                <h3>Ingredienti:</h3>
                <p>{{ store.infoProduct.ingredients }}</p>
            </div>
          </slot>
        </div>
      </div>
    </div>
</template>

<script>
import {store} from '../../../store';
export default {
    name: 'InfoProduct',
    data () {
        return {
        store
        }
    },
    props:{
        show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
}
}
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
  background-color: rgba(1, 10, 7, 0.2);
  opacity: 1;
  z-index: -1;
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
  padding: 20px;
  position: relative;

  h2{
    z-index: 100;
    background-color: rgb(19, 19, 19,0.4);
    font-weight: bold;
    color: white;
    padding: 20px;
    border-radius: 5px;
}

  img{
    position: absolute;
    top: 0%;
    right: 0%;
    width: 100%;
    object-fit: cover;
}
}

.modal-body {
    padding: 20px;
    .modal-body__content{
      overflow-y: scroll;

      .modal-body__content__info{
        h4{
          font-weight: bold;
        }
        
      }
    }

}

.close-button {
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  z-index: 222;
  color: white;
  position: absolute;
  padding: 5px;
  top: 2%;
  right: 1%;
  background-color: rgb(19, 19, 19,0.4);
}


 /* nasconde la scrollbar in Chrome, Safari e Opera */
 .modal-body__content::-webkit-scrollbar {
    display: none;
  }

  /* nasconde la scrollbar in Firefox */
  .modal-body__content {
    scrollbar-width: none;
  }

  /* rimuove la scrollbar di Internet Explorer */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .modal-body__content::-ms-scrollbar {
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