<template>   
<!-- CARD DEL SIGNOLO RISTORANTE CON ROUTE RELATIVA AI SUOI PRODOTTI -->
  <div class="card__img">
    <img :src="store.controllImg(restaurant)" alt="">
  </div>
  <div class="card__info">   
    <div class="card__info__text">
      <h5>{{ restaurant.name }}</h5>
      <span>{{ restaurant.street_address }},<br> 
        {{ restaurant.city }}
      </span>
    </div> 
    <div class="card__info__btn">
      <router-link :to="{name: 'SingleRestaurant',params: { restaurant: restaurant.slug }}"><button class="btn-blue">Prodotti</button></router-link>
    </div>
    <div class="card__info__badge">
      <span class="badge" v-for="kitchen in filterKitchens(restaurant.kitchens)">{{kitchen}}</span>
    </div>
  </div>

</template>

<script>
import {store} from '.././../../store';
export default {
    name: 'SingleCardRestaurant',
    data () {
        
        return {
          store,
        }
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
    
  }
.card__info{
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  height: 40%;
  background-color: var(--side-bg-color);
  color: black;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  .card__info__text{
    display: flex;
    flex-direction: column;
    width: 70%;
    font-size: 1rem;

    h5{
      font-weight: bold;
      font-size: 1.3rem;
    }
  }
  .card__info__btn{
    display: flex;
    align-items: center;
    justify-content: center;  
    width: 30%;

    button{
      padding: 10px;
      border-radius: 0px;
    } 
  }
  .card__info__badge{
    position: absolute;
    top: 0%;
    right: 1%;
    display: flex;
    flex-direction: column;

    .badge{
      border-radius: 0px;
      text-align: center;
      padding: 5px 10px;
      margin-top: 4px;
      background-color: rgba(69, 207, 34, 0.8);
      color:white;
      border: none;
    }
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
      font-size: 1rem;
      }
    }
}
</style>