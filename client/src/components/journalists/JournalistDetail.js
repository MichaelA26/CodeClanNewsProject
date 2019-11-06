import React from 'react';
import { useHistory } from 'react-router-dom';


const JournalistDetail = ({journalist,onJournalistSelected}) => {

  let history = useHistory();

  function handleClick() {
    onJournalistSelected(journalist.id);
    history.push(`journalists/${journalist.id}`)
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

      <tr onClick={handleClick}>
        <td>{journalist.firstName} {journalist.lastName}</td>
        <td>{journalist.phoneNumber}</td>
        <td>{employed}</td>
      </tr>
  )
}

export default JournalistDetail;
