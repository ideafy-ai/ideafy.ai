import "../_globals/global.scss";
import blue from "../assets/blue.png";
function Button(props : any) {
  if (props.style === "primary")
    return <div className="btn btn-primary">{props.text}</div>;
  else
    return (
      <div className="btn btn-secondary ml-10 mr-10">{props.text}</div>
    );
}

export default Button;
