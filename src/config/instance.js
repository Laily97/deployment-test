import axios from "axios";

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        'AccountKey': 'PA5n2GCORcGlReNCduPtJg=='
    }
};

const API = axios.create({
    baseURL: 'http://datamall2.mytransport.sg',
    headers: {
        'AccountKey': 'PA5n2GCORcGlReNCduPtJg==',
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Credentials': true
    }
});

export default API;