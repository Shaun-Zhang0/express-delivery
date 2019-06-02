/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-25 16:39:17 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-05-23 18:11:52
 */
<template>
  <div>
    <take-info></take-info>
    <rece-info></rece-info>
    <pay-info></pay-info>
  </div>
</template>
<style scoped>
</style>
<script>
import takeInfo from "./takeInfo";
import receInfo from "./receInfo";
import payInfo from "./payInfo";
export default {
  components: {
    takeInfo: takeInfo,
    receInfo: receInfo,
    payInfo: payInfo
  }
};
</script>
