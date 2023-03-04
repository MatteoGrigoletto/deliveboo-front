<template>
  <div class="home-page-main">
    <CardsRestaurants></CardsRestaurants>
  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
import CardsRestaurants from "../components/others_components/main_components/CardsRestaurants.vue";

export default {
  name: "HomePage",
  data() {
    return {
      store,
    };
  },
  components: {
    CardsRestaurants
},
methods:{
  getCustomer(){

    // Prende i dati dell'email e del nome dalla rotta 
    // e li salva in un oggetto che poi viene passato
    // al localStorage, per poi resettare la rotta 
    // eliminando i dati sensibili da essa.
    // Funzione eseguita nel hook mounted
    const email = this.$route.query.email;
    const name = this.$route.query.name;
    
    if (email && name) {
      const customer = {
        name: name,
        email: email,    
      }
      localStorage.setItem('objCustomer', JSON.stringify(customer));
      this.store.objCustomer = customer
      this.$router.push({ path: '/' });
      this.store.checkUser = true
    }
     else {
      // localStorage.removeItem('objCustomer')
      this.store.objCustomer = JSON.parse(localStorage.getItem('objCustomer'));
    }
  }
},
  created() {
    axios.get("http://localhost:8000/api/restaurants").then((response) => {
      this.store.restaurants = response.data;
      console.log(store.restaurants);
     
    });
    console.log(localStorage);
    this. getCustomer()
  },
  mounted(){

    // Riporto a false le variabili relative alla comparsa della modale
    // ordine confermato e alla rotta dell'ordine specifico
    this.store.checkOutControll = false
  }
};
</script>

<style lang="scss" scoped>
.home-page-main {
  display: flex;
  flex-wrap: wrap;
  // width: 100%;
  position: absolute;
  top: 0%;
  right: 0%;
  // margin: 0px 10px;
}


@media screen and (max-width:600px){
  .home-page-main{
    position: relative;
  }
}
</style>
