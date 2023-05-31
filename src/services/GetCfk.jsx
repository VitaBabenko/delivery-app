export const GetCfk = async () => {
  const data = await fetch(
    'https://my-json-server.typicode.com/VitaBabenko/fake_api_delivery_app/cfk'
  );

  return data;
};
