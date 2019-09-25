const items = [1,2,3]
const hideCheckedItems = false

//returns the object
function findById (id) {
 return items.find(element => element.id === id);
}

function addItem (name) {
  try {
    item.validateName(name);
    items.push(item.create(name));
  }
  catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndToggleChecked (id) {
  const foundItem = this.findById(id);
  foundItem.checked = !foundItem.checked;
};

function findAndUpdateName (id, newName) {
  try {
    item.validateName(newName);
    const object = this.findById(id);
    object.name = newName;
  }
  catch (error) {console.log(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete (id) {
  //const foundItem = this.findById(id);
  const newItems = items.filter (element => element.id !== id);
  items.length = 0;
  items.push(...newItems);
}




import item from './item.js';
export default {
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  items,
  hideCheckedItems
};

