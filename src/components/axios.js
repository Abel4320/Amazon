import axios from 'axios'
const instant = axios.create({
    baseURL:"https://us-central1-abels-c674c.cloudfunctions.net/api",
})
export default instant