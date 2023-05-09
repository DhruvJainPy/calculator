import React, { useContext } from 'react'
import ValueContext from '../Context/ValueContext'
const Result = () => {
    const { state } = useContext(ValueContext);
    return (
        <div>
            <div className="row bg-dark p-3 text-white">
                <p className="display-5 text-end" style={{ fontSize: "3.25rem" }}>{state}</p>
            </div>
        </div>
    )
}

export default Result
