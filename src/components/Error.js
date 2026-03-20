import React, { use } from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oops!</h1>
            <h3>Something went wrong :(</h3>
            <h3>{error.data} </h3>
            <h4>{error.status} : {error.statusText}</h4>
        </div>
    )
}

export default Error
