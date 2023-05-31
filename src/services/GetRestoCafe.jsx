export const GetRestoCafe = async () => {
  const data = await fetch(
    'https://my-json-server.typicode.com/VitaBabenko/fake_api_delivery_app/restocafe'
  );

  return data;
};
