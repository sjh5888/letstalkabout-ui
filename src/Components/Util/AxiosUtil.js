import axios from 'axios'
import { useHistory } from 'react-router-dom';

const endpoint = "http://localhost:8080/api"

export function getCategories(setCategories){
  console.log('getCategories in AxiosUtil being called')
  axios.get("http://localhost:8080/api/categories")
      .then(response => {
        console.log(response);
        console.log("loaded category data from backend.");
        setCategories(response.data.categories)
      })
      .catch(function(error) {
        console.log(error);
        setCategories([])
      });
}
export function getThreads(setThreads, category){
  axios.get("http://localhost:8080/api/getThreads/" + category)
      .then(response => {
        console.log(response);
        console.log("loaded threads of category " + category + "from backend.");
        setThreads(response.data.threads)
      })
      .catch(function(error) {
        console.log(error);
        setThreads([])
      });
}
export function setCategoryImage(obj, setCategories, setHasError, setModalOpen){
  // console.log(obj.categoryId)
  axios.post("http://localhost:8080/api/setCategoryImage/" + obj.categoryId, obj)//get rid of the x
      .then(function(response) {
        console.log(response)
        getCategories(setCategories) //this is meant to avoid the asynchronousness of this action... save the data and then rerender the page with the new data!
        setHasError(false)
        setModalOpen(false)
      })
      .catch(function(error) {
        console.log('error' + error);
        setHasError(true)
      });
}
export function saveNewCategory(newCat, formState, updateCategory, updateSuccess, setCategories){
  axios.post("http://localhost:8080/api/saveCat", newCat)
    .then(function (response) {
      console.log(response); 
      saveNewThread(formState, updateCategory, updateSuccess)
      getCategories(setCategories)
      console.log("success")
    })
    .catch(function (error) {
      console.log(error);
    });
}
export function saveNewThread(formState, updateCategory, updateSuccess){
  axios.post("http://localhost:8080/api/newThread", formState.values)
      .then(function(response) {
        console.log(response)
        updateSuccess(true)
        formState.clear()
        updateCategory("")
      })
      .catch(function(error) {
        console.log(error);
      });
}
export function checkForDuplicates(username, setIsTaken){
  console.log('checking duplicates ' + username)
  axios.get(endpoint + "/checkForDuplicates/"+ username)
  .then(function(response){
    console.log(response)
    response.data.isPresent == 'true' ? setIsTaken(true) : setIsTaken(false)
  })
  .catch(function(error) {
    console.log(error);
  });
}
export function saveNewUser(formState, history){
  console.log("submitting")
  axios.post(endpoint + "/register", formState.values)
      .then(function(response) {
        console.log(response)
        history.push("/success")
        // updateSuccess(true)
        // formState.clear()
      })
      .catch(function(error) {
        console.log(error);
        // updateSuccess(false)
      });
}