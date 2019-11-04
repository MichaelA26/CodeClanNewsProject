import React from 'react';
import ArticleList from './ArticleList';

class ArticlesComponent extends React.Component {
  render() {
    return(
      <div>
      <h3>Articles</h3>
      <ArticleList articles={this.props.articles}/>
      </div>
    )
  }
}


export default ArticlesComponent;