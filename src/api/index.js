import axios from 'axios';

const url = 'http://localhost:5000/postNotes';

export const fetchPosts = () => axios.get(url);