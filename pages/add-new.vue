<template>
  <div class="wrapper">
    <Header />
    <AddForm />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation";
import Header from "@/components/Header/Header";

export default {
  name: 'IndexPage',
  components: {Navigation, Header},
  // computed: {
  //   houses() {
  //     return this.$store.state.houses.houses;
  //   }
  // }
}
</script>

<style scoped>
.wrapper{
  width: 80vw;
  margin: 0 auto;
}

</style>
