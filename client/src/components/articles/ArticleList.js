import React from 'react';
import ArticleDetail from './ArticleDetail';

const ArticleList = ({ articles, onArticleSelected, deleteArticle, editArticle }) => {
  const articlesNodes = articles.map((article) => {
    return (
      <ArticleDetail 
        key={article.id} 
        article={article} 
        onArticleSelected={onArticleSelected} 
        deleteArticle={deleteArticle} 
        editArticle={editArticle}
      />
    )
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Headline</th>
          <th>Journalist</th>
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
