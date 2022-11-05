<template>
  <div class="wrapper-form">
    <form class="add-form" @submit.prevent="addNew(newItem)">
      <h2 class="form-title">Dodawanie nowego produktu</h2>
      <label>Wybierz kategorie</label><br/>
      <select name="category" v-model="newItem.category" >
        <option v-model="category.ONTREE">{{category.ONTREE}}</option>
        <option v-model="category.ONTHEGROUND">{{category.ONTHEGROUND}}</option>
        <option v-model="category.HOUSEPROJECT">{{category.HOUSEPROJECT}}</option>
      </select><br/>
      <label>Nazwa</label><br/>
      <input type="text" name="name" placeholder="Nazwa" v-model="newItem.name"/><br/>
      <label>Cena</label><br/>
      <input type="number" name="price" placeholder="Cena produktu" v-model="newItem.price" /><br/>
      <button class="form-add-btn" type="submit">Dodaj</button>
    </form>
  </div>
</template>
<script>
import {Category} from "@/data/house-category";

export default {
  data() {
    return {
      newItem: {
        name: '',
        category: '',
        price: 0
      },
      category: Category,
    }
  },
  methods: {
    addNew(house){
      this.$store.commit('houses/add', house);
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
  .wrapper-form{
    width: 100%;
    background-color: #f8f8f8;
    margin: 0 auto;
    height: 100vh ;
  }

  .add-form{
    width: 40%;
    margin: 0 auto;
    background-color: white;
    padding: 30px 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .form-title{
    margin-top: 0px;
    padding-top: 0px;
  }

  .add-form select, input{
    margin-bottom: 30px;
  }

  .add-form label{
    margin-bottom: 10px;
  }

  .add-form input{
    margin-top:5px;
    border-radius: 10px;
    border: 3px;
    padding: 5px 10px;
  }

  .form-add-btn{
    width: 100px;
    margin: 30px auto 10px auto;
    padding: 5px 10px;
    background-color: #344860;
    cursor: pointer;
    color: white;
    border-radius: 10px;
  }

  .form-add-btn:hover{
    background-color: #485a6f;
    /*color: #4dbe7f;*/
  }
</style>
