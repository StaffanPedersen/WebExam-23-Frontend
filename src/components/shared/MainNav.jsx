import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <header className="container-fluid">
      <nav>
        <ul>
          <li>
            <Link to="/">Hjem</Link>
          </li>
          <li>
            <Link to="driver">Førere</Link>
          </li>
          <li>
            <Link to="admin">Adminside</Link>
          </li>
          <li>
            <Link to="deletedriver">Slett Førere</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
