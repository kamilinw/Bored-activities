import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <h2>Bored activities</h2>
      </div>
      <ul>
        <li>
          <Link to="/">Random activity</Link>
        </li>
        <p> / </p>
        <li>
          <Link to="/fav">Favourites</Link>
        </li>
        <p> / </p>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
