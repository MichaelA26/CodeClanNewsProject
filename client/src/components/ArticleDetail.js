import React from 'react';


const ArticleDetail = ({article}) => {
  return (
    <tr>
    <td>{article.headline}</td>
    <td>{article.summary}</td>
    <td>{article.date}</td>
    </tr>
  )
}


export default ArticleDetail;
