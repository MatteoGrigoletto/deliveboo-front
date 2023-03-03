<template>   
<!-- CARD DEL SIGNOLO RISTORANTE CON ROUTE RELATIVA AI SUOI PRODOTTI -->
  <div class="card__img">
    <img :src="restaurant.image_url === null ? restaurant.image : restaurant.image_url" alt="">
  </div>
  <div class="card__info">   
    <div class="card__info__text">
      <h5>{{ restaurant.name }}</h5>
      <span>{{ restaurant.street_address }}, {{ restaurant.city }}</span>
      <div>
        <span class="badge text-bg-light fs-7 rounded-pill" v-for="kitchen in filterKitchens(restaurant.kitchens)">{{kitchen}}</span>
      </div>
    </div> 
    <div class="card__info__btn">
     <router-link :to="{name: 'SingleRestaurant',params: { restaurant: restaurant.slug }}"><button>Prodotti</button></router-link>
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
  justify-content: space-between;
  padding: 10px;
  height: 40%;
  border-radius:0px 0px 20px 20px;
  background-image: var(--card-bg-color);
  color: var(--card-text-color);

  .card__info__text{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h5{
      font-weight: bold;
    }
    
    > *{
      margin: 1px 10px;
      
    }
  }
  .card__info__btn{
    display: flex;
    align-items: center;
    justify-content: center;  

    button{
      margin-right: 10px;
      padding: 2px;

      a{
        font-size: 0.8rem;
      }
    } 
  }
}
.badge{
  padding: 4px;
  margin: 0px px;
  border: 1px solid black;
  }

// media

@media screen and (max-width:600px){

  .card__info__text{
    > *{
      margin: 2px;
      font-size: 1.1rem;
    }
  }

}
@media screen and (min-width:601px) and (max-width:960px){
  
  .card__info__text{

h5{
  font-weight: bold;
  font-size: 1.1rem;
}

> *{
  margin: 1px 10px;
  font-size: 0.8rem;    
}
}
.card__info__btn{

button{
  font-size: 0.9rem;
} 
}
  
}
@media screen and (min-width:961px) and (max-width: 1300px){

  .card__info__text{

    h5{
      font-weight: bold;
      font-size: 1rem;
    }
    
    > *{
      font-size: 0.8rem;    
    }
  }

 
}
@media screen and (min-width:1301px) and (max-width: 1600px){

  .card__info__text{

h5{
  font-weight: bold;
  font-size: 1rem;
}

}


}
</style>