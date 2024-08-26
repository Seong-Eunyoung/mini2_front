import axios from "axios";

const REST_API_BASE_URL =  'http://localhost:8080/api'

const REST_API_URL = `${REST_API_BASE_URL}/user`

//export const listEmployees = () => axios.get(REST_API_BASE_URL);
export const getUserInfo = (id) => axios.get(REST_API_URL + '/' + id);

export const getPhotos = (id) => axios.get(REST_API_URL + '/' + id + '/photos');

export const getFollower = (id) => axios.get(REST_API_URL + '/' + id + '/follower');

export const getFollowing = (id) => axios.get(REST_API_URL + '/' + id + '/following');

export const getFollowerNum = (id) => axios.get(REST_API_URL + '/' + id + '/follower_num');

export const getFollowingNum = (id) => axios.get(REST_API_URL + '/' + id + '/following_num');

export const updateProfile = (id, formData) => axios.patch(REST_API_URL + '/' + id, formData);