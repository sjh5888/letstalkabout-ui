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
export function loginUser(formState, setJwt, history, from) {
  // e.preventDefault()
  console.log("authenticating...");
  axios
    .post(endpoint + "/authenticate", formState.values)
    .then(function(response) {
      console.log(response);
      localStorage.setItem('jwt', response.data.jwt );
      setJwt(localStorage.getItem('jwt'))
      history.replace(from); //4. redirect to original intended location once logged in.
    })
    .catch(function(error) {
      console.log(error);
    });
}