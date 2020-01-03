import axios from "axios";

const endpoint = "http://localhost:8080/api";

export function checkForDuplicates(username, setIsTaken) {
  console.log("checking duplicates " + username);
  axios
    .get(endpoint + "/checkForDuplicates/" + username)
    .then(function(response) {
      console.log(response);
      response.data.isPresent == "true" ? setIsTaken(true) : setIsTaken(false);
    })
    .catch(function(error) {
      console.log(error);
    });
}
export function saveNewUser(formState, history) {
  console.log("submitting");
  axios
    .post(endpoint + "/register", formState.values)
    .then(function(response) {
      console.log(response);
      history.push("/success");
    })
    .catch(function(error) {
      console.log(error);
    });
}
export function loginUser(formState, setJwt, history, from, e) {
  e.preventDefault()
  console.log("authenticating...");
  axios
    .post(endpoint + "/authenticate", formState.values)
    .then(function(response) {
      console.log(response);
      setJwt({ jwt: response.data.jwt });
      // console.log("value of from is: " + JSON.stringify(from) )
      history.replace(from); //4. redirect to original intended location once logged in.
    })
    .catch(function(error) {
      console.log(error);
    });
}
// export function verifyJwt(jwt, setIsJwtValid) {
//   console.log("verifying jwt");
//   console.log('JWT: ' + jwt);
//   axios
//     .post(endpoint + "/verifyJwt", jwt)
//     .then(function(response) {
//       console.log(response);

//       if (response.status == 200) {
//         setIsJwtValid(true);
//         // return true
//         // console.log(isJwtValid)
//       } else {
//         setIsJwtValid(false);
//         // return false
//       }
//       // console.log("is it valid? " + isJwtValid)
//     })
//     .catch(function(error) {
//       console.log(error);
//       setIsJwtValid(false);
//       // return false
//       // console.log("errored out...  " + isJwtValid)
//     });
// }
