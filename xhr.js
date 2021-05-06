const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const sendHttpRequest = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.send();
  });
  return promise;
  
};

const getData = () => {
  sendHttpRequest("GET", 'https://reqres.in/api/users').then(responseData =>{
      console.log(responseData);
  });
};
const sendData = () => {
    sendHttpRequest('POST', 'https://reqres.in/api/register',{email: 'tester@com'}).then(responseData =>{
        console.log(responseData);
    })
};

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);
// Estoy en el minuto 12:10 del video 
// https://www.youtube.com/watch?v=4K33w-0-p2c
