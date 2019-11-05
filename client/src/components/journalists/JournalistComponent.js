import React from 'react';
import JournalistList from './JournalistList';
import AddJournalistForm from './AddJournalistForm';

class JournalistComponent extends React.Component {
  render() {
    return(
      <div>
      <h3>Journalists</h3>
      <button>Add new journalist</button>
      <JournalistList journalists={this.props.journalists}/>
      
      </div>
    )
  }
}


export default JournalistComponent
