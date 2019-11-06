import React from 'react';

const ArticleView = ({ article }) => {
    if (!article) return null
    
    return (
        <React.Fragment>
           {article.summary}
        </React.Fragment>
    )

}

export default ArticleView;