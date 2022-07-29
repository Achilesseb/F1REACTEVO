const myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "46517e472fc5b363c8f7b4a2d912ae70");
myHeaders.append("x-rapidapi-host", "v1.formula-1.api-sports.io");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
export const fetchData = async () => {
  const fetchedData = await fetch(
    "https://v1.formula-1.api-sports.io/teams",
    requestOptions
  );
  const { response } = await fetchedData.json();
  console.log(response);
  return response;
};
