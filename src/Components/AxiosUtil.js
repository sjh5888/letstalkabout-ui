// import React from 'react'
import axios from 'axios'

export function getCategories(setCategories){
  console.log('getCategories in AxiosUtil being called')
  axios
      .get("http://localhost:8080/api/categories")
      .then(response => {

        console.log(response);
        console.log("getCategories works: "+ response.data.categories);
        console.log("loaded category data from backend.");
        setCategories(response.data.categories)
      })
      .catch(function(error) {
        console.log(error);
        return []
      });
}
export function updateCategoryImage(obj){
  // console.log(obj.categoryId)
  axios.post("http://localhost:8080/api/updateCategoryImage/" + obj.categoryId, obj)
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error);
      });
}
export function saveNewCategory(newCat){
  axios.post("http://localhost:8080/api/saveCat", newCat)
    .then(function (response) {
      console.log(response);  
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