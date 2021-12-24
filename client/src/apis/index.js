import axios from "axios";
import qs from "qs";

let baseUrl = "";

if (window.location.origin === "https://localhost:9000") {
    baseUrl = "http://localhost:4001";
}

export const post = (payload) => {
    return axios
        .post(`${baseUrl}${payload.url}`, payload.data, {
            headers: {
                "content-type":
                    "application/x-www-form-urlencoded;charset=utf-8",
            },
        })
        .then(async (response) => {
            return response;
        })
        .catch((err) => console.log(err));
};

export const get = (url) => {
    return axios
        .get(`${baseUrl + url}`)
        .then(async (response) => {
            return response.data;
        })
        .catch((err) => console.log(err));
};

export const postForm = (url, body) => {
    return axios({
        method: "post",
        url: `${baseUrl}${url}`,
        data: qs.stringify(body),
        headers: {
            "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
    })
        .then(async (response) => {
            return response.data;
        })
        .catch((err) => console.log(err));
};

export const postFormData = (payload) => {
    const formData = new FormData();

    for (var key in payload.data) {
        if (
            payload?.data[key] !== null &&
            payload?.data[key] !== "" &&
            payload?.data[key] !== undefined
        ) {
            formData.append(key, payload.data[key]);
        }
    }

    return axios
        .post(`${baseUrl}${payload.url}`, formData, {
            "Content-Type": "multipart/form-data",
        })
        .then(async (response) => {
            return response.data;
        })
        .catch((err) => console.log(err));
};

export const postJson = (payload) => {
    return axios
        .post(`${baseUrl}${payload.url}`, payload.data)
        .then(async (response) => {
            return response.data;
        })
        .catch((err) => console.log(err));
};
