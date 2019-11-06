import React from 'react';

const JournalistView = ({journalist}) => {
    if (!journalist) return null

    return (
        <form>
            <h3>First Name: {journalist.firstName} </h3>
            <h3>LastName: {journalist.lastName}</h3>
            <h3>Phone Number: {journalist.phoneNumber}</h3>
        </form>
    )

}

export default JournalistView;