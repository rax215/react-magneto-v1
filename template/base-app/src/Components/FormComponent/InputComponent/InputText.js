import "./InputText.stylesheet.css";

export default function InputText({ type, label }) {
  return (
    <div className="input-box">
      <p>{label}</p> <input type={type} placeholder={label} maxLength="30" />
    </div>
  );
}
