const BASE_OUR_API_URL="http://192.168.1.17:3001/v1/api/reqride";

export async function getrides() 
  {    
    var url = BASE_OUR_API_URL +"/get/rides";

    console.log(url)
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
  export async function setAccepted(id) 
  {
    var url =  BASE_OUR_API_URL +"/accept/"+id;
    let response = await fetch(url);
    let data = await response.json();
    alert('Successfully Accepted the ride')
    return data;
  }

  export async function getData(id) 
  {
    var url =  BASE_OUR_API_URL +"/"+id;
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }



// export async function setAccepted(id) {
//     alert(id)
//     try {
//         const config = {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           };
//       var url = "http://192.168.1.17:3001/v1/api/reqride/accept/"+id;
//        const res = await axios.patch(url)
//         alert(res.data);
//         alert("Successfully Register")
//     } catch (error) {
//         console.log(error);
//     }
//   }