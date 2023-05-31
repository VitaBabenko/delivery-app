export const GetDonMarket = async () => {
  const data = await fetch(
    'https://my-json-server.typicode.com/VitaBabenko/fake_api_delivery_app/donmarket'
  );

  return data;
};
