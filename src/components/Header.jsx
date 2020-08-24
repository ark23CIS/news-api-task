import React from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../redux/actions";
import { Link } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const onClickCategory = React.useCallback(
    (e) => {
      dispatch(fetchNews(e.currentTarget.innerHTML.toLowerCase()));
    },
    [dispatch]
  );
  return (
    <>
      <header className="header">
        <ul className="ul-menu">
          <Link to="/" className="ul-menu__item-link">
            <li className="ul-menu__item home">Home</li>
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
        <div>
          <input type="text" placeholder="search" className="search-input" />
        </div>
      </header>
    </>
  );
}
