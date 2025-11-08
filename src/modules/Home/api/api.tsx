import axios from 'axios';

export const fetchApiData = async()=>{
    const response = await axios.get('https://dummyjson.com/users');
    return response.data
}