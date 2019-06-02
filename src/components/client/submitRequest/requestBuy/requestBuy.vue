/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-25 16:30:59 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-05-23 18:10:00
 */
<template>
  <div>
    <purchasing-info></purchasing-info>
    <receipt-info></receipt-info>
    <pay-info></pay-info>
  </div>
</template>
<style scoped>
</style>
<script>
import purchasingInfo from "./purchasingInfo";
import receiptInfo from "./receiptInfo";
import payInfo from "./payInfo";
export default {
  components: {
    purchasingInfo: purchasingInfo,
    receiptInfo: receiptInfo,
    payInfo: payInfo
  }
};
</script>
