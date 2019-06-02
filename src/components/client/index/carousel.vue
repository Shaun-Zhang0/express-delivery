
<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in slides">
          <img class="swiper_img" :src="slide.img_url" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<style scoped>
.swiper-container {
  width: 100%;
  position: relative;
}
.swiper_img {
  cursor: pointer;
  width: 100%;
  height: 550px;
}
.swiper-slide {
  background: gold;
  min-height: 200px;
  max-height: 550px;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

export default {
  data() {
    return {
      slides: [
        { id: 1, img_url: require("../../../assets/image/1.jpg") },
        { id: 2, img_url: require("../../../assets/image/cover1.jpg") },
        { id: 3, img_url: require("../../../assets/image/cover2.jpg") },
        { id: 4, img_url: require("../../../assets/image/cover3.jpg") }
      ]
    };
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: false,
        clickable: true,
        renderBullet: function(index, className) {
          return (
            '<li style="height:5px; width:25px; border-radius: 0%;" class="' +
            className +
            '">' +
            "</li>"
          );
        }
      }
    });
  }
};
</script>
