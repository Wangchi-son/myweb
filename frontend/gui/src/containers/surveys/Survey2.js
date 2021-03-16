import React from "react";
import { Radio } from "antd";

const Survey2 = () => {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <h3>2번 문제(radio)</h3>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
        <Radio value="c">C</Radio>
        <Radio value="d">D</Radio>
      </Radio.Group>
    </div>
  );
};

export default Survey2;
