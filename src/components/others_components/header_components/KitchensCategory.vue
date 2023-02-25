<template>
<div class="container-kitchens">
    <div class="kitchen" v-for="item in store.Kitchens"> 
        <img src="https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Homemade-Pepperoni-Pizza.png" alt="">
        <button v-on:click="change(item)">{{item}}</button>
    </div>
</div>
<!-- <router-link :to="{name: 'RestaurantCategory',params: { category: item.name }}">Prodotti</router-link> -->
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
        color: white;
        font-weight: bold ;
        background-color: var(--text-bg-color);
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