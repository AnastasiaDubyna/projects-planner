import axios from 'axios';

const baseLink = process.env.REACT_APP_API_LINK;


export const fetchData = (path) => {
    const link = `${baseLink}${path}`;

    return axios.get(link);
};

export const postData = (path) => {
    return axios.post();
}; 