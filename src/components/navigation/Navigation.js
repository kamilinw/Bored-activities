import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Breadcrumb } from "antd";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div id="logo">
        <Link to="/" onClick={() => window.location.reload()}>
          Bored activities
        </Link>
      </div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link
            className="link"
            to="/"
            onClick={() => window.location.reload()}
          >
            Random activity
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link className="link" to="/fav">
            Favourites
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link className="link" to="/about">
            About
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </nav>
  );
};

export default Navigation;
