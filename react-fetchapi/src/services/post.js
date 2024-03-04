import { post, get, postJSON } from "./request";

export const getPosts = () => get("posts");
export const getPostDetails = (id) => get(`posts/${id}`);
export const newPost = (data) => postJSON("posts", data);
