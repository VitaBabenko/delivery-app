export const goods = [
  {
    id: '1',
    name: 'Big Big Burger',
    price: 100,
    count: 1,
    totalPrice: 100,
    inCart: false,
  },
  {
    id: '2',
    name: 'Big Big Burger',
    price: 80,
    count: 1,
    totalPrice: 80,
    inCart: false,
  },
  {
    id: '3',
    name: 'Big Big Burger',
    price: 90,
    count: 1,
    totalPrice: 90,
    inCart: false,
  },
  {
    id: '4',
    name: 'Big Big Burger',
    price: 75,
    count: 1,
    totalPrice: 75,
    inCart: false,
  },
  {
    id: '5',
    name: 'Big Big Burger',
    price: 65,
    count: 1,
    totalPrice: 65,
    inCart: false,
  },
  {
    id: '6',
    name: 'Big Big Burger',
    price: 25,
    count: 1,
    totalPrice: 25,
    inCart: false,
  },
  {
    id: '7',
    name: 'Big Big Burger',
    price: 95,
    count: 1,
    totalPrice: 95,
    inCart: false,
  },
];

export const getGoods = () => {
  return goods;
};

export const getGoodById = elId => {
  return goods.find(el => el.id === elId);
};
