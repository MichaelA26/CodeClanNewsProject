import React from 'react';
import { Link , useHistory } from 'react-router-dom'

const ArticleView = ({ article , deleteArticle}) => {
    let history = useHistory();
      
    if (!article) return null

    const handleDelete = () => {
        fetch(`http://localhost:8080/articles/${article.id}`, {
            method: 'DELETE',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        deleteArticle(article.id);
        history.push("/articles")
    }
    
    const journalist = article["_embedded"].journalist

    return (
        <div>
        < form >
            <h3> Headline: {article.headline} </h3> 
            <h3> Category: {article.category} </h3> 
            <h3> Date: {article.date} </h3> 
            <h3> Journalist: {journalist.firstName} {journalist.lastName} </h3> 
            <h3> Summary: {article.summary} </h3> 
            <h3> Story: {article.story} </h3> 
        </form>
        <Link to={`/articles/${article.id}/edit`}>
        <button>Edit</button>
        </Link>
        <button onClick={handleDelete} >Delete</button>
        </div>

    )

}

export default ArticleView;