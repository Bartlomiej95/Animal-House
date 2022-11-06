<template>
  <div class="nav">
    <ol>
      <li>Gotowe domki
        <ul>
          <li @click="sortByCategory(category.ONTREE)">Domki na drzewie</li>
          <li @click="sortByCategory(category.ONTHEGROUND)">Domki na ziemi</li>
        </ul>
      </li>
      <li @click="sortByCategory(category.HOUSEPROJECT)">
        Domki na zamówienie
      </li>
    </ol>
  </div>
</template>
<script>
import {Category} from "@/data/house-category";

export default {
  data(){
    return{
      category: Category,
      houses: this.$store.state.houses.items,
    }
  },

  methods: {
    sortByCategory(category){
      this.$store.commit('houses/sortByCategory', category)
    },
  }
}
</script>

<style scoped>
  .nav{
    width: 100%;
    background-color: #344860;
    height: 80px;
  }

  .nav ol {
    list-style-type:none;
    padding:0;
    margin:0;
    font-size:18px;
    height: 2em;
    line-height:2em;
    text-align:center;
    color: white;
  }

  .nav li{
    display: block;
    cursor: pointer;
    margin: 0 auto;
    padding: 0 10px;
    text-transform: uppercase;
    line-height: 80px;
  }

  .nav ol > li > ul{
    padding: 0;
  }

  .nav ol > li {
    float: left;
  }

  .nav li:hover{
    color: #4dbe7f;
    background-color: #334157;
  }

  .nav ul {
    color: white;
  }


</style>
