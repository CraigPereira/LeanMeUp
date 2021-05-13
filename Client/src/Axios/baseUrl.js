import axios from "axios";

const API = process.env.REACT_APP_API || "http://localhost:5000/";

const instance = axios.create({ baseURL: API });

instance.defaults.withCredentials = true;

export default instance;
