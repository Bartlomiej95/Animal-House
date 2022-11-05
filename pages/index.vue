<template>
  <div class="wrapper">
    <Header/>
    <Navigation/>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Navigation from '@/components/Navigation/Navigation';

export default {
  name: 'IndexPage',
  components: {Header,Navigation}
}
</script>
<style scoped>
  .wrapper{
    width: 80vw;
    margin: 0 auto;
  }
</style>
