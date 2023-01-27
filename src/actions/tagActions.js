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

/**
 * get all custom tags from the backend
 * @function
 * @param {Object} toastr - javascript object to show notification
 */
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

/**
 * create a new custom tag
 * @function
 * @param {Object} tag - tag info to create newly
 * @param {DOM} loadingElement - DOM element to show loading while waiting for responses from server
 * @param {Function} closeModal - function to close modal after creation a new tag successfully
 * @param {Object} toastr - javascript object to show notification
 */
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

/**
 * enable or disable the custom tag added
 * @function
 * @param {string} tagId - id of the custome tag to be enabled or disabled, id means the id stored in the database table
 * @param {DOM} loadingElement - DOM element to show loading while waiting for responses from server
 * @param {Object} toastr - javascript object to show notification
 */
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