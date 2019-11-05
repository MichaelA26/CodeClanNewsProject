import React from 'react';
import { Link } from 'react-router-dom';
// import ArticleView from './ArticleView';

// const ArticleDetail = ({article}) => {

  class ArticleDetail extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    value: {}
   

  }
  this.handleSelect = this.handleSelect.bind(this);
}

// const article = this.props.article;

  handleSelect(event) {
    this.props.article.onArticleSelected(event.target.value);
    this.setState({value: event.target.value})
  };


render() {
  return (
    <React.Fragment>
    <tr>
    <td>{this.props.article.headline}</td>
    <td>{this.props.article.summary}</td>
    <td>{this.props.article.date}</td>
    <td>{this.props.article.category}</td>
    <td>
          
           <Link to="/:id">
      <button onClick={this.handleSelect}>View the full article</button>
      </Link>

    </td>
    </tr>
    </React.Fragment>
  )
}
}


export default ArticleDetail;
