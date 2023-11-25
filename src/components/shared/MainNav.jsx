import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <header className=" navbar_bg_color">
      <nav className="d-flex justify-content-center justify-content-around  list-unstyled m-2 p-3 ">
        <ul className=" nav nav-pills nav-fill ">
          <li className="nav-item">
            <Link className="nav-link active " to="driver">
              Førere
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="admin">
              Adminside
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              href="http://localhost:5029/index.html"
            >
              Api doc
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
