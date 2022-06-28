export async function getrides() {
    var url = "http://192.168.1.17:3001/v1/api/reqride/getrides";
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
  export async function setAccepted(id) {
    alert(id)
    var url = "http://192.168.1.17:3001/v1/api/reqride/accept/"+id;
    let response = await fetch(url);
    let data = await response.json();
    alert('Successfully Accepted the ride')
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