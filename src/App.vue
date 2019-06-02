/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-04-20 15:53:19 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-05-30 22:08:16
 */
<template>
  <div id="app">
    <div class="client">
      <clientHeader></clientHeader>
      <router-view></router-view>
      <client-footer v-if="!$route.meta.isLogin"></client-footer>
      <client-to-top></client-to-top>
    </div>
  </div>
</template>


<script>
import clientHeader from "./components/client/index/header";
import clientFooter from "./components/client/index/footer";
import clientToTop from "./components/client/index/top";
export default {
  components: {
    clientHeader: clientHeader,
    clientFooter: clientFooter,
    clientToTop: clientToTop
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #ebebeb;
}
</style>
