import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import isLogged from "../../utils/auth/isLogged";

const NavLink = ({ link }) => {
  const element = link.external ? (
    <a
      href={link.url}
      rel="noreferrer"
    >
      {link.name}
    </a>
  ) : (
    <Link to={link.url}>{link.name}</Link>
  );

  return <li className={styles.navigationLinks}>{element}</li>;
};

export default function Header() {
  let linksList = [];
  if (isLogged()) {
    linksList = [
      { name: "github", url: "https://github.com/Isutomu", external: true },
      { name: "about", url: "/about", external: false },
      { name: "tags", url: "/tags", external: false },
      { name: "log out", url: "/logout", external: false },
    ];
  } else {
    linksList = [
      { name: "github", url: "https://github.com/Isutomu", external: true },
      { name: "about", url: "/about", external: false },
      { name: "tags", url: "/tags", external: false },
      { name: "log in", url: "/login", external: false },
      { name: "sign up", url: "/signup", external: false },
    ];
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.siteTitle}>
        <Link to="/">Isutomu Naruto</Link>
      </h1>
      <nav>
        <ul className={styles.navigation}>
          {linksList.map((link, index) => (
            <NavLink
              key={index}
              link={link}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}

NavLink.propTypes = {
  link: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    external: PropTypes.bool.isRequired,
  }),
};
