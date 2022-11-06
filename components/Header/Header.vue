<template>
  <header class="wrapper">
    <div class="header-top">
      <h4 class="header-top-email">email: example@example.com</h4>
      <h4 class="header-top-tel">tel: 555 555 555</h4>
    </div>
    <div class="header-bottom">
      <div class="logo-wrapper">
       <nuxt-link to="/"><Logo /></nuxt-link>
      </div>
      <div class="search-wrapper">
        <input class="search-input" placeholder="Wyszukaj" v-model="searchingValue" @keydown="changeSearchingValue(searchingValue)"/>
        <NuxtLink to="/searching">Wyszukiwanie zaawansowane</NuxtLink>
      </div>
      <div class="wrapper-shop-icon">
        <ShopIcon class="shop-icon" />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from 'assets/logo.svg';
import ShopIcon from '@/assets/shoping.svg';

export default {
  data(){
    return{
      searchingValue: '',
    }
  },
  components: {
    Logo,
    ShopIcon
  },
  methods: {
    changeSearchingValue(text) {
      return this.$store.commit('houses/changeSearchingValue', text);
    }
  }
}

</script>
<style scoped>
  .wrapper{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .header-top{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .header-top-email{
    margin-right: 30px;
  }

  .header-bottom{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    background-color: #f8f8f8;
    padding: 0 10px;
  }

  .search-wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  .search-wrapper a{
    color: black;
    font-size: 14px;
    margin-left: 5px;
  }

  .search-wrapper a:hover{
    color: gray;
  }

  .search-input{
    border-radius: 10px;
    border: 3px;
    padding: 5px 10px;
  }

  .search-input:focus{
    outline: none;
  }

  .wrapper-shop-icon{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    transition: 0.2s;
  }

  .wrapper-shop-icon:hover{
    width: 70px;
    height: 70px;
  }

</style>
