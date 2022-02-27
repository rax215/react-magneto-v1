import "./radioStyle.css";

export default function RadioInputButton(props) {
  const { handleChange, radioList } = props || {};
  return (
    <div className="display-flex-cls">
      {radioList.length &&
        radioList.map((item) => {
          const { label, value, checked } = item;
          return (
            <label className="container">
              <input
                type="radio"
                name="radio"
                id={label}
                onChange={handleChange}
                checked={checked}
                value={value}
              />
              <span className="labelTxt">{label}</span>
              <span className="checkmark"></span>
            </label>
          );
        })}
    </div>
  );
}
