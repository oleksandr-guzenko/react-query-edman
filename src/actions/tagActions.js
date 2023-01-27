import axios from 'axios';

import { 
    GET_TAGS,
    ADD_TAG,
    UPDATE_TAG,
    TAGS_LOADING,
    TAG_ERRORS
} from "./types";
import store from "../store";

const server_url = 'https://dragonwarrior987600.pythonanywhere.com';

export const getTags = (toastr) => {
    store.dispatch({
        type: TAGS_LOADING,
        payload: null
    });
    axios
        .get(`${server_url}/api/tags/`)
        .then(res => {
            store.dispatch({
                type: GET_TAGS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

export const addTag = (tag, loadingElement, closeModal, toastr) => {
    loadingElement.style.display = 'inline-block';

    axios
        .post(`${server_url}/api/tags/`, tag)
        .then(res => {
            store.dispatch({
                type: ADD_TAG,
                payload: res.data
            });
            loadingElement.style.display = 'none';
            closeModal();
            toastr['success']('A new tag added successfully.');
        })
        .catch(err => {
            store.dispatch({
                type: TAG_ERRORS,
                payload: err.response.data
            });
            loadingElement.style.display = 'none';
        });
}

export const updateTag = (tagId, loadingElement, toastr) => {
    loadingElement.style.display = 'inline-block';

    axios
        .put(`${server_url}/api/tags/${tagId}/`)
        .then(res => {
            store.dispatch({
                type: UPDATE_TAG,
                payload: res.data
            });
            loadingElement.style.display = 'none';
        })
        .catch(err => {
            toastr['error']('Something went wrong. Try again.');
            loadingElement.style.display = 'none';
        });
}