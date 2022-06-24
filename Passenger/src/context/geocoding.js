const APIKEY = "38899f5c95bf3dcef35c5a284ccf9316";
const BASE_URL = "http://api.positionstack.com/v1";

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
  return response;
}

export async function getCoordinates(place_name) {
  let url =
    BASE_URL + `/forward?access_key=${APIKEY}&country=NP&query=${place_name}`;
  let response = await fetch(url);
  let data = await response.json();
  let objdata = data.data[0];
  return objdata;
}
