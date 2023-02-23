<template>
<div class="container-kitchens">
    <div class="kitchen" v-for="item in findKitchensRestaurants(store.restaurants)"> 
        <img :src="store.restaurants[0].image " alt="">
        <span>{{ item.name }}</span>
        <!-- <router-link :to="{name: 'RestaurantCategory',params: { category: item.name }}">Prodotti</router-link> -->
    </div>
</div>
</template>

<script> 
import {store} from '../../../store'
export default {
    name:'SliderKitchens',
    data () {
        return {
            store,
            Kitchens: []
        }
    },
    methods:{
        findKitchensRestaurants(arr){
        let kitchens = arr.flatMap(elm => elm.kitchens)
        return kitchens
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
        height: 100px;
        position: relative;
    }
    span{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: white;
        font-weight: bold ;
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