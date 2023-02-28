<template>   
<!-- CARD DEL SIGNOLO RISTORANTE CON ROUTE RELATIVA AI SUOI PRODOTTI -->
  <div class="card__img">
    <img :src="restaurant.image_url === null ? restaurant.image : restaurant.image_url" alt="">
  </div>
  <h5>{{ restaurant.name }}</h5>
  <div class="card__info">   
    <div class="card__info__text">
      <p>{{ restaurant.street_address }}</p>
      <p>{{ restaurant.city }}</p>
      <span class="badge text-bg-light fs-7 rounded-pill" v-for="kitchen in filterKitchens(restaurant.kitchens)">{{kitchen}}</span>
    </div> 
    <div class="card__info__btn">
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
    },
    methods:{  
      filterKitchens(restaurant){
       let kitchen = restaurant.map(kitchen => kitchen.name)
        return kitchen  
    }
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 5px;
  height: 40%;
  border-radius:0px 0px 20px 20px;
  background-image: var(--card-bg-color);
  color: var(--card-text-color);

  .card__info__text{
    > *{
      margin: 2px;
    }
  }
  .card__info__btn{
    text-align: center;
    margin-bottom: 5px;
  }

}
h5{
position: absolute;
top: 3%;
right: 50%;
transform: translate(50%);
background-color:var(--header-bg-color);
border-radius: 5px;
color: white;
padding: 0px 5px 5px 5px;
text-align: center;
}
</style>