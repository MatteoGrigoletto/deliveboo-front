<template>   
<!-- CARD DEL SIGNOLO RISTORANTE CON ROUTE RELATIVA AI SUOI PRODOTTI -->
  <div class="card__img">
    <img :src="restaurant.image_url === null ? restaurant.image : restaurant.image_url" alt="">
  </div>
  <div class="card__info">   
    <div class="card__info__text">
      <h5>{{ restaurant.name }}</h5>
      <span>{{ restaurant.street_address }},<br> 
        {{ restaurant.city }}
      </span>
    </div> 
    <div class="card__info__btn">
      <router-link :to="{name: 'SingleRestaurant',params: { restaurant: restaurant.slug }}"><button>Prodotti</button></router-link>
    </div>
    <div class="card__info__badge">
      <span class="badge" v-for="kitchen in filterKitchens(restaurant.kitchens)">{{kitchen}}</span>
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
    border-radius: 10px 10px 0px 0px;
    }
  }
.card__info{
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  height: 40%;
  border-radius:0px 0px 20px 20px;
  background-image: var(--card-bg-color);
  color: var(--card-text-color);

  .card__info__text{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    font-size: 1.2rem;

    h5{
      font-weight: bold;
      font-size: 1.4rem;
    }
  }
  .card__info__btn{
    display: flex;
    align-items: center;
    justify-content: center;  
    width: 30%;

    button{
      padding: 10px;
    } 
  }
  .card__info__badge{
    width: 100%;
    display: flex;
    align-items: end;
  }
}

// media

@media screen and (max-width:600px){

  .card__info__text{
    h5{
      font-size: 2rem;
    }
    > *{
      font-size: 1.1rem;
    }
  }

}
@media screen and (min-width:601px) and (max-width:960px){
  
  .card__info__text{
    > *{
      font-size: 0.9rem;    
    }
  }
  
}
@media screen and (min-width:961px) and (max-width: 1300px){

  .card__info__text{
    h5{
      font-size: 0.8rem;
    }
  }

 
}
@media screen and (min-width:1301px) and (max-width: 1600px){

  .card__info__text{

    h5{
      font-size: 1.2rem;
      }
    }
}
</style>