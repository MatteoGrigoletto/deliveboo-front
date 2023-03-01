<template>
  <footer>
    <section class="section-partner">
      <div class="info-partner">
        <div class="info-partner__single">
          <div class="info-partner__single__img">
            <img src="../assets/image-partner1.jpg" alt="" />
          </div>
          <div class="info-partner__single__info">
            <button>Lavora con noi</button>
          </div>
        </div>
        <div class="info-partner__single">
          <div class="info-partner__single__img">
            <img src="../assets/image-partner1.jpg" alt="" />
          </div>
          <div class="info-partner__single__info">
            <button>Entra nella nostra community</button>
          </div>
        </div>
      </div>
    </section>
    <section class="section-site">
      <div class="info-site">
        <div class="info-site__links">
          <h5>Scopri Deliveboo</h5>
          <ul>
            <li class="info-site__link"><a href="">Investitori</a></li>
            <li class="info-site__link"><a href="">Chi siamo</a></li>
            <li class="info-site__link"><a href="">Ristoranti</a></li>
            <li class="info-site__link"><a href="">Pressroom</a></li>
            <li class="info-site__link"><a href="">Programmazione</a></li>
            <li class="info-site__link"><a href="">Design</a></li>
          </ul>
        </div>
        <div class="info-site__legal">
          <h5>Note legali</h5>
          <ul>
            <li class="info-site__link"><a href="">Termini & Condizioni</a></li>
            <li class="info-site__link">
              <a href="">Informativa sulla privacy</a>
            </li>
            <li class="info-site__link"><a href="">Cookies</a></li>
          </ul>
        </div>
        <div class="info-site__help">
          <h5>Aiuto</h5>
          <ul>
            <li class="info-site__link"><a href="">FAQ</a></li>
            <li class="info-site__link"><a href="">Contatti</a></li>
            <li class="info-site__link"><a href="">Tipi di cucina</a></li>
          </ul>
        </div>
        <div class="info-site__app">
          <h5>Porta Deliveboo con te</h5>
          <ul>
            <li class="info-site__link"><a href="">Investitori</a></li>
            <li class="info-site__link"><a href="">Chi siamo</a></li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-social">
      <div class="info-social">
        <div class="info-social__app">
          <ul>
            <li><a href="https://www.facebook.com/DeliverooIT"><i class="fa-brands fa-facebook fa-lg"></i></a></li>
            <li><a href="https://twitter.com/deliveroo_italy"><i class="fa-brands fa-twitter fa-lg"></i></a></li>
            <li><a href="https://www.instagram.com/deliveroo_italy/"><i class="fa-brands fa-instagram fa-lg"></i></a></li>
          </ul>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--footer-bg-color);
  color: white;

  section{

    >div{
      width: 70%;
      margin: auto;
      display: flex;
    } 
  }


  // Info Partner
  .section-partner{
    background-color: rgb(94, 92, 92);
    .info-partner {  
      justify-content: center;
      .info-partner__single {
        width: 500px;
        margin: 100px 50px;
        position: relative;
        border: 2px solid white;
        .info-partner__single__info {
          position: absolute;
          bottom: 2%;
          left: 2%;
        }
      }
    }
  }
    // Links

  .section-site{
    .info-site {
      margin-top: 100px;
      justify-content: center;
      
      > div {
        width: calc(100% / 4 - 6px);
        margin: 3px;
        background-color: black;
        padding: 20px;
        
        ul {
          padding: 0px;
          
          li {
            margin: 25px 0px;
          }
        }
      }
    }
  }
}
// Social

  .section-social{
    .info-social__app{
      
      ul{
        display: flex;
        justify-content: flex-start;
        
        li{
          margin:10px 20px 10px 20px ;
          
        }
      }
    }
  }
    
</style>
