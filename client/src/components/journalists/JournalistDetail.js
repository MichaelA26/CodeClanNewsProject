import React from 'react';
import { Link } from 'react-router-dom';


const JournalistDetail = ({journalist,onJournalistSelected}) => {

  function handleClick() {
    onJournalistSelected(journalist.id);
    // this.goToRoute(`journalists/${journalist.id}`)
  }

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
  employed = journalist.employed? "Employed" : "Not employed"

  return (

      <tr>
        <td>{journalist.firstName} {journalist.lastName}</td>
        <td>{journalist.phoneNumber}</td>
        <td>{employed}</td>
        < Link to = {`journalists/${journalist.id}`}>
          < td onClick = {handleClick} > ⎇ </td>
        </Link>
      </tr>
  )
}

export default JournalistDetail;
