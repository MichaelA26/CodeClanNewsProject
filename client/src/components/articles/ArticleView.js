import React from 'react';

const ArticleView = ({ article }) => {
    if (!article) return null
    
    const journalist = article["_embedded"].journalist

    return (
        < form >
            <h3> Headline: {article.headline} </h3> 
            <h3> Category: {article.category} </h3> 
            <h3> Date: {article.date} </h3> 
            <h3> Journalist: {journalist.firstName} {journalist.lastName} </h3> 
            <h3> Summary: {article.summary} </h3> 
            <h3> Story: {article.story} </h3> 
        </form>
    )

}

export default ArticleView;