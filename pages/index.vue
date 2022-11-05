<template>
  <div class="wrapper">
    <Header/>
    <Navigation/>
    <Main/>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Navigation from '@/components/Navigation/Navigation';
import Main from '@/components/Main/Main';

export default {
  name: 'IndexPage',
  components: {Header,Navigation, Main}
}
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .wrapper{
    width: 80vw;
    margin: 0 auto;
  }
</style>
