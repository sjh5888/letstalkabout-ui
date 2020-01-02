import axios from 'axios'
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt');
const endpoint = "http://localhost:8080/api"

/*
axios.post('https://example.com/postSomething', {
 email: varEmail, //varEmail is a variable which holds the email
 password: varPassword
},
{
  headers: {
    Authorization: 'Bearer ' + varToken
  }
})

axios.get('https://example.com/getSomething', {
 headers: {
   Authorization: 'Bearer ' + token //the token is a variable which holds the token
 }
})
*/

export function getCategories(setCategories){
  console.log('getCategories in AxiosUtil being called')
  axios.get(endpoint + "/categories",{
    headers: {Authorization: 'Bearer ' + "idk"}}) //fix this!
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
  axios.get(endpoint + "/getThreads/" + category)
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
  axios.post(endpoint + "/setCategoryImage/" + obj.categoryId, obj)//get rid of the x
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
  axios.post(endpoint + "/saveCat", newCat)
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
  axios.post(endpoint + "/newThread", formState.values)
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