import Axios from "axios"
export  function callApidata(id,type) {
    const data = Axios.get(`https://www.omdbapi.com/?apikey=6b52ef7b&key=6b52ef7b&${type}=${id}`)
    return data
  }

