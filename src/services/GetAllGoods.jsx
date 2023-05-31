export const GetAllGoods = async () => {
  const data = await fetch(
    'https://my-json-server.typicode.com/VitaBabenko/fake_api_all_products/allproducts'
  );

  return data;
};
