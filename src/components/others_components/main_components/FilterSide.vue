<template>
  <div class="side">
    <div>
      <form @submit.prevent="submitForm">
        <label v-for="(kitchen, index) in store.Kitchens" :key="index">
          <input
            type="checkbox"
            :value="kitchen.name"
            v-model="store.checkbox"
          />
          <span
            @click="toggleActive(index)"
            :class="{ active: activeIndexes.includes(index) }"
            >{{ kitchen.name }}</span
          >
          <img @click="toggleActive(index)" :src="kitchen.image" alt="" />
        </label>
      </form>
    </div>
  </div>
</template>

<script>
import { store } from "../../../store";

export default {
  name: "FilterSide",
  data() {
    return {
      store,
      activeIndexes: [], // Array per tenere traccia degli indici dei checkbox attivi
    };
  },
  methods: {
    resetRestaurant() {
      store.inputKitchens = "";
      store.input = "";
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
    },
  },
};
</script>

<style lang="scss" scoped>

.side {
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 30px;
  background-color: var(--side-bg-color);
  color: var(--side-text-color);
  overflow-y: scroll;

  div {
    width: 100%;

    label {
      display: block;
      margin-bottom: 25px;
      font-size: 1.1rem;
      font-weight: bold;
      height: 60px;
      position: relative;
      border-radius: 5px;
    }
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;
      text-align: center;
      transform: translate(-50%);
      background-color: rgba(0, 0, 0, 0.7);
      padding: 0px 5px;
      border-radius: 10px;
    }

    /* Aggiungi una classe CSS per evidenziare il testo del checkbox selezionato */
    .active {
      color: var(--hover-check-color);
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
      border-radius: 10px;
    }
  }
}
/* nasconde la scrollbar in Chrome, Safari e Opera */
.side::-webkit-scrollbar {
  display: none;
}

/* nasconde la scrollbar in Firefox */
.side {
  scrollbar-width: none;
}

/* rimuove la scrollbar di Internet Explorer */
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .side::-ms-scrollbar {
    display: none;
  }
}


@media screen and (max-width: 600px) {

  .side {
    height: 250px;

  div {
    margin: auto;
    form{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    label {
      display: block;
      font-size: 0.5rem;
      width: calc(100% / 5 - 5px);
      height: 80px;
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
      font-size: 0.7rem;
    }

    /* Aggiungi una classe CSS per evidenziare il testo del checkbox selezionato */
  

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
}


@media screen and (min-width: 601px) and (max-width: 960px) {
  .side {
    height: 250px;

  div {
    margin: auto;
    form{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    label {
      display: block;
      font-size: 0.5rem;
      width: calc(100% / 5 - 5px);
      height: 80px;
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

}
@media screen and (min-width: 961px) and (max-width: 1300px) {

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
      font-size: 0.7rem;
    }

}
@media screen and (min-width: 1301px) and (max-width: 1600px) {
}

</style>
