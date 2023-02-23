<template>
  <main>
    <section class="filter-side">           
    </section>
    <section class="main-view">
        <router-view></router-view> 
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


  .filter-side{
    width: 20%;
  }
  .main-view{
    width: 80%;
  }
}

</style>
