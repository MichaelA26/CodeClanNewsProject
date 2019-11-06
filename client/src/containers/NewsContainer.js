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
import JournalistView from '../components/journalists/JournalistView';

class NewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      journalists: [],
      currentArticle: null,
      currentJournalist: null
    }
    this.onJournalistSubmit = this.onJournalistSubmit.bind(this);
    this.onArticleSubmit = this.onArticleSubmit.bind(this);
    this.onArticleSelected = this.onArticleSelected.bind(this);
    this.onJournalistSelected = this.onJournalistSelected.bind(this)
    this.deleteArticle = this.deleteArticle.bind(this)
  }

  componentDidMount() {

    const promises = [
      fetch('http://localhost:8080/articles/search/findArticleOrderByDateDesc')
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
        const updatedArticles = [newEntry ,...this.state.articles]
        this.setState({ articles: updatedArticles })
      })
  }

  onArticleSelected(id) {
    const selectedArticle = this.state.articles.find((article) => {return article.id === id} )
    this.setState({currentArticle: selectedArticle})
  }

  onJournalistSelected(id){
    const selectedJournalist = this.state.journalists.find((journalist) => {return journalist.id === id})
    this.setState({currentJournalist: selectedJournalist})
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
              exact path="/articles"
              render={() => (
                <ArticlesComponent
                  articles={this.state.articles}
                  onArticleSelected={this.onArticleSelected}
                  deleteArticle = {this.deleteArticle}
                />
              )}
            />
            <Route
              exact path="/journalists"
              render={() => <JournalistComponent journalists={this.state.journalists} onJournalistSelected={this.onJournalistSelected} />}
            />
            <Route exact path="/addjournalist"
              render={() => <AddJournalistForm onJournalistSubmit={this.onJournalistSubmit} />} />
            <Route exact path="/addarticle"
              render={() => <AddArticleForm onArticleSubmit={this.onArticleSubmit} journalists={this.state.journalists} />} />

            <Route exact path="/articles/:id"
              render={() => <ArticleView onArticleSelected={this.handleSelect} article={this.state.currentArticle} />} />

            <Route exact path="/journalists/:id"
              render={() => <JournalistView onJournalistSelected={this.handleSelect} journalist={this.state.currentJournalist} /> } />

            <Route component={ErrorPage} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default NewsContainer;
