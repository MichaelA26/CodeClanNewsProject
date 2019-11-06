import React from 'react';
import { useHistory } from 'react-router-dom';

const ArticleDetail = ({ article, onArticleSelected, deleteArticle }) => {

  let history = useHistory();

  function handleClick() {
    onArticleSelected(article.id);
    history.push(`/articles/${article.id}`)
  };

  const handleDelete = () => {
    fetch(`http://localhost:8080/articles/${article.id}`, {
      method: 'DELETE',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    deleteArticle(article.id);
  }

  const journalist = article["_embedded"].journalist
  
  return (
    <tr onClick={handleClick}>
      <td>{article.headline}</td>
      <td> {journalist.firstName} {journalist.lastName} </td>
      <td>{article.summary}</td>
      <td>{article.date}</td>
      <td>{article.category}</td>
      <td onClick={handleDelete} >DELETE</td>
    </tr>
  )
}


export default ArticleDetail;
