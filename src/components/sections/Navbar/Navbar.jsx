import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Portfolio from "../../pages/Portfolio/Portfolio";
import { useLanguage } from "../../../context/LanguageContext";

const Navbar = () => {
  const { lang, setLang, tk, t } = useLanguage();

  const navbarData = [
    { id: 1, title: tk(t.nav.about), to: "/about" },
    { id: 2, title: tk(t.nav.works), to: "/works" },
    { id: 3, title: tk(t.nav.contact), to: "/contact" },
  ];

  const btnBase =
    "min-w-[2.75rem] px-2 py-1.5 rounded text-sm font-semibold tracking-wide transition-colors duration-150";
  const btnOn = `${btnBase} bg-baby-600 text-white`;
  const btnOff = `${btnBase} text-gray-400 hover:bg-gray-700 hover:text-baby-300`;

  return (
    <Router>
      <nav className="md:mx-8 mb-3 px-4 md:px-6 py-2 z-10 sticky top-0 bg-gray-800 border border-gray-700 shadow rounded-md flex flex-wrap items-center justify-between gap-4">
        <ul className="flex flex-wrap">
          {navbarData.map((el) => (
            <LinkItem el={el} key={el.id} />
          ))}
        </ul>
        <div
          className="flex items-center gap-px rounded-lg border border-gray-600 bg-gray-900/50 p-0.5"
          role="group"
          aria-label="Site language"
        >
          <button
            type="button"
            className={lang === "en" ? btnOn : btnOff}
            aria-pressed={lang === "en"}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <button
            type="button"
            className={lang === "lv" ? btnOn : btnOff}
            aria-pressed={lang === "lv"}
            onClick={() => setLang("lv")}
          >
            LV
          </button>
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/works">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;

const LinkItem = (props) => {
  const { title, to } = props.el;
  return (
    <li className="m-3 lg:mx-5">
      <NavLink
        to={to}
        activeClassName="text-baby-400"
        className="text-gray-300 text-medium hover:text-baby-400"
      >
        {title}
      </NavLink>
    </li>
  );
};
