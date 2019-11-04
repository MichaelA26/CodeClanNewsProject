import React from 'react';
import JournalistDetail from './JournalistDetail';

const JournalistList = ({journalists}) => {
  const journalistsNodes = journalists.map((journalist) => {
    return (
      <JournalistDetail key={journalist.id} journalist={journalist} />
    )
  })
  return(
    <table>
    <tr>
    <th>Name</th>
    <th>Phone Number</th>
    <th>Employment Status</th>
    </tr>

    {journalistsNodes}
    </table>
  )
}

export default JournalistList;
