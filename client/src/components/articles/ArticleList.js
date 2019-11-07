import React from 'react';
import ArticleDetail from './ArticleDetail';

const ArticleList = ({ articles, onArticleSelected, deleteArticle, editArticle }) => {

  function sortTableAlphabetically(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("articlesTable");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

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
    <div>
      <table id="articlesTable">
        <thead>
          <tr>
            <th onClick={sortTableAlphabetically(0)}>Headline</th>
            <th onClick="sortTableAlphabetically(1)">Journalist</th>
            <th onClick="sortTableAlphabetically(2)">Summary</th>
            <th onClick="sortTableNumerically(3)">Date</th>
            <th onClick="sortTableAlphabetically(4)">Category</th>
          </tr>
        </thead>
        <tbody>
          {articlesNodes}
        </tbody>
      </table>
      <script>

      </script>
          </div>
      // <script>
      // function sortTableNumerically(n) {
      //   var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
      //   table = document.getElementById("articlesTable");
      //   switching = true;
      //   dir = "asc";
      //   while (switching) {
      //     switching = false;
      //     rows = table.rows;
      //     for (i = 1; i < (rows.length - 1); i++) {
      //       shouldSwitch = false;
      //       x = rows[i].getElementsByTagName("TD")[n];
      //       y = rows[i + 1].getElementsByTagName("TD")[n];
      //       if (Number(x.innerHTML) > Number(y.innerHTML)) {
      //         shouldSwitch = true;
      //         break;
      //       }
      //     }
      //     if (shouldSwitch) {}
      //       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      //       switching = true;
      //       switchcount ++;
      //     } else {
      //       if (switchcount == 0 && dir == "asc") {
      //         dir = "desc";
      //         switching = true;
      //       }
      //     }
      //   }
      // }
      // </script>

  )
}

export default ArticleList;
