import React from 'react';

class NewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [{
        id: 1,
        headline: "Cookie Monster Crisis!",
        summary: "Cookie Monster falls ill after big feasst.",
        date: "03/11/2019",
        story: "After a glorious cookie feast, poor ol' cookie monster discovers that he is gluten intolerant.",
        catagory: "Celebrity",
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

}

export default NewsContainer;
