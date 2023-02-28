<template>
    <div class="test">
   <div class="container-slide">
      <img class="slide" src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg" alt="" />
      <img class="slide" src="https://res.cloudinary.com/tf-lab/image/upload/restaurant/b2229bc3-266d-47c1-9643-aef1f3a9fada/9dc726ee-b85e-40e1-b21b-a8f653334df7.jpg" alt="" />
      <img class="slide" src="https://media-assets.lacucinaitaliana.it/photos/61fa593858315a939b1970b4/16:9/w_1280,c_limit/africa-experience-ristorante-venezia.jpg" alt="" />
      <img class="slide" src="https://assets.bonappetit.com/photos/60ef61ee1cd5ffae42c1d616/master/pass/Pollo-al-Carbon02.jpg" alt="" />
      <img class="slide" src="https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Homemade-Pepperoni-Pizza.png" alt="" />
      <img class="slide" src="https://img.freepik.com/premium-photo/variety-sushi-isolated-black-background-traditional-japanese-food_138656-976.jpg?w=1800" alt="" />
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

  height: 400px;
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