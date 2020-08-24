import React from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../redux/actions";
import { Link } from "react-router-dom";
import { Form, FormControl, Button } from "react-bootstrap";

export default function Header() {
  const dispatch = useDispatch();
  const [activePage, setActivePage] = React.useState("general");
  const onClickCategory = React.useCallback(
    (e) => {
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
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 search-input"
          />
          <Button variant="outline-info">Search</Button>
        </Form>
      </header>
      {/* <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Features</Nav.Link>
          <Nav.Link href="/">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar> */}
    </>
  );
}
