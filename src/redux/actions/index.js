import axios from "axios";

export const url =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=bdf0ae90895a49b1b0fb04bc1a4449ea&category=";

const filterProperties = (articles) =>
  articles.reduce((p, c) => {
    const { title, content, author, publishedAt } = c;
    return [...p, { title, content, author, publishedAt }];
  }, []);

export const fetchNews = (category) => (dispatch) => {
  axios.get(`${url}${category}`).then(({ data }) => {
    dispatch(setNews(filterProperties(data.articles)));
  });
};

export const setNews = (payload) => ({
  type: "SET_NEWS",
  payload,
});
