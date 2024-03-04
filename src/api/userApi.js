import axios from "axios";

export default axios.create({
    // baseURL: process.env.DEV_URL,
    baseURL: "http://localhost:4000/api",

});

// console.log(process.env.DEV_URL)