<template>
  <div class="wrapper">
    <Header/>
    <div class="wrapper-search">
      <h2>Wyszukiwarka zaawansowana</h2>
      <label>Szukaj:</label>
      <input type="text" placeholder="Wyszukaj" /><br/>
      <label>Sortuj po:</label>
      <select name="category" v-model="sortKey">
        <option value="name">Nazwie</option>
        <option value="price">Cenie</option>
      </select><br/>
      <label @click="toggleSort"><input type="radio" name="ascending" />Rosnąco</label>
      <label @click="toggleSort"><input type="radio" name="descending" />Malejąco</label><br/>
      <button class="search-adv-btn" @click="sortFn(sortKey, toggleAsc)">Zastosuj</button>
    </div>
  </div>

</template>
<script>
import Header from "@/components/Header/Header";
export default {
  components: {Header},
  data() {
    return {
      toggleAsc: true,
      sortKey: '',
    }
  },
  methods: {
    toggleSort(){
      this.toggleAsc = !this.toggleAsc;
    },

    sortFn(sortKey, asc){
      this.$store.commit('houses/sortHouses', { sortKey, asc } );
      this.$router.push('/');
    },
  },
}
</script>
<style scoped>
.wrapper{
  width: 80vw;
  margin: 0 auto;
}

.wrapper-search{
  width: 40%;
  margin: 0 auto;
}

.search-adv-btn{
  width: 100px;
  margin: 30px auto 10px auto;
  padding: 5px 10px;
  background-color: #344860;
  cursor: pointer;
  color: white;
  border-radius: 10px;
}

.search-adv-btn:hover{
  background-color: #485a6f;
  /*color: #4dbe7f;*/
}

input, select{
  margin-bottom: 20px;
}
</style>
