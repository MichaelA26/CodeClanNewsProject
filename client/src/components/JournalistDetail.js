import React from 'react';


const JournalistDetail = ({journalist}) => {
  return (
    <tr>
    <td>{journalist.firstName} {journalist.lastName}</td>
    <td>{journalist.phoneNumber}</td>
    <td>{journalist.employed}</td>
    </tr>
  )
}

export default JournalistDetail;
