import shoppingList from './shopping-list.js';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
  const itemNames = ['apples', 'pears' ];
  itemNames.forEach(name => {
  try {
    item.validateName(name);
    // create a new item if name is valid
    store.items.push(item.create(name));
  } catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
});
};

$(main);

import store from './store.js';
import item from './item.js'
