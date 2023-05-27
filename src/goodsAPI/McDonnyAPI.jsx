const goods = [
  { id: '1', name: 'Big Big Burger' },
  { id: '2', name: 'Big Big Burger' },
  { id: '3', name: 'Big Big Burger' },
  { id: '4', name: 'Big Big Burger' },
  { id: '5', name: 'Big Big Burger' },
  { id: '6', name: 'Big Big Burger' },
  { id: '7', name: 'Big Big Burger' },
];

export const getGoods = () => {
  return goods;
};

export const getGoodById = elId => {
  return goods.find(el => el.id === elId);
};
