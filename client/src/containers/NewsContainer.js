import React from 'react';
import HomePage from "../components/HomePage"
import NavBar from "../components/NavBar"
import ArticlesComponent from '../components/articles/ArticlesComponent'
import JournalistComponent from '../components/journalists/JournalistComponent'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ErrorPage from "../components/ErrorPage"

class NewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [

        ],

        journalists: [

        ]
      }
    }

    componentDidMount(){

      const promises = [
      fetch('http://localhost:8080/articles')
      .then(res => res.json())
      .then(res => res["_embedded"])
      .then(res => res.articles)
      .then(data => this.setState({articles: data}))
        ,
      fetch("http://localhost:8080/journalists")
      .then(res => res.json())
      .then(res => res["_embedded"])
      .then(res => res.journalists)
      .then(data => this.setState({journalists: data}))
      ]
      Promise.all(promises)
    }

    render(){
      return(
        <Router>
          <React.Fragment>
            <NavBar />
            < h1 > Joke News Inc.
            "Is it a joke, or is it a weird truth..." </h1>
            <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              path="/articles"
              render={() => <ArticlesComponent articles={this.state.articles}/>}
              />
            <Route
              path="/journalists"
              render={() => <JournalistComponent journalists={this.state.journalists} /> }
              />
            <Route component={ErrorPage} />
            </Switch>
          </React.Fragment>
        </Router>
      );
    }
  }

  export default NewsContainer;
