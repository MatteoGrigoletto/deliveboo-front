<template>   
<!-- CARD DEL SIGNOLO RISTORANTE CON ROUTE RELATIVA AI SUOI PRODOTTI -->
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
.card__img{
    height: 70%;
  }
.card__info{
padding-top: 5px;
text-align: center;


h2{
position: absolute;
top: 3%;
right: 50%;
transform: translate(50%);
background-color:rgba(138, 129, 129, 0.5);
border-radius: 5px;
color: white;
padding: 0px 5px 5px 5px;
text-align: center;
}

a{
padding: 5px 10px;
border-radius: 5px;
text-decoration: none;
background-color: rgb(160, 166, 166);
color: black;
}
}
</style>