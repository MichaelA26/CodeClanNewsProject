import React from 'react';
import ArticleDetail from './ArticleDetail';

const ArticleList = ({
    articles,
    deleteArticle
  }) => {
  const articlesNodes = articles.map((article) => {
    return (
      < ArticleDetail key = {
        article.id
      }
      article = {
        article
      }
      deleteArticle = {
        deleteArticle
      }
      />
    )
  })
  return(
      <table>
        <tr>
          <th>Headline</th>
          <th>Summary</th>
          <th>Date</th>
          <th>Category</th>
        </tr>
          {articlesNodes}
      </table>
  )
}

export default ArticleList;
