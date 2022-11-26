import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'
//get
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
//post
const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}
//put
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}
//delete
const del = (id)=> {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)/* .catch(error => {
        console.log('fail',error)
      }) */
}

export default {getAll,create,update,del}