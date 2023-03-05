<template>
  <div class="info-site">
      <div class="info-site__links">
        <h5>Scopri Deliveboo</h5>
        <ul>
          <li class="info-site__link"><a href="#">Investitori</a></li>
          <li class="info-site__link"><a href="#">Ristoranti</a></li>
          <li class="info-site__link"><a href="#">Pressroom</a></li>
          <li class="info-site__link"><a href="#">Programmazione</a></li>
          <li class="info-site__link"><a href="#">Design</a></li>
        </ul>
      </div>
      <div class="info-site__legal">
        <h5>Note legali</h5>
        <ul>
          <li class="info-site__link"><a href="#">Termini & Condizioni</a></li>
          <li class="info-site__link"><a href="#">Informativa sulla privacy</a></li>
          <li class="info-site__link"><a href="#">Cookies</a></li>
        </ul>
      </div>
      <div class="info-site__help">
        <h5>Aiuto</h5>
        <ul>
          <li class="info-site__link"><a href="#">FAQ</a></li>
          <li class="info-site__link"><a href="#">Contatti</a></li>
          <li class="info-site__link"><a href="#">Tipi di cucina</a></li>
        </ul>
      </div>
      <div class="info-site__app">
        <h5>Porta Deliveboo con te</h5>
        <ul>
          <li class="info-site__link"><a href="#">Investitori</a></li>
          <li class="info-site__link"><a href="#">Chi siamo</a></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
    name: 'InfoSection',
    data () {

        return {}
    }
}
</script>

<style lang="scss" scoped>

.info-site {
  padding-top: 100px;
  justify-content: center;

  > div {
    width: calc(100% / 4 - 6px);
    margin: 3px;
    background-color: black;
    padding: 20px;
    
    h5{
      color: var(--title-color);
    }
    ul {
      padding: 0px;
      
      li {
        margin: 25px 0px;
      }
    }
  }
}

//  media

@media screen and (max-width: 600px) {

  .info-site {
    flex-direction: column;
    text-align: center;
    align-items: center;
    
    > div {
      width: 70%;
      background-color: black;
      padding: 20px;
    }
  }
}

@media screen and (min-width: 601px) and (max-width: 960px) {

  .info-site {
    flex-direction: column;
    text-align: center;
    align-items: center;
    
    > div {
      width: 80%;
      background-color: black;
      padding: 20px;
    }
  }

}
@media screen and (min-width: 961px) and (max-width: 1300px) {

  .info-site {
    text-align: center;
 
    > div {
      width: 100%;
      background-color: black;
      padding: 20px;
    }
  }
}
@media screen and (min-width: 1301px) and (max-width: 1600px) {
}
</style>