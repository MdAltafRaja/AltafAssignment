import axios from "axios";
export const fetchData = () => {
    return axios.get("https://panorbit.in/api/users.json")
}