<template>
    <div class="my-container">
   <div class="container-slide">
      <img class="slide" src="../../../assets/chips-slide.webp" alt="" />
      <img class="slide" src="../../../assets/photo-1623341214825-9f4f963727da.jfif" alt="" />
      <img class="slide" src="../../../assets/Homemade-Pepperoni-Pizza.png" alt="" />
      <img class="slide" src="../../../assets/plant-based-food-mc-220323-02-273c7b.jpg" alt="" />
      <img class="slide" src="../../../assets/Pollo-al-Carbon02.webp" alt="" />
      <img class="slide" src="../../../assets/9dc726ee-b85e-40e1-b21b-a8f653334df7.jpg" alt="" />
    </div>
</div>
</template>

<script>
export default {
    name:'SliderRestaurant',
    data () {
        return {
    currentSlide : 0,          
        }
    },
    methods:{

        sliderMove(slide) {
            document.querySelectorAll('.slide').forEach(
    (sli, index) =>
      (sli.style.transform = `translateX(${100 * (index - slide)}%)`)
  );
},
// logica cambio slide

prevSlide() {
  if (this.currentSlide === 0) {
    this.currentSlide = document.querySelectorAll('.slide').length - 1;
  } else {
    this.currentSlide--;
  }
  this.sliderMove(this.currentSlide);

},

},
mounted(){
    this.autoPlay = setInterval(this.prevSlide,5000)
}

}
</script>

<style lang="scss" scoped>

.container-slide {
  height: 700px;
}

img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  transition: transform 1s;
  object-fit: cover;
}

</style>