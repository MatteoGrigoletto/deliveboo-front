<template>   
    <div class="card__img">
      <img :src="restaurant.image_url === null ? restaurant.image : restaurant.image_url" alt="">
    </div>
    <div class="card__info">
      <h2>{{ restaurant.name }}</h2>
      <p>{{ restaurant.city }}</p>
        <router-link :to="{name: 'SingleRestaurant',params: { restaurant: restaurant.slug }}">Prodotti</router-link>  
    </div>
</template>

<script>

export default {
    name: 'SingleCardRestaurant',
    data () {
        
        return {}
    },
    props:{
        restaurant: Object,
    }
}
</script>

<style lang="scss" scoped>

</style>