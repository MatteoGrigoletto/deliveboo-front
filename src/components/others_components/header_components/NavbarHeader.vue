<template>
  <div class="nav-bar">
    <div class="nav-bar__logo">
      <img src="../../../assets/Deliveroo-Logo-final.png" alt="logo">
      <h1>DeliveBoo</h1>
    </div>
    <div class="nav-bar__input" v-if="$route.path === '/'">
      <input type="text" v-model="store.input" placeholder="Ricerca ristorante"/>
    </div>
    <div class="nav-bar__buttons" v-if="$route.path !== '/order' && $route.path !== '/checkout'">
    
      <!-- BOTTONE PER ATTIVARE IL COMPONENTE ModalCard.vue -->   
      <button class="nav-bar__buttons__cart" @click="store.showModal = true"><i class="fa-solid fa-cart-shopping"></i> 
        
       <!-- TAG IN POSIZIONE ABSOLUTE CHE INDICA LA QUANTITA' DI PRODOTTI NEL CARRELLO  -->
       <div v-if="store.cart.length > 0 " class="count-cart">
        {{ store.cart.length }}
      </div>    

      </button> 
      <button v-if="store.checkUser === false"><a href="http://127.0.0.1:8000/register">Sei un ristoratore?</a></button>
      <button v-if="store.checkUser"><a href="http://127.0.0.1:8000/login">Il tuo ristorante</a></button>   
      <ModalCart :show="store.showModal" title="Titolo della modale" @close="store.showModal = false"></ModalCart>
    </div>
  </div>
  
</template>

<script>
import { store } from "../../../store.js";
import ModalCart from "../main_components/ModalCart.vue";
export default {
  name: "NavbarHeader",
  data() {
    return {
      store,
      
    };
  },
  components:{
    ModalCart
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 100;
  width: 100%;
  background-color: var(--header-bg-color);
  padding: 10px;

  .nav-bar__logo,.nav_bar__buttons{
    width: 25%;
    height: 100%;
    display: flex;
    margin:0;
    align-items: center;

  }
  .nav-bar__logo{
    h1{
      width: 80%;
    }
    img{
      height: 70px;
      width: 20%;
      object-fit:cover;
    }
  }
  .nav-bar__input{
    width: 50%;
    height: 100%;

    input{
      width: 100%;
    }
  }
}
.nav-bar__buttons{

    list-style: none;
    button{
        background-color: var(--header-btn-bg-color);
        color: var(--header-btn-text-color);
        font-weight: bold;

        &:hover{
          background-color: var(--header-btn-hover-color);
          color: var(--header-btn-hover-text);
        }
        a:hover{
          color: var(--header-btn-bg-color);
        }
      }
    .nav-bar__buttons__cart{
      position: relative;

     
    }
}

  .count-cart{
    position: absolute;
    top: -40%;
    right: -20%;
    width: 35px;
    height: 35px;
    border: 1px solid black;
    border-radius: 100%;
    background-color: var(--count-bg-color);
    color: black;
    text-align: center;
    line-height: 35px;
    font-size: 1rem;
    font-weight: bold;
  }



// media query
@media screen and (max-width:600px){
  .nav-bar{
    .nav-bar__input{
      
      input{
        padding: 5px 0px;
        border-radius: 10px;
      }
    }
    .nav-bar__buttons{
      
    button {
        margin: 0px 10px;
        padding: 5px 10px;
      }
    }
  }
}
@media screen and (min-width:601px) and (max-width:1300px){
  .nav-bar{

    .nav-bar__input{
      
      input{
        padding: 10px 0px;
        border-radius: 10px;
      }
    }
    .nav-bar__buttons{
      
      button {
        margin: 0px 5px;
        padding: 5px 5px;
      }
    }
  }
}
@media screen and (min-width:1301px) and (max-width: 100000px){
  
  .nav-bar{

    .nav-bar__input{
      
      input{
        padding: 10px 10px;
        border-radius: 10px;
      }
    }
    .nav-bar__buttons{
      
      button{
        margin: 0px 10px;
        padding: 10px 30px;
      }
    }
  }
}
</style>
