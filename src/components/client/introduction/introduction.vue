/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-20 23:40:40 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-04-21 16:47:00
 */
<template>
  <div>
    <intro-title></intro-title>
    <intro-usage-content></intro-usage-content>
    <intro-rec-content></intro-rec-content>
  </div>
</template>
<style scoped>
</style>
<script>
import introTitle from "./../introduction/introTitle";
import introUsageContent from "./../introduction/introUsageContent";
import introRecContent from "./../introduction/introRecContent";
export default {
  components: {
    introTitle: introTitle,
    introUsageContent: introUsageContent,
    introRecContent: introRecContent
  }
};
</script>
