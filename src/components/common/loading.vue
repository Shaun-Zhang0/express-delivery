/*
 * @Author: Shaun.Zhang 
 * @Date: 2019-05-21 22:46:21 
 * @Last Modified by: Shaun.Zhang
 * @Last Modified time: 2019-05-21 22:57:06
 */
<template>
  <div id="content">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
    <div class="bounce4"></div>
    <div class="bounce5"></div>
  </div>
</template>
<style scoped>
#content {
  height: 44px;
  text-align: center;
}
#content > div {
  width: 12px;
  height: 12px;
  border-radius: 100%;
  display: inline-block;
  animation: loading 3.2s infinite ease-in-out;
  animation-fill-mode: both;
}
#content .bounce1 {
  background-color: #cd402e;
}
#content .bounce2 {
  background-color: #b07da8;
  animation-delay: -0.2s;
}
#content .bounce3 {
  background-color: #f1b428;
  animation-delay: -0.3s;
}
#content .bounce4 {
  background-color: #06aaa2;
  animation-delay: -0.4s;
}
#content .bounce5 {
  background-color: #ff0909;
  animation-delay: -0.5s;
}
@keyframes loading {
  0% {
    transform: translate(-200px, 0);
    opacity: 0;
  }
  35%,
  65% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: translate(200px, 0);
    opacity: 0;
  }
}
</style>
<script>
export default {};
</script>
