import axios from 'axios'

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
      .then(function(response1) {
        console.log(response1)
        updateSuccess(true)
        formState.clear()
        updateCategory("")
      })
      .catch(function(error1) {
        console.log(error1);
      });
}