import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { fetchNews } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home";

export default function App() {
  const dispatch = useDispatch();
  let articles = useSelector((state) => state);
  const onChange = React.useCallback((e) => {
    console.log(articles);
  }, []);
  console.log(articles);
  React.useEffect(() => {
    let input = document.querySelector(".search-input");
    console.log(articles, "from useEffect");
    input.addEventListener("change", onChange);
    dispatch(fetchNews("general"));
    return () => {
      input.removeEventListener("change", onChange);
    };
  }, [dispatch]);
  return <Home articles={articles} />;
}
