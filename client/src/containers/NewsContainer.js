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
        // {
        // id: 1,
        // headline: "Cookie Monster Crisis!",
        // summary: "Cookie Monster falls ill after big feast.",
        // date: "03/11/2019",
        // story: "After partaking in a glorious cookie bonanza, poor ol' cookie monster discovers that he is gluten intolerant. The aftermath was... Messy. You've got no fans.",
        // category: "Celebrity",
        // journalist: {
        //   id: "1",
        //   firstName: "Weildstone",
        //   lastName: "Raider",
        //   phoneNumber: "080000 1066",
        //   employed: "Yes"}
        // },
        // {
        //   id: 2,
        //   headline: "The Sinking City.",
        //   summary: "Man trying to break World Record weight creates sinkhole",
        //   date: "04/11/2019",
        //   story: "Noel Edmunds has changed career and was attempting to become the worlds heaviest man. After indulging in snacks for over a yesar his weight grew so colossal that he inadvertantly created a sinkhole. He was swallowed up by the earth and is expected to hit the core of the Earth next Tuesday. Deal or no deal indeed.",
        //   category: "Health",
        //   journalist: {
        //     id: "2",
        //     firstName: "Barry",
        //     lastName: "Trotter",
        //     phoneNumber: "01506 123456",
        //     employed: "Yes"}
        //   }
        ],

        journalists: [
          // {
          //   id: 1,
          //   firstName: "Weildstone",
          //   lastName: "Raider",
          //   phoneNumber: "080000 1066",
          //   employed: "Yes"
          // },
          // {
          //   id: 2,
          //   firstName: "Barry",
          //   lastName: "Trotter",
          //   phoneNumber: "01506 123456",
          //   employed: "Yes"
          // }
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

    //
    // handleChange(event) {
    //   const target = event.target;
    //   const value = target.value;
    //   const name = target.name;
    //   let item = {...this.state.item};
    //   item[name] = value;
    //   this.setState({item});
    // }
  
    // async handleSubmit(event) {
    //   event.preventDefault();
    //   const {item} = this.state;
  
    //   await fetch('http://localhost:8080/journalists', {
    //     method: (item.id) ? 'PUT' : 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(item),
    //   });
    // }  

//

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
