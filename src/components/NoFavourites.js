import { useNavigate } from "react-router-dom";
import { Empty, Button } from "antd";

const NoFavourites = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };
  return (
    <div className="no-fav">
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={
          <span>
            You do not have any favourite activities! Search for one below
          </span>
        }
      />
      <Button id="no-fav-button" type="primary" onClick={() => routeChange()}>
        Search
      </Button>
    </div>
  );
};

export default NoFavourites;
