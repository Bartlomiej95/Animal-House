import {houseForAnimals} from "@/data/data";

export const state = () => ({
  items: [...houseForAnimals],
});


export const mutations = {

  add(state, item){
    state.items.push({...item});
  },

}
