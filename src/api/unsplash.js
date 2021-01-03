import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID b38-urAS6JcLmtsLLteo4uvwFPkSJK2fVCeh5EGcTMg",
  },
});
