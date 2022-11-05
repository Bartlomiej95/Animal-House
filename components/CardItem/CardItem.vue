<template>
  <div class="card-wrapper">
    <h2 class="card-name">{{house.name}}</h2>
    <img class="card-img" src="https://picsum.photos/60" />
    <button class="card-button">Zamów</button>
    <div class="card-price-wrapper">
      <h2 class="card-price-amount">{{house.price}} {{house.currency}}</h2>
    </div>
  </div>
</template>
<script>
export default {
  props: ['house'],
}
</script>
<style scoped>
.card-wrapper{
  background-color: white;
  flex-basis: 30%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.card-name{
  text-align: center;
}

.card-img{
  width: 90%;
  height: 250px;
  margin: 0 auto;
}

.card-button{
  width: 100px;
  margin: 30px auto 10px auto;
  padding: 5px 10px;
  background-color: #344860;
  cursor: pointer;
  color: white;
  border-radius: 10px;
}

.card-button:hover{
  background-color: #334157;
  color: #4dbe7f;
}

.card-price-wrapper{
  width: 80%;
  margin: 0 auto;
}

.card-price-amount{
  text-align: center;
}
</style>
