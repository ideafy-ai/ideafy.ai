import "../_globals/global.scss";
import avatar from "../assets/avatar.jpg";
function Card(props: any) {
  return (
    <div className="content bg-light-grey card">
      <div className="info flex flex-start mr-10">
        <div className="avatar">
          <img src={avatar} alt="user"></img>
        </div>
        <div className="flex column ml-10 flex-start mt-10">
          <p className="header-3 p-0 m-0">Title</p>
          <p className="m-0 paragraph paragraph-small">John Doe</p>
        </div>
      </div>
      <div className="content">
        <p className="mt-10 paragraph paragraph-small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
      </div>
      <div className="content flex space-between">
        <p className="paragraph paragraph-xsmall flext-6">Javascript</p>
        <p className="paragraph paragraph-xsmall flext-6">Updated Months ago</p>
      </div>
    </div>
  );
}

export default Card;
