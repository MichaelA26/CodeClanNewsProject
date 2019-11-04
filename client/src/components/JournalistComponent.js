import React from 'react';
import JournalistList from './JournalistList';

class JournalistComponent extends React.Component {
  render() {
    return(
      <div>
      <h3>Journalists</h3>
      <JournalistList journalists={this.props.journalists}/>
      </div>
    )
  }
}


export default JournalistComponent
