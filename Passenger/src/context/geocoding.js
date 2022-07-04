import axios from "axios";

const APIKEY = "38899f5c95bf3dcef35c5a284ccf9316";
const AUTOCOMPLETE_APIKEY = "pk.47f78342a09e37b19d7be8701334eb01";
const ROUTE_APIKEY = "bd2b95ae1f9c46c7ae39b006969b39fd";

const BASE_URL = "http://api.positionstack.com/v1";
const AUTOCOMPLETE_URL = "https://api.locationiq.com/v1/autocomplete";
const ROUTE_URL = "https://api.geoapify.com/v1/routing";

const BASE_OUR_API_URL = "http://192.168.18.11:3001/v1/api";

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
  let url = BASE_URL + `/reverse?access_key=${APIKEY}&query=${lat},${long}`;
  let response = await get(url);
  response = response.data[0]["label"];
  console.log("API1");
  return response;
}

export async function getCoordinates(place_name) {
  let url =
    BASE_URL + `/forward?access_key=${APIKEY}&country=NP&query=${place_name}`;
  let response = await fetch(url);
  let data = await response.json();
  let objdata = data.data[0];
  console.log("API2");

  return objdata;
}

export async function getSuggestions(input) {
  let url =
    AUTOCOMPLETE_URL + `?key=${AUTOCOMPLETE_APIKEY}&q=${input}&countrycodes=NP`;
  let res = await fetch(url);
  res = res.json();
  console.log("API3");

  return res;
}

export async function getRoutes(from, to) {
  let url =
    ROUTE_URL +
    `?apiKey=${ROUTE_APIKEY}&waypoints=${from.latitude}%2C${from.longitude}%7C${to.latitude}%2C${to.longitude}&mode=drive`;
  let res = await get(url);
  res = res.features[0].geometry.coordinates[0];
  res = res.map((cords) => ({ longitude: cords[0], latitude: cords[1] }));
  console.log("API4");

  return res;
}

export async function complete(search) {
  var url =
    "https://api.locationiq.com/v1/autocomplete?key=pk.47f78342a09e37b19d7be8701334eb01&q=" +
    search +
    "&countrycodes=NP&limit=5";
  let response = await fetch(url);
  let data = await response.json();
  console.log("API15");

  if (data.error) return null;
  return data;
}

export async function requestRide(data) {
  const {
    user_name,
    user_id,
    ride_toc,
    ride_noofseats,
    ride_status,
    ride_code,
  } = data;
  const {
    name: ride_to,
    latitude: user_tolatitude,
    longitude: user_tolongitude,
  } = data.to;
  const {
    name: ride_from,
    latitude: user_fromlatitude,
    longitude: user_fromlongitude,
  } = data.from;

  let finalData = {
    user_name,
    ride_from,
    ride_to,
    user_id,
    ride_toc,
    ride_noofseats,
    ride_status,
    user_fromlatitude,
    user_fromlongitude,
    user_tolatitude,
    user_tolongitude,
    ride_code,
  };
  try {
    let url = BASE_OUR_API_URL + "/reqride/post/";
    console.log(url);
    const res = await axios.post(url, finalData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    return res.data._id;
  } catch (error) {
    console.log(error);
  }
}
export async function checkAcceptedRide(user_id) {
  console.log(user_id);
  let url = BASE_OUR_API_URL + `/reqride/check/${user_id}`;
  try {
    console.log(url);
    let res = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    return res.data.status;
  } catch (error) {
    console.log(error);
  }
}
export async function cancelRide(id) 
{
  var url =  BASE_OUR_API_URL +"/reqride/usercancel/"+id;
  console.log(url);
  let response = await fetch(url);
  let data = await response.json();
  console.log(data)
  return data;
}