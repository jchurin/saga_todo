const DELAY = 3000;

export const addNewItem = (itemText) => new Promise((resolve) => {
    setTimeout(() => {
      resolve({id: `${(Math.random() * (1 - 500) + 1)}`, text: itemText, checked: false});
    }, DELAY);
  });
  
export const toggleCheck = (itemId) => new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, DELAY);
  });

export const remove = (itemId) => new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, DELAY);
  });
  
export const clear = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, DELAY);
  });

