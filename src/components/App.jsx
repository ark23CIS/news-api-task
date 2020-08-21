import React from "react";
import { fetchNews } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home";

export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  React.useEffect(() => {
    dispatch(fetchNews("general"));
  }, []);
  return <Home />;
}
