import React from 'react';
import JournalistList from './JournalistList';
import AddJournalistForm from './AddJournalistForm';
import {Link} from 'react-router-dom'

class JournalistComponent extends React.Component {
  render() {
    return(
      <div>
      <h3>Journalists</h3>
      <Link to="/addjournalist">
      <button>Add new journalist</button>
      </Link>
      <JournalistList journalists={this.props.journalists}/>
      
      </div>
    )
  }
}


export default JournalistComponent
