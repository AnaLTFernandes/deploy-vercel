import axios from "axios";

const request = axios.get("https://dog.ceo/api/breeds/image/random");
const root = document.querySelector(".root");

request.then(response => {
  root.innerHTML = `
    <ul>
      <img src="${response.data.message}"/>
    </ul>
    `;
});