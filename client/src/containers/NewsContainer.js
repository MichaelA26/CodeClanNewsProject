import React from 'react';
import ArticlesComponent from '../components/ArticlesComponent'

class NewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [{
        id: 1,
        headline: "Cookie Monster Crisis!",
        summary: "Cookie Monster falls ill after big feast.",
        date: "03/11/2019",
        story: "After partaking in a glorious cookie bonanza, poor ol' cookie monster discovers that he is gluten intolerant. The aftermath was... Messy. You've got no fans.",
        category: "Celebrity",
        journalist: {
          id: "1",
          firstName: "Weildstone",
          lastName: "Raider",
          phoneNumber: "080000 1066",
          employed: "Yes"}
        }],

        journalists: [{
          id: 1,
          firstName: "Weildstone",
          lastName: "Raider",
          phoneNumber: "080000 1066",
          employed: "Yes"
        }]
      }
    }

    render(){
      return(
        <div>
        <h1>Joke News Inc. "Is it a joke, or is it a weird truth..."</h1>
        <ArticlesComponent articles={this.state.articles}/>
        </div>
      );
    }
  }

  export default NewsContainer;
