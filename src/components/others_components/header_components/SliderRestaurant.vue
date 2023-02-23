<template>
    <div class="test">
   <div class="container-slide">
      <img class="slide" src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg" alt="" />
      <img class="slide" src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" alt="" />
      <img class="slide" src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg" alt="" />
      <img class="slide" src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" alt="" />
      <img class="slide" src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg" alt="" />
      <img class="slide" src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" alt="" />
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
.test {
  width: 0vw;
}
.container-slide {
  width: 100vw;
  height: 200px;
  position: relative;
  overflow: hidden;
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