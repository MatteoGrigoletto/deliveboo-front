<template>
<div class="container-kitchens">
    <div class="kitchen" v-for="item in store.Kitchens"> 
        
        <img src="https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Homemade-Pepperoni-Pizza.png" alt="">
        <span>{{ item }}</span>
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
    span{
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

@media screen and (max-width:600px){
    .container-kitchens{
        display: none;
  }
}
@media screen and (min-width:601px) and (max-width:1000px){
    .container-kitchens{
        flex-wrap: wrap;
    .kitchen{
        margin: 5px;
        width: calc(100% / 5 - 10px);
    }
  }
}
</style>