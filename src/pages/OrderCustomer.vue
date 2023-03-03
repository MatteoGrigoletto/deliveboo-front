<template>
  <div class="form">
    <h2>Inserisci i tuoi dati</h2>
    <form @submit.prevent="sendData">
      <div class="form-group">
        <label for="name">Nome:</label>
        <input id="name" type="text" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="address">Indirizzo:</label>
        <input id="address" type="text" v-model="address" required>
      </div>
      <div class="form-group">
        <label for="phone">Telefono:</label>
        <input id="phone" type="tel" v-model="phone" required>
      </div>
      <div class="form-group flex">
        <label for="price">Prezzo:</label>
        <input id="price" type="number" min="0" step=".01" v-model="price" readonly required>
        <span> €</span>
      </div>
      <div id="dropin-container" class="dropin"></div>
      <button v-if="store.checkOutControll === false" id="submit-button" type="submit" class="button button--small button--green">Purchase</button>
      <router-link :to="{name: 'CheckOut'}" v-if="store.checkOutControll" >Ordine</router-link>    
    </form>

    <!-- Componente che viene visualizzato una volta che l'ordine e' andato a buon fine -->
    <OrderConfirmed :show="store.modalCheckOut" title="order-confirmed" @close="store.modalCheckOut = false"></OrderConfirmed>
  </div>
</template>

<script>
import axios from 'axios';
import {store} from '../store';
import OrderConfirmed from '../components/others_components/main_components/OrderConfirmed.vue';
export default {
    name:'OrderCustomer',
  data() {
    return {
      store,
      name: '',
      email: '',
      address: '',
      phone: '',
      price:'',
    };
  },
  components:{
    OrderConfirmed,
  },
  methods: {

    // Funzione che spedisce tramite chiamata axios un oggetto al server 
    // con all'interno i dati relativi all'ordine.
    sendData(){
      // associa il prodotto ordinato con la rispettiva quantita'
      let products = Object.values(this.store.cart).map(elm => elm.id)
      let quantity = this.store.cart.map(product => product.quantity)
      let order = []
      for(let i = 0; i < products.length; i++){
        let SingleProduct = {
          product_id: products[i],
          quantity:quantity[i]
        }
        order.push(SingleProduct)
      }
      // oggetto che viene salvato nel localeStorage
      this.store.objCustomer = { 
        name_customer: this.name,
        email_customer: this.email,
        address_customer: this.address,
        phone_number: this.phone,
       }

       localStorage.setItem('objCustomer',JSON.stringify(this.store.objCustomer));


      axios.post('http://localhost:8000/api/orders', {
        name_customer: this.name,
        email_customer: this.email,
        address_customer: this.address,
        phone_number: this.phone,
        total_price: this.store.totalPriceCart,
        order:order,

      }).then(response => {
        console.log(response.data.message);

      // Se l'ordine ha avuto successo  il carrello viene svuotato e eliminato dal localstorage
      // la viariabili booleane servono per gestire l'apertura della modale  OrderConfirmed e
      // la comparsa della rotta per la visualizzazione dell'ordine completo

       if(response.data.message === 'Ordine creato con successo.'){
        this.store.checkOutControll = true
        this.store.modalCheckOut = true 
        localStorage.removeItem('cartItems')
        this.store.cart = []
        console.log(localStorage);

        }
      }).catch(error => {
        console.log(error);
        this.store.checkOutControll = false
      })
      this.store.checkOutControll = false
    },
  },
  mounted(){

    // Fa persistere il dato relativo al totale del ordine
    if(localStorage.getItem('totalPrice')){

    const order = JSON.parse(localStorage.getItem('totalPrice'))
    this.price = order
    }

    // Gestione del fake pagamento
    let button = document.querySelector('#submit-button');

      braintree.dropin.create({
        authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
        selector: '#dropin-container'
        }, function (err, instance) {
          button.addEventListener('click', function () {
            instance.requestPaymentMethod(function (err, payload) {
          // Submit payload.nonce to your server
          // Card number: 4111 1111 1111 1111
          // Expiry: 09/24
        });
      })
    });

    //Recupera i dati dal localStorage per ripopolare il form 
    if(localStorage.getItem('objCustomer')){

      const customer = JSON.parse(localStorage.getItem('objCustomer'))
      this.name = customer.name
      this.email = customer.email
      this.address = customer.address
      this.phone = customer.phone
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 600px;
  margin: 0 auto;
  padding: 10px;
  background-color: #f7f7f7;
  border-radius: 5px;
}

.form h2 {
  margin-top: 0;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
#price{
    outline: none;
    border: 0;
    background-color: #f7f7f7 ;
    margin-left: 50px;
    max-width: 90px;
}
.flex{
    display: flex;
    align-items: center;
    
}
button[type="submit"] {
  display: block;
  margin-top: 20px;
  padding: 10px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

// Payment

.button {
  cursor: pointer;
  font-weight: 500;
  left: 3px;
  line-height: inherit;
  position: relative;
  text-decoration: none;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  // -webkit-appearance: none;
  // -moz-appearance: none;
  display: inline-block;
}

.button--small {
  padding: 10px 20px;
  font-size: 0.875rem;
}

.button--green {
  outline: none;
  background-color: #64d18a;
  border-color: #64d18a;
  color: white;
  transition: all 200ms ease;
}

.button--green:hover {
  background-color: #8bdda8;
  color: white;
}
</style>