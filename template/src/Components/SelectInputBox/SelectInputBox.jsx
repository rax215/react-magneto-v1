import { useEffect } from "react";
import { customDropdown } from "./CustomSelectHelper";
import "./selectStyles.css";

export default function SelectInputBox(props) {
  const { id, options, handleChange } = props || {};

  /***
   * @Param selectId
   * @description Used to generate unique id for select dropdown
   */
  const selectId = Math.floor(Math.random() * 10000);

  useEffect(() => {
    customDropdown(handleChange, selectId);
  }, []);

  return (
    <div className={`custom-select dropdown-cls-${selectId}`}>
      <select id={id} onChange={handleChange}>
        {options.length &&
          options.map((item) => (
            <option key={item.key} value={item.value}>
              {item.label}
            </option>
          ))}
      </select>
    </div>
  );
}
