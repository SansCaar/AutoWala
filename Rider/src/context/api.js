export async function getrides() {
    var url = "http://192.168.1.17:3001/v1/api/reqride/get";
    let response = await fetch(url);
    let data = await response.json();
    if (data.error) return null;
    return data;
  }
  