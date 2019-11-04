import React from 'react';
import ArticlesComponent from '../components/ArticlesComponent'
import JournalistComponent from '../components/JournalistComponent'

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
        },
        {
          id: 2,
          headline: "The Sinking City.",
          summary: "Man trying to break World Record weight creates sinkhole",
          date: "04/11/2019",
          story: "Noel Edmunds has changed career and was attempting to become the worlds heaviest man. After indulging in snacks for over a yesar his weight grew so colossal that he inadvertantly created a sinkhole. He was swallowed up by the earth and is expected to hit the core of the Earth next Tuesday. Deal or no deal indeed.",
          category: "Health",
          journalist: {
            id: "2",
            firstName: "Barry",
            lastName: "Trotter",
            phoneNumber: "01506 123456",
            employed: "Yes"}
          }
        ],

        journalists: [
          {
            id: 1,
            firstName: "Weildstone",
            lastName: "Raider",
            phoneNumber: "080000 1066",
            employed: "Yes"
          },
          {
            id: 2,
            firstName: "Barry",
            lastName: "Trotter",
            phoneNumber: "01506 123456",
            employed: "Yes"
          }
        ]
      }
    }

    render(){
      return(
        <div>
        <h1>Joke News Inc. "Is it a joke, or is it a weird truth..."</h1>
        <ArticlesComponent articles={this.state.articles}/>
        <JournalistComponent journalists={this.state.journalists}/>
        </div>
      );
    }
  }

  export default NewsContainer;
