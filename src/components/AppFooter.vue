<template>
  <footer  v-if="$route.path === '/'">
    <section class="section-partner">
     <PartnerSection/>
    </section>
    <section class="section-site">
      <InfoSection/>
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
import PartnerSection from './others_components/footer_components/PartnerSection.vue';
import InfoSection from './others_components/footer_components/InfoSection.vue';
export default {
  name: "AppFooter",
  data(){
    return {
      
    }
  },
  components: {
    PartnerSection,
    InfoSection,
  }
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
  .section-partner{
    background-color: rgb(94, 92, 92);
  }
  
  .section-social{
    .info-social__app{
      width: 60%;  
      ul{
        display: flex;
        justify-content: flex-start;
        
        li{
          margin:10px 20px 10px 20px ;         
        }
      }
    }
  }
}
  
//  media

@media screen and (max-width: 600px) {
  }

@media screen and (min-width: 601px) and (max-width: 960px) {
}
@media screen and (min-width: 961px) and (max-width: 1300px) {
}
@media screen and (min-width: 1301px) and (max-width: 1600px) {
}
    
</style>
