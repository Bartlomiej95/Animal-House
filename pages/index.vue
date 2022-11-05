<template>
  <div class="wrapper">
    <Header/>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";

export default {
  name: 'IndexPage',
  components: {Header}
}
</script>
<style scoped>
  .wrapper{
    width: 80vw;
    margin: 0 auto;
  }
</style>
