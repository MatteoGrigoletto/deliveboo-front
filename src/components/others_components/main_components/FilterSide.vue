<template>
  <div class="side">
    <button>
      <router-link :to="{ name: 'HomePage' }" @click="resetRestaurant()">
        Torna ai ristoranti
      </router-link>
    </button>
    <div>
      <form @submit.prevent="submitForm">
        <label v-for="(kitchen, index) in store.Kitchens" :key="index">
          <input type="checkbox" :value="kitchen.name" v-model="store.checkbox" >
          <span  :class="{ active: activeIndexes.includes(index) }">{{ kitchen.name }}</span>
          <img @click="toggleActive(index)" :src="kitchen.image" alt="">
        </label>
      </form>
    </div>
  </div>
</template>

<script>
import { store } from '../../../store';

export default {
  name: 'FilterSide',
  data() {
    return {
      store,
      activeIndexes: [] // Array per tenere traccia degli indici dei checkbox attivi
    };
  },
  methods: {
    resetRestaurant() {
      store.inputKitchens = '';
      store.input = '';
    },
    submitForm() {
      console.log(this.store.checkbox);
    },
    toggleActive(index) {
      // Verifica se l'indice del checkbox è già presente nell'array activeIndexes
      if (this.activeIndexes.includes(index)) {
        // Rimuovi l'indice dall'array activeIndexes
        const i = this.activeIndexes.indexOf(index);
        this.activeIndexes.splice(i, 1);
      } else {
        // Aggiungi l'indice all'array activeIndexes
        this.activeIndexes.push(index);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.side {
  width: 100%;
  height: calc(100vh - 200px);
  border-radius: 5px 5px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 30px;
  background-color: var(--side-bg-color);
  color: var(--side-text-color);

  div {
    width: 100%;

    label {
      display: block;
      margin-bottom: 10px;
      font-size: 1.1rem;
      font-weight: bold;
      height: 60px;
      position: relative;
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;
      text-align: center;
      transform: translate(-50%);
      background-color: rgb(16, 16, 16, 0.7);
      padding: 0px 5px;
      border-radius: 10px;
    }

    /* Aggiungi una classe CSS per evidenziare il testo del checkbox selezionato */
    .active {
      color: rgb(250, 136, 28);
    }

    input[type="checkbox"] {
      position: absolute;
      top: 50%;
      left: 0%;
      z-index: 2;
      transform: translate(50%, 50%);
      display: none;
    }
    img {
      position: absolute;
      top: 15%;
      left: 0%;
      object-fit: cover;
    }
  }
}
</style>