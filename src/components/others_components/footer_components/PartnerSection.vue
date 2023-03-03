<template>
    <div class="info-partner">
        <div class="info-partner__single">
          <div class="info-partner__single__img">
            <img src="../../../assets/Deliveroo-Logo-final.png" alt="" />
          </div>
          <div class="info-partner__single__info">
            <button>Lavora con noi</button>
          </div>
        </div>
        <div class="info-partner__single">
          <div class="info-partner__single__img">
            <img src="../../../assets/community.jpg" alt="" />
          </div>
          <div class="info-partner__single__info">
            <button>Entra nella nostra community</button>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name: 'PartnerSection',
    data () {
        
        return {}
    }
}
</script>

<style lang="scss" scoped>

.info-partner {  
  justify-content: center;
  .info-partner__single {
    width: 40%;
    margin: 100px 50px;
    border: 2px solid white;
    position: relative;
    .info-partner__single__img{
      height: 100%;
      background-color: aliceblue;
      border: 2px solid black;
    }
    .info-partner__single__info {
      position: absolute;
      bottom: 2%;
      left: 2%;
      width: 50%;
    }
  }
}
@media screen and (max-width: 600px) {

  .info-partner{
    width: 100%;
    flex-wrap: wrap;
    .info-partner__single{
      width: 100%;
      
      &__info{
        font-size: 0.7rem;
        width: 100%;
      }
    }
  }
}

@media screen and (min-width: 601px) and (max-width: 960px) {
  .info-partner{
    width: 100%;
    
    .info-partner__single{
      width: 100%;
      
      &__info{
        font-size: 0.7rem;
        width: 100% !important;
      }
    }
  }
}
@media screen and (min-width: 961px) and (max-width: 1300px) {
  .info-partner{
    width: 90%;
    .info-partner__single{
      width: 100%;
      
      &__info{
        font-size: 0.7rem;
        width: 100%;
      }
    }
  }
}
@media screen and (min-width: 1301px) and (max-width: 1600px) {
  .info-partner{
    width: 80%;
    .info-partner__single{
      width: 100%;
      
      &__info{
        font-size: 0.7rem;
        width: 100%;
      }
    }
  }
}
</style>