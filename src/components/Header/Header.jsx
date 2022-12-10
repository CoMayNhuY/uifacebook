import "../../components/Header/header.css";
import BellHeader from "./BellHedeader";
function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 colstyle1">
          <span className="logoFB">Facebook</span>
        </div>
        <div className="col-sm-4 colstyle2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
            <button className="btn btn-info" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className="col-sm-4 colstyle3">
          <BellHeader />
          <div>
            <img
              src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
              alt="avt"
              className="imgAvt"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
