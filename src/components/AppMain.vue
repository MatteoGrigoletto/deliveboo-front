<template>
  <main>
    <section v-if="$route.path === '/'" class="filter-side">
      <FilterSide></FilterSide>
    </section>
    <!-- TRANSIZIONE ANIMATA QUANDO SI CAMBIA ROTTA -->
    <section class="main-view">
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </section>
  </main>
</template>

<script>
import FilterSide from "./others_components/main_components/FilterSide.vue";
export default {
  name: "AppMain",
  data() {
    return {};
  },
  components: {
    FilterSide,
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: center;
  background-color: var(--main-bg-color);
 

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
  main {
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
  main {
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
