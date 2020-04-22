import axios from 'axios'
const KEY = 'AIzaSyApVlIVBJLq8J1cyj-G48Yfi2P8IQnQlrs'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults : 5,
        key: `${KEY}`
    }
});