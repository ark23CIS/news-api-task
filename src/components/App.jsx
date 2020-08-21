import React from "react";
import "./App.css";
import { fetchNews } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home";
import Header from "./Header";

export default function App() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state);
  console.log(articles);
  React.useEffect(() => {
    dispatch(fetchNews("general"));
  }, [dispatch]);
  return (
    <>
      <Header />
      <Home articles={articles} />
    </>
  );
}
