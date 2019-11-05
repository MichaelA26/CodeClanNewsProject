import React from 'react';


const JournalistDetail = ({journalist}) => {

  // const handleDelete = () => {
  //   fetch(`http://localhost:8080/journalists/${journalist.id}`, {
  //     method: 'DELETE',
  //     header: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  // }
 
  let employed 
  employed = journalist.employed? "employed" : "not employed"

  return (
    <tr>
    <td>{journalist.firstName} {journalist.lastName}</td>
    <td>{journalist.phoneNumber}</td>
    <td>{employed}</td>
    {/* <td onClick={handleDelete} >DELETE</td> */}
    </tr>
  )
}

export default JournalistDetail;
