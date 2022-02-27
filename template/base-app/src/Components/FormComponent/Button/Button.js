import "./button.stylesheet.css";
import { useNavigate } from "react-router";

export default function ButtonComponent(props) {
  
  const navigate = useNavigate();

  const changeRoutePath = () => {
    let pathUrl = props.path;
    console.log(pathUrl);
    navigate(pathUrl);
  };
  return (
    <>
      <button
        className={props.className ? props.className : "button"}
        type="button"
        onClick={changeRoutePath}
      >
        {props.label}
      </button>
    </>
  );
}
