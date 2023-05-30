export const GetMcDonny = async () => {
  const data = await fetch(
    'https://my-json-server.typicode.com/VitaBabenko/fake_api_delivery_app/mcdonny'
  );

  return data;
};
