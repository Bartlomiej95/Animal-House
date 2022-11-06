import {houseForAnimals} from "@/data/data";

export const state = () => ({
  items: [...houseForAnimals],
  choosenCategory: '', //after user click in category in navigation,
  sortedItems: [],
});


export const mutations = {

  add(state, item){
    state.items.push({...item});
  },

  sortHouses(state, { sortKey, asc }) {
    const items = this.state.houses.items;

    items.sort((a,b) => {
      let result = 0;
      if(!asc){
        (a[sortKey]>b[sortKey]) ? result = -1 : result = 1;
      } else if(asc){
        (a[sortKey]>b[sortKey]) ? result = 1 : result = -1;
      }
      return result;
    });

    this.state.houses.items = items;
  },


  sortByCategory(state, category) {
    this.state.houses.choosenCategory = category;
    const items = this.state.houses.items;

    const result = items.filter(item => item.category === category);
    this.state.houses.sortedItems = result;
  }
}
