<template>
    <div class="form">
      <h2>Inserisci i tuoi dati</h2>
      <form @submit.prevent="submitForm">
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
          <input id="price" type="number" min="0" step=".01" v-model="store.totalPriceCart" readonly required>
          <span> €</span>
        </div>
        <button type="submit">Invia</button>
    </form>
</div>


  </template>

<script>
import {store} from '../store';
export default {
    name:'OrderCustomer',
  data() {
    return {
        store,
      name: '',
      email: '',
      address: '',
      phone: '',
      price: store.totalPriceCart,
    };
  },
  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        email: this.email,
        address: this.address,
        phone: this.phone,
        price: this.store.totalPriceCart,
      };
      console.log(formData);
    },
  },
  mounted(){
    this.price = this.store.totalPriceCart;
  }
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
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

</style>