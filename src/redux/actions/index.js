import axios from "axios";
import { URL } from "../../storage.json";

const filterProperties = (articles) =>
  articles.map(({ title, content, author, publishedAt, urlToImage }) => ({
    title,
    content,
    author,
    publishedAt,
    urlToImage,
  }));

export const fetchNews = (category) => (dispatch) => {
  axios.get(`${URL}${category}`).then(({ data }) => {
    dispatch(setNews(filterProperties(data.articles)));
  });
};

export const setNews = (payload) => ({
  type: "SET_NEWS",
  payload,
});
