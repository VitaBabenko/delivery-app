export const GetPapaJyhn = async () => {
  const data = await fetch(
    'https://my-json-server.typicode.com/VitaBabenko/fake_api_delivery_app/papajyhn'
  );

  return data;
};
