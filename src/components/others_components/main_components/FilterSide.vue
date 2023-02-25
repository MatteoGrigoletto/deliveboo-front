<template>
    <div class="side">
        <button @click="resetRestaurant()">Vedi tutti i ristoranti</button>
    </div>
</template>

<script>
import { store } from '../../../store';

export default {
    name: 'FilterSide',
    data () {
        return {
        
        }
    },
    methods:{
        resetRestaurant(){
            store.inputKitchens= ''
            store.input = ''
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