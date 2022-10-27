import axios from "axios";
import Auth from "./Auth";

const api = "http://82.115.16.153:4000/api";
const user = JSON.parse(localStorage.getItem("user"));

export const GetFeedAPI = () =>
  axios.post(`${api}/feed/`, user, { headers: Auth() });

export const SetTweetAPI = (body, tags, reply) =>
  axios.post(`${api}/tweet/`, { body, tags, reply }, { headers: Auth() });

export const GetLikeAPI = (tweet_id) =>
  axios.put(`${api}/like/`, { tweet_id }, { headers: Auth() });

export const GetUserAPI = (username) => axios.get(`${api}/user/${username}`);

export const GetTweetAPI = (tweet_id) => axios.get(`${api}/tweet/${tweet_id}`);

export const GetFollowAPI = (username) =>
  axios.put(`${api}/follow/`, { username }, { headers: Auth() });

export const RemoveProductAPI = (tweet_id) =>
  axios.delete(`${api}/delete_tweet/`,{ headers: Auth(),data:{tweet_id}});
