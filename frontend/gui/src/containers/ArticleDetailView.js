import React from "react";
import axios from "axios";

import { Card } from "antd";

import Survey1 from "./surveys/Survey1";
import Survey2 from "./surveys/Survey2";

class ArticleDetail extends React.Component {
  state = {
    article: {},
    plainOptions: [],
  };

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleID}`).then((res) => {
      this.setState({
        article: res.data,
        plainOptions: res.data.multicheck,
      });
    });
  }

  render() {
    return (
      <div>
        <Card title={this.state.article.title}>
          <p>{this.state.article.content}</p>
          <p>{this.state.article.radio}</p>
          <Survey1 />
          <Survey2 />
        </Card>
      </div>
    );
  }
}

export default ArticleDetail;
