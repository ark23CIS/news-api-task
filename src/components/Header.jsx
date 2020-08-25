import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, setQuery } from "../redux/actions";
import { Link } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const articles = useSelector(state => state.articles)
  const [activePage, setActivePage] = React.useState("general");
  const searchRef = React.useRef();
  const onChange = React.useCallback(
    (e) => {
      e.preventDefault();
      var key = e.keyCode || e.which;
      if (key !== 13) return;
      console.log(e.target.value, articles);
      dispatch(setQuery(e.target.value))
    },
    [dispatch, articles]
  );
  const onClickCategory = React.useCallback(
    (e) => {
      dispatch(setQuery(''));
      searchRef.current.value = '';
      let nodes = Array.from(e.target.parentNode.parentNode.childNodes);
      nodes.forEach((el) => el.classList.remove("ul-menu__item-link--active"));
      e.target.parentNode.classList.add("ul-menu__item-link--active");
      let current = e.currentTarget.innerHTML.toLowerCase();
      if (
        current === activePage ||
        (activePage === "general" && current === "home")
      )
        return;
      if (current !== "home") dispatch(fetchNews(current));
      else {
        dispatch(fetchNews("general"));
      }
      setActivePage(current);
    },
    [dispatch, activePage]
  );
  return (
    <>
      <header className="header" bg="dark" variant="dark">
        <ul className="ul-menu">
          <Link
            to="/"
            className="ul-menu__item-link ul-menu__item-link--active"
          >
            <li className="ul-menu__item home" onClick={onClickCategory}>
              Home
            </li>
          </Link>
          <Link to="/" className="ul-menu__item-link">
            <li onClick={onClickCategory} className="ul-menu__item business">
              business
            </li>
          </Link>
          <Link to="/" className="ul-menu__item-link">
            <li
              onClick={onClickCategory}
              className="ul-menu__item enertainment"
            >
              entertainment
            </li>
          </Link>
          <Link to="/" className="ul-menu__item-link">
            <li onClick={onClickCategory} className="ul-menu__item general">
              general
            </li>
          </Link>
          <Link to="/" className="ul-menu__item-link">
            <li onClick={onClickCategory} className="ul-menu__item health">
              health
            </li>
          </Link>
          <Link to="/" className="ul-menu__item-link">
            <li onClick={onClickCategory} className="ul-menu__item science">
              science
            </li>
          </Link>
          <Link to="/" className="ul-menu__item-link">
            <li onClick={onClickCategory} className="ul-menu__item sports">
              sports
            </li>
          </Link>
          <Link to="/" className="ul-menu__item-link">
            <li onClick={onClickCategory} className="ul-menu__item technology">
              technology
            </li>
          </Link>
        </ul>
        <input type="text" onKeyUp = {onChange} ref={searchRef}/>
      </header>
    </>
  );
}
