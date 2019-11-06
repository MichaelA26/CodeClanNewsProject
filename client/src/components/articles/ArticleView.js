import React from 'react';
import { Link } from 'react-router-dom';

const ArticleView = ({ article, editArticle }) => {
    if (!article) return null

    // const handleEdit = () => {
    //     fetch(`http://localhost:8080/articles/${article.id}`, {
    //       method: 'PUT', 
    //       header: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     }
    //     })
    //     // editArticle(article.id);
    // }
    
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