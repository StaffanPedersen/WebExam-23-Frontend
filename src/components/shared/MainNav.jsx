import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <header className=" ">
      <nav className="">
        <ul className="d-flex justify-content-center justify-content-around list-unstyled m-2 p-3 ">
          <li>
            <Link to="driver">Førere</Link>
          </li>
          <li>
            <Link to="admin">Adminside</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
