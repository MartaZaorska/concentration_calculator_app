import React from "react";

function SelectList({ data, value, setValue }) {
  return (
    <select value={value} onChange={(e) => setValue(e.target.value)}>
      {Object.entries(data).map((item) => (
        <option value={item[0]} key={item[0]}>
          {item[1].abbr}
          {item[1].sup ? 3 : null}
        </option>
      ))}
    </select>
  );
}

export default React.memo(SelectList);
