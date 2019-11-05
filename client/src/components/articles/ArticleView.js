import React from 'react';

const ArticleView = ({ article }) => {
    return (
        <React.Fragment>
           {article.summary}
        </React.Fragment>
    )

}

export default ArticleView;