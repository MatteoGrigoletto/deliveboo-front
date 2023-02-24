<template>
  <main>
    <section class="filter-side">           
    </section>
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
export default {
  name: "AppMain",
};
</script>

<style lang="scss" scoped>
main{
  margin: 10px;
  display: flex;
  overflow-x: hidden;

  .filter-side{
    width: 20%;
  }
  .main-view{
    width: 80%;
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

</style>
