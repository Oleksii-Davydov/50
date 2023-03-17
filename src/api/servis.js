import axios from "axios";

export default axios.create({
    baseURL: 'https://640f1ef14ed25579dc466e8a.mockapi.io/v1',
    headers: { "Content-Type": "application/json"}
})