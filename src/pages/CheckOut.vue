<template>
    <div>
ordine
<router-link :to="{name: 'HomePage'}">Ordine</router-link> 
    </div>
</template>

<script>
export default {
    name:'CheckOut',
    data () {
        return {}
    },
    mounted(){
        console.log(localStorage);
  }
}
</script>

<style lang="scss" scoped>

</style>