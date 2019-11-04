import React from 'react';
import ArticleDetail from './ArticleDetail';

const ArticleList = ({articles}) => {
  const articlesNodes = articles.map((article) => {
    return (
      <ArticleDetail key={article.id} article={article} />
    )
  })
  return(
    <table>
    <tr>
    <th>Headline</th>
    <th>Summary</th>
    <th>Date</th>
    </tr>

    {articlesNodes}
    </table>
  )
}

export default ArticleList;
