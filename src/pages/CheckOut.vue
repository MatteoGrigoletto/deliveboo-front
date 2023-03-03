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
        this.store.checkOutControll = false
        this.store.modalCheckOut = false 
  }
}
</script>

<style lang="scss" scoped>

</style>