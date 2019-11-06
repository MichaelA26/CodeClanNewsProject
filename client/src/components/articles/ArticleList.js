import React from 'react';
import ArticleDetail from './ArticleDetail';

const ArticleList = ({ articles, onArticleSelected }) => {
  const articlesNodes = articles.map((article) => {
    return (
      <ArticleDetail key={article.id} article={article} onArticleSelected={onArticleSelected} />
    )
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Headline</th>
          <th>Summary</th>
          <th>Date</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {articlesNodes}
      </tbody>
    </table>
  )
}

export default ArticleList;
