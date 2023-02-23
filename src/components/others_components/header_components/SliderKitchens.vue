<template>
<div class="box">
    <div class="kitchen" v-for="item in findKitchensRestaurants(store.restaurants)">
        {{ item.name }}
        <img :src="store.restaurants[0].image " alt="">
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
.box{
    padding: 20px 0px;
    display: flex;
    justify-content:space-around;
    .kitchen{
        width: 10%;
        height: 100px;
        background-color: blanchedalmond;
        
    }

}

@media screen and (max-width:800px){
.box{
    flex-wrap: wrap;
    .kitchen{
        margin: 5px;
        width: calc(100% / 5 - 10px);
    }
}
}
</style>