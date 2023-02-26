<template>
  <main>
    <section class="filter-side">
      <FilterSide></FilterSide>         
    </section>
    <!-- TRANSIZIONE ANIMATA QUANDO SI CAMBIA ROTTA -->
    <section class="main-view">
        <router-view v-slot="{Component}">
          <transition name ="route" mode="out-in"> 
            <component :is="Component"></component>
          </transition>
        </router-view> 
    </section>
  </main>
  </template>

<script>
import FilterSide from './others_components/main_components/FilterSide.vue';
export default {
  name: "AppMain",
  data(){
    return{
    }
  },
  components:{
    FilterSide,
}
};
</script>

<style lang="scss" scoped>
main{
  margin: 10px;
  display: flex;
  overflow-x: hidden;
  justify-content: center;

  .filter-side{
    width: 15%;
  }
  .main-view{
    width: 85%;
    position: relative;
    overflow-y: scroll;
  }
}

// transition route page

.route-enter-from{
  opacity:0;
  transform: translateX(200px);
}
.route-enter-active{
  transition: all 1s ease-out;
}
.route.leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
.route-leave-active{
  transition: all 0.2s ease-in;
}
// media

@media screen and (max-width:600px){
  .filter-side{
    display: none;
  }
  .main-view{
    overflow-y:none;
  }
}
@media screen and (min-width:601px) and (max-width:960px){
  
}
@media screen and (min-width:961px) and (max-width: 1300px){
  
}
@media screen and (min-width:1301px) and (max-width: 1600px){

}

</style>
