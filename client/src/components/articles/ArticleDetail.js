import React from 'react';
import { Link } from 'react-router-dom';
// import ArticleView from './ArticleView';

// const ArticleDetail = ({article}) => {

const ArticleDetail = ({ article, onArticleSelected }) => {

  function handleClick() {
    onArticleSelected(article.id);
  };

  return (
      <tr>
        <td>{article.headline}</td>
        <td>{article.summary}</td>
        <td>{article.date}</td>
        <td>{article.category}</td>
        <td>

          <Link to={`/${article.id}`}>
            <button onClick={handleClick}>View the full article</button>
          </Link>

        </td>
      </tr>
  )
}


export default ArticleDetail;
