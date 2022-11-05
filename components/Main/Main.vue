<template>
  <div class="wrapper-main">
    <div class="wrapper-add-btn">
      <h3>Dodaj nowy</h3>
      <button class="add-btn">+</button>
    </div>
    <div class="wrapper-house-item">
      <CardItem
        v-for="house in houses"
        v-bind:key="house.id"
        :house="house"
      />
    </div>
  </div>
</template>
<script>
import CardItem from '@/components/CardItem/CardItem';
export default {
  components: {CardItem},
  computed: {
    houses() {
      return this.$store.state.houses.items;
    }
  }
}
</script>
<style scoped>
  .wrapper-main{
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
    margin: 0 auto;
    width: 100%;
  }

  .wrapper-add-btn{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
  }

  .add-btn{
    width: 40px;
    height: 40px;
    padding: 5px;
    margin-left: 10px;
    border-radius: 50%;
    border: 1px solid;
    background-color: #4dbe7f;
    color: white;
    font-size: 26px;
    cursor: pointer;
  }

  .add-btn:hover{
    background-color: #70CB98;
  }

  .wrapper-house-item{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }


</style>
