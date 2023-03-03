<template>
    <div>
ordine
<router-link :to="{name: 'HomePage'}">Ordine</router-link> 
    </div>
</template>
<script>
import {store} from '../store';
export default {
    name:'CheckOut',
    data () {
        return {
        store}
    },
    mounted(){
        // Riporto a false le variabili relative alla comparsa della modale
        // ordine confermato e alla rotta dell'ordine specifico
        this.store.modalCheckOut = false 
  }
}
</script>

<style lang="scss" scoped>

</style>