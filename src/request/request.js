import axios from 'axios';

export const request = {
    get: (url, params) => {
        return axios.get(url, {params})
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            });
    },

    post: (url, data) => {
        return axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
            });
    }
};