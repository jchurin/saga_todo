const DELAY = 3000;

const mock = [
  { id: '1', text: 'Do shopping', checked: true },
  { id: '2', text: 'Prepare Saga talk', checked: true },
  { id: '3', text: 'Create leniRemember', checked: false },
  { id: '4', text: 'Add more styles to leniremember', checked: false },
  { id: '5', text: 'Make leniremember pretty', checked: false },
  { id: '6', text: 'Move side effects from leniremember to saga', checked: false },
]

export const fetchList = (itemText) => new Promise((resolve) => {
    setTimeout(() => {
      resolve(mock);
    }, DELAY);
  });

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

