import React from 'react';
import HomePage from "../components/HomePage"
import NavBar from "../components/NavBar"
import ArticlesComponent from '../components/articles/ArticlesComponent'
import JournalistComponent from '../components/journalists/JournalistComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ErrorPage from "../components/ErrorPage"
import AddJournalistForm from '../components/journalists/AddJournalistForm';
import AddArticleForm from '../components/articles/AddArticleForm';
import ArticleView from '../components/articles/ArticleView';

class NewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [

      ],

      journalists: [

      ],
      currentArticle: null
    }
    this.onJournalistSubmit = this.onJournalistSubmit.bind(this);
    this.onArticleSubmit = this.onArticleSubmit.bind(this);
    this.onArticleSelected = this.onArticleSelected.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this)
  }

  componentDidMount() {

    const promises = [
      fetch('http://localhost:8080/articles')
        .then(res => res.json())
        .then(res => res["_embedded"])
        .then(res => res.articles)
        .then(data => this.setState({ articles: data }))
      ,
      fetch("http://localhost:8080/journalists")
        .then(res => res.json())
        .then(res => res["_embedded"])
        .then(res => res.journalists)
        .then(data => this.setState({ journalists: data }))
    ]
    Promise.all(promises)
  }

  onJournalistSubmit(newJournalist) {
    fetch('http://localhost:8080/journalists', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJournalist),
    })
      .then(res => res.json())
      .then(newEntry => {
        const updatedJournalists = [...this.state.journalists, newEntry]
        this.setState({ journalists: updatedJournalists })
      })
  }

  onArticleSubmit(newArticle) {
    fetch('http://localhost:8080/articles', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newArticle),
    })
      .then(res => res.json())
      .then(newEntry => {
        const updatedArticles = [...this.state.articles, newEntry]
        this.setState({ articles: updatedArticles })
      })
  }

  onArticleSelected(id) {
    const selectedArticle = this.state.articles.find((article) => {return article.id === id} )
    this.setState({currentArticle: selectedArticle})
  }


  deleteArticle(id){
    const updatedArray = this.state.articles.filter(article => article.id !== id );
    this.setState({ articles: updatedArray })
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          < h1 > Joke News Inc.
            "Is it a joke, or is it a weird truth..." </h1>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              path="/articles"
              render={() => (
                <ArticlesComponent 
                  articles={this.state.articles} 
                  onArticleSelected={this.onArticleSelected}
                  deleteArticle = {this.deleteArticle}
                />
              )}
            />
            <Route
              path="/journalists"
              render={() => <JournalistComponent journalists={this.state.journalists} />}
            />
            <Route path="/addjournalist"
              render={() => <AddJournalistForm onJournalistSubmit={this.onJournalistSubmit} />} />
            <Route path="/addarticle"
              render={() => <AddArticleForm onArticleSubmit={this.onArticleSubmit} journalists={this.state.journalists} />} />

            <Route path="/:id"
              render={() => <ArticleView onArticleSelected={this.handleSelect} article={this.state.currentArticle} />} />


            <Route component={ErrorPage} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default NewsContainer;
