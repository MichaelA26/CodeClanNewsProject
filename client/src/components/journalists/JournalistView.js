import React from 'react';
import {Link} from 'react-router-dom';

const JournalistView = ({journalist}) => {
    if (!journalist) return null

    return (
        <React.Fragment>
            <form>
                <h3>First Name: {journalist.firstName} </h3>
                <h3>LastName: {journalist.lastName}</h3>
                <h3>Phone Number: {journalist.phoneNumber}</h3>
            </form>
        <Link to={`/journalists/${journalist.id}/edit`} >
            <button>Edit</button>
        </Link>
        </React.Fragment>

    )

}

export default JournalistView;