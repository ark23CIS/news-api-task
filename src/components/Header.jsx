import React from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../redux/actions";

export default function Header() {
  const dispatch = useDispatch();
  const onClickCategory = React.useCallback(
    (e) => {
      dispatch(fetchNews(e.currentTarget.innerHTML));
    },
    [dispatch]
  );
  return (
    <>
      <ul className="ul-menu">
        <li onClick={onClickCategory} className="ul-menu__item business">
          business
        </li>
        <li onClick={onClickCategory} className="ul-menu__item enertainment">
          entertainment
        </li>
        <li onClick={onClickCategory} className="ul-menu__item general">
          general
        </li>
        <li onClick={onClickCategory} className="ul-menu__item health">
          health
        </li>
        <li onClick={onClickCategory} className="ul-menu__item science">
          science
        </li>
        <li onClick={onClickCategory} className="ul-menu__item sports">
          sports
        </li>
        <li onClick={onClickCategory} className="ul-menu__item technology">
          technology
        </li>
      </ul>
    </>
  );
}
