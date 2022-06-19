import Axios from "axios";

//axois instance, like a base url for all requests
const instance = Axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/`,
});

export default instance;
