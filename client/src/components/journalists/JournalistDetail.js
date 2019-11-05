import React from 'react';


const JournalistDetail = ({journalist}) => {

let employed 
employed = journalist.employed? "employed" : "not employed"

  return (
    <tr>
    <td>{journalist.firstName} {journalist.lastName}</td>
    <td>{journalist.phoneNumber}</td>
    <td>{employed}</td>
    </tr>
  )
}

export default JournalistDetail;
