import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:9111/api/v1", //for the localhost
  baseURL: "https://api.andersonspharma.com/api/v1", // for production
});
