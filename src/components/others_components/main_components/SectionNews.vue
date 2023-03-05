<template>
    <section class="main-section__top">
      <div class="container-70">
        <div class="main-section__top__title">
          <h2>Novita' dalla nostra cucina</h2>
        </div>
        <div class="main-section__top__info">
          <div class="main-section__top__info__img">
            <img src="../../../assets/sushi-section.png" alt="">
          </div>
          <div class="main-section__top__info__text">
            <h3>DeliveBoo for Work</h3>
            <p>Clienti o colleghi affamati? il nostro team Corporate ti può aiutare.</p>
            <button class="btn-blue">Contattaci</button>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name:'SectionNews',
    data () {
        
        return {}
    }
}
</script>

<style lang="scss" scoped>

.main-section__top{
  display: flex;
  flex-direction: column;
  align-items: center;
  color:rgb(0, 0, 0);
  background-color: var(--section-news-bg);
  padding: 100px 0px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  &__title{

    h2{
      font-weight: bold;
      padding: 20px 0px;
    }
  }

  &__info{
    display: flex;
    justify-content: flex-start;
    background-color: #ffffff;
    color: black;

    &__img{
      width: 800px;
      
    }

    &__text{
      padding: 20px;
      margin-left: 50px;

      & > *{
        margin-top: 10px;
      }
    }
  }
}
@media screen and (max-width: 960px) {

    .container-70 {
        width: 80%;
    }
    .main-section__top__info__img{
      display: none;
    }
}

</style>