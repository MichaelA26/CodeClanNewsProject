import React from 'react';
import ArticleList from './ArticleList';
import { Link } from 'react-router-dom';

class ArticlesComponent extends React.Component {
  render() {
    return(
      <div>
      <h3>Articles</h3>
      <Link to="/addarticle">
      <button>Add new article</button>
      </Link>
      <ArticleList articles={this.props.articles}/>
      </div>
    )
  }
}


export default ArticlesComponent;
