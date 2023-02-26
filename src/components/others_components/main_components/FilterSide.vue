<template>
    <div class="side">
      <!-- FUNZIONE BASE DELLA SIDE -->
      <button> <router-link :to="{name: 'HomePage'}" @click="resetRestaurant()">Prodotti</router-link> </button>     
      <div>
          <form @submit.prevent="submitForm">
          <label v-for="(option, index) in store.Kitchens" :key="index">
              <input type="checkbox" :value="option" v-model="store.checkbox">
              {{ option }}
          </label>
          </form>
      </div>
    </div>
</template>

<script>
import { store } from '../../../store';

export default {
    name: 'FilterSide',
    data () {
        return {
        store,
        }
    },
    methods:{
        resetRestaurant(){
            store.inputKitchens= ''
            store.input = ''
        },
        submitForm() {
      console.log(this.store.checkbox)
    }
    }
}
</script>

<style lang="scss" scoped>
.side{
    width: 100%;
    height: calc(100vh - 200px);
    background-color: rgb(206, 214, 214);
    border-radius: 5px;
}
</style>