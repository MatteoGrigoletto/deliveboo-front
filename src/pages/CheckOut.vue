<template>
  <section>
    <div class="product-table">
      <div class="table-header">
        <div class="cell">Prodotto</div>
        <div class="cell">Quantità</div>
        <div class="cell">Prezzo</div>
        <div class="cell">Ristorante</div>
      </div>
      <div v-for="product in store.checkOutProduct" class="table-row">
        <div class="cell">{{ product.name }}</div>
        <div class="cell">{{ product.quantity }}</div>
        <div class="cell">{{ product.price }}€</div>
        <div class="cell">{{ store.restaurants.find(elm => elm.user_id === product.restaurant_id).name }}</div>
      </div>
      <div class="table-footer">
        <div class="cell"></div>
        <div class="cell"></div>
        <div class="cell">Totale: {{ store.checkOutTotalPriceProduct }}€</div>
        <div class="cell"></div>
      </div>
    </div>
    <div>
      <router-link :to="{name: 'HomePage'}"> <button class="btn-check-out">Vuoi ordinare qualcos'atro? </button></router-link> 
    </div>
  </section>
</template>
<script>
import {store} from '../store';
export default {
    name:'CheckOut',
    data () {
        return {
        store
      }
    },
    mounted(){
        // Riporto a false la variabile relativa alla comparsa della modale
        // quando l'ordine viene confermato
        this.store.modalCheckOut = false 
  }
}
</script>
<style lang="scss" scoped>
section{
  height: 100vh;
}
.product-table {
  margin-top: 2rem;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  overflow: hidden;
  font-size: 1.2rem;
  margin-bottom: 20px;

  .table-header, .table-footer {
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    font-weight: bold;

    .cell {
      width: calc(25% - 0.5rem);
    }
  }

  .table-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;

    &:nth-child(even) {
      background-color: #f9f9f9;
    }

    .cell {
      width: calc(25% - 0.5rem);
    }
  }
}
.btn-check-out{
  background-color: var(--order-btn-bg-color);
  color: var(--order-btn-text-color);

  &:hover{
    background-color: var(--order-btn-hover-color);
    color: var(--order-btn-hover-text);
    }
}
</style>