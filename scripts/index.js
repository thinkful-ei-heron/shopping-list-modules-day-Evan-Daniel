import shoppingList from './shopping-list.js';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);

import store from './store.js';
import item from './item.js'

store.addItem('bananas');
store.addItem('apples');
store.addItem('rice');
console.log(store)
// grab the id of the first store item (bananas)
let id = store.items[0].id;
// delete this item from the store
store.findAndDelete(id);
shoppingList.render();
