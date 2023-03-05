<template>
  <main>
    <SectionNews v-if="$route.path === '/'"></SectionNews>
    <section class="main-section__middle">
      <div class="main-section__middle__restaurant">
        <div v-if="$route.path === '/'" class="filter-side">
          <FilterSide></FilterSide>
        </div>
        <!-- TRANSIZIONE ANIMATA QUANDO SI CAMBIA ROTTA -->
        <div class="main-view">
          <router-view v-slot="{ Component }">
            <transition name="route" mode="out-in">
              <component :is="Component"></component>
            </transition>
          </router-view>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SectionNews from './others_components/main_components/SectionNews.vue';
import FilterSide from "./others_components/main_components/FilterSide.vue";
export default {
  name: "AppMain",
  data() {
    return {};
  },
  components: {
    FilterSide,
    SectionNews,
  },
};
</script>

<style lang="scss" scoped>

.main-section__middle{
  display: flex;
  justify-content: center;
  background-color: var(--main-section-bg-color);
}

.main-section__middle__restaurant {
  display: flex;
  justify-content: center;
  background-color: var(--main-bg-color);
  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.1);
  width: 100%;

  .filter-side {
    width: 15%;
  }
  .main-view {
    width: 85%;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    margin: 20px 20px 0px 20px;
   
  }

  /* nasconde la scrollbar in Chrome, Safari e Opera */
  .main-view::-webkit-scrollbar {
    display: none;
  }

  /* nasconde la scrollbar in Firefox */
  .main-view {
    scrollbar-width: none;
  }

  /* rimuove la scrollbar di Internet Explorer */
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .main-view::-ms-scrollbar {
      display: none;
    }
  }
}

// transition route page

.route-enter-from {
  opacity: 0;
  transform: translateX(200px);
}
.route-enter-active {
  transition: all 1s ease-out;
}
.route.leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
.route-leave-active {
  transition: all 0.2s ease-in;
}
// media

@media screen and (max-width: 600px) {
  .main-section__middle__restaurant{
  display: flex;
  flex-direction: column;
  background-color: var(--main-bg-color);

  .filter-side {
    width: 100%;
    box-shadow: 0px 0px 10px 10px black;
  }
  .main-view {
    
    height: 500px;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    margin: auto;
    margin-top: 20px;
  }
}
}
@media screen and (min-width: 601px) and (max-width: 960px) {
  .main-section__middle__restaurant{
  display: flex;
  flex-direction: column;
  background-color: var(--main-bg-color);

  .filter-side {
    width: 100%;
    box-shadow: 0px 0px 10px 10px black;
  }
  .main-view {
    
    height: 1000px;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    margin: auto;
    margin-top: 20px;
  }
}

}
@media screen and (min-width: 961px) and (max-width: 1300px) {

}
@media screen and (min-width: 1301px) and (max-width: 1600px) {
  .main-view{
    margin: 20px 30px 0px 30px;
  }
}
</style>
