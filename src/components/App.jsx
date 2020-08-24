import React from "react";
import "./App.css";
import { fetchNews } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home";
import Header from "./Header";

export default function App() {
  const dispatch = useDispatch();
  let articles = useSelector((state) => state);
  console.log(articles);
  React.useEffect(() => {
    let input = document.querySelector(".search-input");
    console.log(input);
    input.addEventListener("change", (e) => {
      console.log(e.target.value);
    });
    dispatch(fetchNews("general"));
    return () => {
      input.removeEventListener("change");
    };
  }, [dispatch]);
  return (
    <>
      <Header />
      <Home articles={articles} />
    </>
  );
}
