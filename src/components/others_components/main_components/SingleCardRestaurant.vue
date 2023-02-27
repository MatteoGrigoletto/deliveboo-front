<template>   
<!-- CARD DEL SIGNOLO RISTORANTE CON ROUTE RELATIVA AI SUOI PRODOTTI -->
  <div class="card__img">
    <img :src="restaurant.image_url === null ? restaurant.image : restaurant.image_url" alt="">
  </div>
  <h5>{{ restaurant.name }}</h5>
  <div class="card__info">  
    <div>
      <p>Città: {{ restaurant.city }}</p>
      <span>Indirizzo: {{ restaurant.street_address }}</span>
      <p>Nº prodotti: {{ restaurant.products.length }}</p>
      <button><router-link :to="{name: 'SingleRestaurant',params: { restaurant: restaurant.slug }}">Prodotti</router-link></button>
    </div>
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
    height: 60%;
    
    img{
    border-radius: 20px 20px 0px 0px;
    }
  }
.card__info{
padding-top: 5px;
text-align: center;
height: 40%;
border-radius:0px 0px 20px 20px;
background-image: var(--card-bg-color);
color: var(--card-text-color);

  p{
    margin: 0px;
  }
  button{
    margin-top: 10px;
  }

}
h5{
position: absolute;
top: 3%;
right: 50%;
transform: translate(50%);
background-image:var(--card-bg-color);
border-radius: 5px;
color: white;
padding: 0px 5px 5px 5px;
text-align: center;
}
</style>