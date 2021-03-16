import React, { Component } from "react";
import axios from "axios";

import { Checkbox, Row, Col } from "antd";

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

export class Survey1 extends Component {
  state = {
    article: {},
    plainOptions: [],
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/1`).then((res) => {
      this.setState({
        article: res.data,
        plainOptions: res.data.multicheck,
      });
    });
  }
  render() {
    return (
      <Checkbox.Group style={{ width: "100%" }}>
        <h3>1번 문제(multicheck)</h3>
        <Row>
          <Col span={8}>
            <Checkbox.Group
              options={this.state.plainOptions}
              defaultValue={null}
              onChange={onChange}
            ></Checkbox.Group>
          </Col>
        </Row>
      </Checkbox.Group>
    );
  }
}

export default Survey1;
