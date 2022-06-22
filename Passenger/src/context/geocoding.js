export default async function callAPI(url) {
let finaldata;
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

let cred= {
/*pass garni gara */

}
  await fetch(url, {
    method: 'POST',
    headers: headers,
    /* yo chainna hol
    body: JSON.stringify(cred),  */

  })

  .then((response) => response.json())
    .then((response) => {
      finaldata = response;
    })
    .catch((error) => {
      alert('Error:' + error);
    });
  return finaldata;
}

