/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-20 15:53:06 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-04-22 19:56:17
 */
<template>
  <div>
    <index-carousel></index-carousel>
    <index-banner></index-banner>
    <index-content></index-content>
    <!-- <index-top></index-top> -->
  </div>
</template>
<style scoped>
</style>
<script>
// import indexHeader from "./header";
import indexCarousel from "./carousel";
import indexBanner from "./banner";
import indexContent from "./content";
import indexTop from "./top";
export default {
  components: {
    // indexHeader: indexHeader,
    indexCarousel: indexCarousel,
    indexBanner: indexBanner,
    indexContent: indexContent,
    indexTop: indexTop
  }
};
</script>
