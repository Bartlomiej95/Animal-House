import {houseForAnimals} from "@/data/data";

export const state = () => ({
  items: [...houseForAnimals],
});


export const mutations = {

  add(state, item){
    state.items.push({...item});
  },

  sortHouses(state, { sortKey, asc }) {
    const items = this.state.houses.items;
    console.log(items, asc);
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

}
