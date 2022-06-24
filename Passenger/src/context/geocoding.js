const APIKEY = "38899f5c95bf3dcef35c5a284ccf9316";
const AUTOCOMPLETE_APIKEY = "pk.47f78342a09e37b19d7be8701334eb01"
const ROUTE_APIKEY = "bd2b95ae1f9c46c7ae39b006969b39fd"

const BASE_URL = "http://api.positionstack.com/v1";
const AUTOCOMPLETE_URL  = "https://api.locationiq.com/v1/autocomplete";
const ROUTE_URL  = "https://api.geoapify.com/v1/routing";

async function get(url) {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };  
  try {
    const response = await fetch(url, {
      headers: headers,
    });
    let json = response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export async function getAddress(lat, long) {
  console.log(lat + "," + long);
  let url = BASE_URL + `/reverse?access_key=${APIKEY}&query=${lat},${long}`;
  let response = await get(url);
  console.log(response.data)
  response = response.data[0]['label']
  console.log(response)

  return response;
}

export async function getCoordinates(place_name) {
  let url =
    BASE_URL + `/forward?access_key=${APIKEY}&country=NP&query=${place_name}`;
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  let objdata = data.data[0];
  return objdata;
}

export async function getSuggestions(input){
  let url = AUTOCOMPLETE_URL + `?key=${AUTOCOMPLETE_APIKEY}&q=${input}&countrycodes=NP`
  let res = await fetch(url);
  res = res.json();
  console.log(res)
  return res;
}

export async function getRoutes(from, to){
  let url = ROUTE_URL + `?apiKey=${ROUTE_APIKEY}&waypoints=${from}%2C${to}&mode=drive`
  let res = await get(url);
  console.log(res)
}

