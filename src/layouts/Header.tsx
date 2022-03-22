import "../_globals/global.scss";
function Header() {
  return (
    <div className="full-container head background-white">
      <div className="container">
        <div className="header flex flex-12 space-between p-20">
          <div className="content flex-3">
            <h1 className="header-1 p-5">Github Fetch</h1>
          </div>
          <div className="content flex-4 flex">
            <p className="link p-5 mr-10">About us</p>
            <p className="link p-5 ml-10">Contact us</p>
          </div>
          <div className="content flex flex-4 space-around">
            <div className="btn btn-primary mr-10 ml-10">Get started free</div>
            <div className="btn btn-secondary ml-10 mr-10">Sign in</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
