import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Breadcrumb } from "antd";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div id="logo">
        <p>Bored activities</p>
      </div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link className="link" to="/">
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
