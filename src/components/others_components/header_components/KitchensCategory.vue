<template>
    <!-- COMPONENTE CHE GENERA DELLE CATEGORIE PER NAVIGARE VELOCEMENTE TRA I RISTORANTI -->
<div class="container-kitchens">
    <div class="kitchen" v-for="item in store.Kitchens"> 
        <img :src="item.image" alt="">
        <button> <router-link :to="{name: 'HomePage'}" @click="change(item.name)">{{item.name}}</router-link> </button>
    </div>
</div>
</template>

<script> 
import {store} from '../../../store'
export default {
    name:'KitchensCateogry',
    data () {
        return {
            store,
        }
    },
    methods:{
        // METODO PER SVUORATE I CAMPI DI RICERCA
        change(str){
            this.store.input = ''
            this.store.inputKitchens = str
        }
        }
    }

</script>

<style lang="scss" scoped>
.container-kitchens{
    padding: 20px 0px;
    display: flex;
    justify-content:space-around;
    .kitchen{
        width: 10%;
        height: 80px;
        position: relative;
        margin: 10px;
        border-radius: 5%;
        border: 1px solid white;
        
    }
    button{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-weight: bold ;
        border-radius: 10px;
        padding: 4px 8px;
    }

}

@media screen and (max-width:1300px){
    .container-kitchens{
        display: none;
  }
}

</style>