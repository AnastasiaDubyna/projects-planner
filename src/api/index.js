import axios from 'axios';

const baseLink = process.env.REACT_APP_API_LINK;


export const fetchData = () => {
    const link = baseLink + "/getTasks/all";
    return axios.get(link);
};

export const postData = () => {
    return axios.post();
}; 