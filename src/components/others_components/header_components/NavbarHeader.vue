<template>
  <div class="nav-bar">
    <!-- <div class="nav-bar__logo">
      <img src="https://impactwebagency.com/wp-content/uploads/2022/05/banner-deliveboo.png" alt="logo">
    </div> -->
    <div class="nav-bar__input">
      <input type="text" v-model="store.input" placeholder="Ricerca ristorante o prodotto "/>
    </div>
    <div class="nav-bar__links">
      <ul>
        <li class="nav-bar__links__cart">

          <!-- TAG IN POSIZIONE ABSOLUTE CHE INDICA LA QUANTITA' DI PRODOTTI NEL CARRELLO  -->
          <div v-if="store.cart.length > 0 " class="count-cart">
            {{ store.cart.length }}
          </div>

          <!-- BOTTONE PER ATTIVARE IL COMPONENTE ModalCard.vue -->   
          <button @click="showModal = true"><i class="fa-solid fa-cart-shopping"></i></button>
          <div class="app">
              <ModalCard :show="showModal" title="Titolo della modale" @close="showModal = false">          
              </ModalCard>
          </div>
        </li>
        <li class="nav-bar__links__register">
          <a href="http://127.0.0.1:8000/register"><span>Registrati</span></a>
        </li>
        <li class="nav-bar__links__login">
          <a href="http://127.0.0.1:8000/login"><span>Accedi</span></a>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script>
import { store } from "../../../store.js";
import ModalCard from "../main_components/ModalCard.vue";
export default {
  name: "NavbarHeader",
  data() {
    return {
      store,
      showModal: false,
    };
  },
  components:{
    ModalCard
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

  .nav-bar__logo,.nav_bar__links{
    width: 25%;
    height: 100%;
  }
  .nav-bar__input{
    width: 50%;
    height: 100%;

    input{
      width: 100%;
    }
  }
}
.nav-bar__links{

  ul{
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    margin:0;

    li{
      background-color: var(--btn-bg-color); 
      border: 1px solid black;
      border-radius:5px;
      text-align: center;

      button{
        border: none;
        background-color:var(--btn-bg-color) ;
      }    
      a{
        text-decoration: none;
        color:var(--btn-text-color);
      }
    }
  }
}
img{
  height: 50px;
  filter: invert(0.1);
  object-fit:cover;
  }

.nav-bar__links__cart{
  position: relative;
  .count-cart{
    position: absolute;
    top: -40%;
    right: -20%;
    width: 30px;
    height: 30px;
    border: 1px solid white;
    border-radius: 100%;
    background-color: rgb(30, 42, 218);
    color: white;
    text-align: center;
    line-height: 30px;
    font-size: 0.8rem;
  }

}


// media query
@media screen and (max-width:600px){
  .nav-bar{
    padding:20px 10px;
    .nav-bar__logo{
        display: none;
    }
    .nav-bar__input{
      
      input{
        padding: 5px 0px;
        border-radius: 10px;
      }
    }
    .nav-bar__links{
      
      li{
        margin: 0px 20px;
        padding: 5px 10px;
      }
    }
  }
}
@media screen and (min-width:601px) and (max-width:1300px){
  .nav-bar{
    padding: 20px 10px;
    .nav-bar__logo{
        padding: 0px 20px;
    }
    .nav-bar__input{
      
      input{
        padding: 10px 0px;
        border-radius: 10px;
      }
    }
    .nav-bar__links{
      
      li{
        margin: 0px 10px;
        padding: 10px 20px;
      }
    }
  }
}
@media screen and (min-width:1301px) and (max-width: 100000px){
  
  .nav-bar{
    padding: 20px 10px;
    .nav-bar__logo{
      padding: 0px 20px;
    }
    .nav-bar__input{
      
      input{
        padding: 10px 10px;
        border-radius: 10px;
      }
    }
    .nav-bar__links{
      
      li{
        margin: 0px 10px;
        padding: 10px 40px;
      }
    }
  }
}
</style>
